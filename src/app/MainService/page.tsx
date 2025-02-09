import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="text-center py-5">
        <h2>لا يوجد منشورات لهذه الخدمة</h2>
        <p>يرجى التحقق من وقتك لاحقا للتحديثات.</p>
        <Link href="/" className="btn btn-primary">
          الرجوع الصفحة الرئيسية
        </Link>
      </div>
    </>
  );
}
