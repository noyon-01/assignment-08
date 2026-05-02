import Image from "next/image";
import heroImage from "@/assets/summer.png";

export default function Hero() {
  return (
    <div>
      <div className="bg-base-200 py-25 px-30">
        <div className="flex justify-between items-center">
          <div>
            <div className="badge badge-warning bg-[#FFA02E] text-gray-900 text-md font-bold mb-4">
              Summer Sale 2025
            </div>
            <h1 className="text-7xl font-bold">Hot Deals 🔥</h1>
            <h1 className="text-7xl font-bold mt-3">
              Up to <span className="text-[#FFA02E]">50% OFF</span>
            </h1>
            <p className="py-6 text-[18px] font-semibold text-gray-600">
              Explore the best summer essentials — sunglasses, beach gear,
              skincare & more. <br /> Limited time offers!
            </p>
            <div className="flex gap-1">
              <button className="btn bg-[#FFA02E] rounded-3xl">Shop Now</button>
              <button className="btn btn-outline border-[#FFA02E] rounded-3xl">
                View All Deals
              </button>
            </div>
          </div>
          <Image
            className="w-96"
            src={heroImage}
            alt="summer-essentials"
            height={"100px"}
            width={"100px"}
          />
        </div>
      </div>
    </div>
  );
}
