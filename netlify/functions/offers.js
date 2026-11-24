'use strict';

const fetch = require('node-fetch');
const { randomBytes } = require('crypto');
const { isIP } = require('net');
const API_URL = 'https://appcomplete.org/api/v2';

function reply(statusCode, data, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff',
      ...extraHeaders
    },
    body: JSON.stringify(data)
  };
}

function validOfferLink(value) {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch (_) {
    return false;
  }
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return reply(405, { error: 'Method not allowed' }, { Allow: 'GET' });
  }

  const apiKey = (process.env.OGADS_API_KEY || '').trim();
  if (!apiKey) {
    console.error('OGAds API key is not configured');
    return reply(503, { error: 'Offers temporarily unavailable' });
  }

  const headers = Object.fromEntries(
    Object.entries(event.headers || {}).map(([key, value]) => [key.toLowerCase(), value])
  );
  // Use the connecting IP supplied by Netlify; never invent an IP.
  const ip = String(headers['x-nf-client-connection-ip'] || '').trim();
  const userAgent = String(headers['user-agent'] || '').trim();
  if (!isIP(ip) || !userAgent) {
    return reply(400, { error: 'Missing valid visitor IP or user agent' });
  }

  const lang = headers['accept-language'] || 'en';
  const site = process.env.URL || 'https://modply.netlify.app';
  // One opaque request ID, not a conversion or proof of completion.
  // OGAds supports aff_sub4 as an Offer API query parameter.
  const trackingId = randomBytes(16).toString('hex');
  const url = new URL(API_URL);
  url.search = new URLSearchParams({
    ip, user_agent: userAgent, lang, site, ctype: '1', aff_sub4: trackingId
  }).toString();

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: { Authorization: `Bearer ${apiKey}`, Accept: 'application/json' },
      timeout: 8000,
      redirect: 'error'
    });
    if (!response.ok) {
      console.error('OGAds upstream HTTP status:', response.status);
      return reply(502, { error: 'Could not load offers' });
    }
    const data = await response.json();
    if (data && data.success === false) {
      console.error('OGAds reported an unsuccessful request');
      return reply(502, { error: 'Could not load offers' });
    }
    const raw = Array.isArray(data) ? data
      : Array.isArray(data?.offers) ? data.offers
      : Array.isArray(data?.data) ? data.data : null;
    if (!raw) {
      console.error('Unexpected OGAds response shape');
      return reply(502, { error: 'Could not load offers' });
    }
    // Keep provider order and tracking URL bytes unchanged.
    // Provide link/url aliases for the existing app.js renderer.
    const offers = raw.flatMap(offer => {
      if (!offer || typeof offer !== 'object' || Array.isArray(offer)) return [];
      const link = [offer.tracking_link, offer.link, offer.url, offer.offer_url]
        .find(validOfferLink);
      if (!link) return [];
      return [{ ...offer, tracking_link: link, link, url: link, offer_url: link }];
    });
    return reply(200, { offers });
  } catch (error) {
    // Do not log the URL, authorization token, or visitor IP.
    console.error('OGAds request failed:', error.type || error.name || 'Error');
    return reply(502, { error: 'Could not load offers' });
  }
};
