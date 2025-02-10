import Post from "@/components/sub-service/post";
import Link from "next/link";

// interface PageProps {
//   params: {
//     serviceName: string;
//   };
// }

interface PostData {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default async function Page({
  params,
}: {
  params: { serviceName: string };
}) {
  const { serviceName } = params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;
  if (!baseUrl) {
    throw new Error(
      "BASE_URL is not defined. Make sure to set it in .env.local"
    );
  }

  let serviceData: PostData[] = [];

  try {
    const res = await fetch(`${baseUrl}/service-posts/${serviceName}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch service posts: ${res.statusText}`);
    }

    serviceData = (await res.json()) as PostData[];

    if (!Array.isArray(serviceData)) {
      throw new Error("Invalid response format: Expected an array");
    }
  } catch (error) {
    console.error("Error fetching service posts:", error);
  }

  return (
    <>
      {serviceData.length > 0 ? (
        serviceData.map((post) => <Post key={post.id} {...post} />)
      ) : (
        <div className="text-center py-5">
          <h2>لا يوجد منشورات لهذه الخدمة</h2>
          <p>يرجى التحقق من وقتك لاحقًا للتحديثات.</p>
          <Link href="/" className="btn btn-primary">
            الرجوع إلى الصفحة الرئيسية
          </Link>
        </div>
      )}
    </>
  );
}
