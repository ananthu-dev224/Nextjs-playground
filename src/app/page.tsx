import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <ol className="list-inside  text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 text-lg">
            <Link href="/services">Services</Link>
          </li>
          <li></li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row text-green-600">
           Showing Home Page
        </div>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
