const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // المفتاح ديالك
  const API_KEY = '49764|PNVaRLI3kwP3rpVfBmOe0bFYwHx0OpFXMLBAFgSZ76ce3967';
  const API_URL = 'https://appcomplete.org/api/v2';

  // معلومات الزائر
  const ip = event.headers['x-forwarded-for'] || '1.1.1.1';
  const userAgent = event.headers['user-agent'] || 'Mozilla/5.0';
  const lang = event.headers['accept-language'] || 'en';
  const site = event.headers['referer'] || 'https://playgmod.netlify.app';

  const url = `${API_URL}?ip=${encodeURIComponent(ip)}&user_agent=${encodeURIComponent(userAgent)}&lang=${encodeURIComponent(lang)}&site=${encodeURIComponent(site)}&ctype=1`;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}` // هنا كيتحط المفتاح
      }
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Could not load offers' })
    };
  }
};