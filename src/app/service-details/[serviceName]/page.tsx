import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Post from "@/components/sub-service/post";

interface PostData {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface PageProps {
  params: Promise<{ serviceName: string }>;
}

const API_BASE_URL = process.env.BASE_URL;

if (!API_BASE_URL) {
  throw new Error("BASE_URL is not defined");
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { serviceName } = await params;
  const decodedServiceName = decodeURIComponent(serviceName).replace(/-/g, " ");

  return {
    title: `${decodedServiceName} خدمة`,
    description: `اكتشف ${decodedServiceName} و الخدمات المقدمة منها`,
  };
}

async function fetchServicePosts(serviceName: string): Promise<PostData[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/service-posts/${serviceName}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      if (response.status === 404) notFound();
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid data format: Expected array");
    }

    return data as PostData[];
  } catch (error) {
    console.error("Failed to fetch service posts:", error);
    notFound();
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { serviceName } = await params;
  const decodedServiceName = decodeURIComponent(serviceName);
  const posts = await fetchServicePosts(decodedServiceName);

  console.log(decodedServiceName);
  console.log(posts);

  return (
    <main className="container mx-auto px-4 py-8">
      {posts.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </section>
      ) : (
        <div className="text-center py-5">
          <h2>لا يوجد منشورات لهذه الخدمة</h2>
          <p>يرجى التحقق من وقتك لاحقًا للتحديثات.</p>
          <Link href="/" className="btn btn-primary">
            الرجوع إلى الصفحة الرئيسية
          </Link>
        </div>
      )}
    </main>
  );
}

// Generate static paths for known services
export async function generateStaticParams() {
  return [
    { serviceName: "cleaning" },
    // add more service names we know
  ];
}
