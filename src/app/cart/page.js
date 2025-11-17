import Navbar from "../../components/Navbar";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* kurv-siden */}
      <section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-28">
        <h1 className="text-3xl font-semibold tracking-tight">Din kurv</h1>

        <p className="text-slate-200">Du har endnu ingen varer i kurven.</p>
      </section>
    </main>
  );
}
