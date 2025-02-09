import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { serviceName: string };
}) {
  const serviceName = params.serviceName; // ✅ بدون await

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;
  if (!baseUrl) {
    throw new Error(
      "BASE_URL is not defined. Make sure to set it in .env.local"
    );
  }

  // جلب البيانات من API
  const res = await fetch(`${baseUrl}/service-posts/${serviceName}`);
  const serviceData = await res.json();

  console.log(serviceData);

  return (
    <>
      {serviceData.length > 0 ? (
        serviceData.map((post: any) => <Post key={post.id} {...post} />)
      ) : (
        <div className="text-center py-5">
          <h2>لا يوجد منشورات لهذه الخدمة</h2>
          <p>يرجى التحقق من وقتك لاحقا للتحديثات.</p>
          <Link href="/" className="btn btn-primary">
            الرجوع الصفحة الرئيسية
          </Link>
        </div>
      )}
    </>
  );
}
