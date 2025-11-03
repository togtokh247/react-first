import Image from "next/image";

export default function Home() {
  return (
    <div className="border w-screen h-screen flex items-center justify-center bg-black">
      <div className="border p-6 rounded-md w-[300px] bg-white flex flex-col items-center text-center gap-4 shadow-md">
        <img
          alt="profile-image"
          src="/okarun.jpeg"
          className="w-20 h-20 object-cover rounded-full"
        />
        <h1 className="text-black font-semibold text-lg">Okarun</h1>
        <h2 className="text-gray-500 text-sm">Front End Engineer @Microsoft</h2>
        <p className="text-gray-500 text-xs px-2">
          I turn coffee into bugs which are fixed by someone else. Certified
          Stack Overflow and ChatGPT developer.
        </p>
        <button className="border p-2 rounded-md w-[200px] bg-purple-500 text-white hover:bg-purple-600 transition">
          Contact me
        </button>
      </div>
    </div>
  );
}
