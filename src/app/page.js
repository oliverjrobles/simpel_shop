import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen">
      {/* Hero image */}
      <Image src="/heroimage.jpg" alt="Luxury loafers" fill className="object-cover object-center" priority />

      {/* Mørkt overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30" />

      {/* Navbar */}
      <Navbar />

      {/* Tekst */}
      <section className="relative z-10 text-center text-white space-y-6 px-4">
        <h1 className=" tracking-widest text-5xl font-bold drop-shadow-md">MellerLock</h1>

        <p className="text-lg text-gray-100 max-w-md mx-auto">Opdag et udvalg af eksklusive sneakers.</p>

        <Link href="/produkter" className="inline-block bg-black border border-white/20 px-8 py-3 rounded-full font-medium text-white shadow-md hover:bg-white hover:text-black transition-all duration-300">
          Shop nu
        </Link>
      </section>
    </main>
  );
}
