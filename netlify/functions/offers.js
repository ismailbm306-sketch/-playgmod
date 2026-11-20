const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  console.log('Function started');
  
  const API_KEY = '49764|PNVaRLI3kwP3rpVfBmOe0bFYwHx0OpFXMLBAFgSZ76ce3967';
  const API_URL = 'https://appcomplete.org/api/v2';

  const forwarded = event.headers['x-forwarded-for'] || '';
  const ip = forwarded.split(',')[0].trim() || '1.1.1.1';
  const userAgent = event.headers['user-agent'] || 'Mozilla/5.0';
  const lang = event.headers['accept-language'] || 'en';
  const site = event.headers['referer'] || 'https://modply.netlify.app';

  const url = `${API_URL}?ip=${encodeURIComponent(ip)}&user_agent=${encodeURIComponent(userAgent)}&lang=${encodeURIComponent(lang)}&site=${encodeURIComponent(site)}&ctype=1`;

  try {
    const response = await fetch(url, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    const data = await response.json();
    
    // 1. كنعرفو فين كاينة الداتا بالضبط (offers ولا data ولا هي هي)
    let offers = data.offers || data.data || (Array.isArray(data) ? data : []);

    // 2. كنعدلو العروض باحتياط كبير
    if (Array.isArray(offers)) {
      offers = offers.map(offer => {
        // كنقلبو على الرابط بأي اسم من هاد الأسماء
        const link = offer.tracking_link || offer.link || offer.url || offer.offer_url;
        
        if (link && typeof link === 'string') {
          const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
          const separator = link.includes('?') ? '&' : '?';
          const newLink = `${link}${separator}aff_sub4=${uniqueId}`;
          
          return {
            ...offer,
            tracking_link: newLink,
            link: newLink,
            url: newLink,
            offer_url: newLink
          };
        }
        return offer;
      });
    }

    // 3. نرجعو نفس الشكل اللي كان كيرجع بيه الـ API فـ الأول
    // إلا كان data فيه offers، نرجعو data.offers، إلا كان Array نرجعو Array
    const finalResponse = (data && data.offers) 
        ? { ...data, offers: offers } 
        : offers;

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(finalResponse) 
    };

  } catch (error) {
    console.log('Error:', error.message);
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Could not load offers' })
    };
  }
};
