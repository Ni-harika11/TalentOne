// pages/404.tsx
import Link from 'next/link';
const Custom404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-700">Go back to Home</a>
        </Link>
      </div>
    </div>
  );
};
export default Custom404;



