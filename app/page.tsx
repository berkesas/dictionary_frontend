import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className='m-2 flex flex-col'>
      <h1 className="text-5xl font-bold">Hello</h1>
        This is the page.
      </main>
      <Footer />
    </>
  );
}
