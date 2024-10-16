import Link from 'next/link';

export default function ApiPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl mb-10">ENDPOINTS</h1>
      <div className="bg-black grid grid-cols-1 gap-4 w-full max-w-lg">
        <div className="bg-white bg-opacity-60 p-5 rounded-lg text-center">
          <h2 className="text-xl font-bold text-white mb-2">Sohbet API</h2>
          <p className="text-gray-300 mb-4">
            Sohbet için AI tabanlı bir API sağlar.
          </p>
          <Link href="https://slayerbot.vercel.app/api/sohbet/dosc">
            <a className="bg-blue-500 text-white py-2 px-4 rounded">Link</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
