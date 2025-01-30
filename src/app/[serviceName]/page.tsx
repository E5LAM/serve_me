/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "@/app/styles/sass/pages/_sub-service.scss";
import Post from "@/components/sub-service/post";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { serviceName: string };
}) {
  const serviceName = await params.serviceName;
  const res = await fetch(
    `${process.env.BASE_URL}/service-posts/${serviceName}`
  );
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
