const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  console.log('Function started');
  
  const API_KEY = '49764|PNVaRLI3kwP3rpVfBmOe0bFYwHx0OpFXMLBAFgSZ76ce3967';
  const API_URL = 'https://appcomplete.org/api/v2';

  const ip = event.headers['x-forwarded-for'] || '1.1.1.1';
  const userAgent = event.headers['user-agent'] || 'Mozilla/5.0';
  const lang = event.headers['accept-language'] || 'en';
  const site = event.headers['referer'] || 'https://modply.netlify.app';

  const url = `${API_URL}?ip=${encodeURIComponent(ip)}&user_agent=${encodeURIComponent(userAgent)}&lang=${encodeURIComponent(lang)}&site=${encodeURIComponent(site)}&ctype=1`;

  console.log('URL:', url); // هادي غادي تبان فـ اللوج

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    console.log('Response status:', response.status); // هادي غادي تبان فـ اللوج
    const data = await response.json();
    console.log('OGAds response:', JSON.stringify(data)); // هادي غادي تبان فـ اللوج
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.log('Error:', error.message); // هادي غادي تبان فـ اللوج
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
