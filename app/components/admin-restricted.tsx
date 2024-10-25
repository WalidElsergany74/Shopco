// pages/admin-restricted.js
import Link from 'next/link';

const AdminRestricted = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">هذه الصفحة خاصة للادمن</h1>
      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          العودة إلى الصفحة الرئيسية
        </button>
      </Link>
    </div>
  );
};

export default AdminRestricted;
