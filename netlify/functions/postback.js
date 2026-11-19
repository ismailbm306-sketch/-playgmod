export default async (req) => {
  const url = new URL(req.url);
  // وفقًا للوثائق الرسمية، OGAds يستخدم aff_sub4 لتمرير معرف النقر
  const clickId = url.searchParams.get("aff_sub4");
  const payout = url.searchParams.get("payout");
  const offerId = url.searchParams.get("offer_id");

  console.log(`✅ Postback received: ClickID=${clickId}, Payout=${payout}, OfferID=${offerId}`);

  // TODO: يمكنك لاحقًا حفظ البيانات في قاعدة بيانات هنا (مثل Netlify Blobs)

  return new Response("OK", { status: 200 });
};
