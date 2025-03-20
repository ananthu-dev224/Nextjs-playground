'use client';
import { useRouter } from "next/navigation";
export default function OrderProduct() {
    const router = useRouter();

    const handleOrder = () => {
        console.log("Placing order...")
        router.push("/")
    }

    return (
      <div className="text-center mt-5">
        <h1 className="mb-5 text-green-600">Click the Button to Place a Order</h1>
        <button onClick={handleOrder} className="bg-blue-800 p-3 text-white font-bold rounded-md">Place Order</button>
      </div>
    );
  }