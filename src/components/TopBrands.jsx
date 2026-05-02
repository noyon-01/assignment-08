export default function TopBrand() {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold mb-10">Top Brands</h1>
      <div className="grid grid-cols-4 gap-8">
        <div className="border border-gray-400 rounded-2xl p-5 text-center">
          <h2 className="text-4xl font-black text-[#3B7597]">SunShade</h2>
          <p className="text-gray-400 text-xl">Eyewear</p>
        </div>
        <div className="border border-gray-400 rounded-2xl p-5 text-center">
          <h2 className="text-4xl font-black text-[#3B7597]">GlowUp</h2>
          <p className="text-gray-400 text-xl">Skincare</p>
        </div>
        <div className="border border-gray-400 rounded-2xl p-5 text-center">
          <h2 className="text-4xl font-black text-[#3B7597]">WaveCo</h2>
          <p className="text-gray-400 text-xl">Beachwear</p>
        </div>
        <div className="border border-gray-400 rounded-2xl p-5 text-center">
          <h2 className="text-4xl font-black text-[#3B7597]">CoolZone</h2>
          <p className="text-gray-400 text-xl">Accessories</p>
        </div>
      </div>
    </div>
  );
}
