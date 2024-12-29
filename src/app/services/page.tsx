import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
};

export default function Service() {
  return (
    <div className="text-center mt-5">
      <h1 className="mb-5">Service Page</h1>
      <Link href="/">Back to Home</Link>
    </div>
  );
}