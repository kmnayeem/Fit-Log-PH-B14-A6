import Link from "next/link"; import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() { return ( <main className="flex min-h-screen items-center justify-center bg-[#0D0F12] px-4 text-white"> <div className="text-center">

    <SearchX
      size={70}
      className="mx-auto mb-5 text-[#C2F800]"
    />

    <h1 className="text-5xl font-bold text-[#C2F800]">
      404
    </h1>

    <h2 className="mt-4 text-2xl font-bold">
      Oops! Wrong Page
    </h2>

    <p className="mt-3 text-sm text-gray-400">
      Sorry, this page does not exist.
      Please check the URL and try again.
    </p>

    <Link
      href="/"
      className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#C2F800] px-5 py-3 font-bold text-black hover:bg-[#B0E600]"
    >
      <ArrowLeft size={18} />
      Back to Home
    </Link>

  </div>
</main>


); }