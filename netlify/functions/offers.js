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

  console.log('URL:', url);

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    console.log('Response status:', response.status);
    
    const data = await response.json();
    console.log('OGAds response:', JSON.stringify(data));

    // 1. استخراج العروض (تأكد من الشكل الصحيح للـ API)
    // غالباً كيكون data.offers أو data.data أو data مباشرة
    let offers = data.offers || data.data || (Array.isArray(data) ? data : []);

    // 2. التعديل: زيد aff_sub4 على كل رابط عرض
    const modifiedOffers = offers.map(offer => {
      // تحقق واش الرابط كاين
      const link = offer.tracking_link || offer.link || offer.url;
      if (!link) return offer;

      // صنع ID وحيد لكل نقرة (يمكنك تبدلو بـ UUID إلا بغيتي)
      const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
      
      // زيد aff_sub4 مع مراعاة واش الرابط فيه ? ولا لا
      const separator = link.includes('?') ? '&' : '?';
      const newLink = `${link}${separator}aff_sub4=${uniqueId}`;

      return {
        ...offer,
        // عوض الرابط القديم بالجديد (حافظ على نفس اسم الحقل اللي كيستعملو الـ Frontend)
        tracking_link: newLink, 
        // إلا كان الـ Frontend كيستعمل link أو url، زيدهم هنا تاني
        link: newLink,
        url: newLink
      };
    });

    // 3. إرجاع النتيجة المعدلة
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      // هنا كنرجعو modifiedOffers ماشي data الأصلي
      body: JSON.stringify(modifiedOffers) 
    };

  } catch (error) {
    console.log('Error:', error.message);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
     body: JSON.stringify({ success: true, offers: modifiedOffers })
    };
  }
};
