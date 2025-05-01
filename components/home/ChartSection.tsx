export default function ChartSection() {
  return (
    <div className="md:col-span-8">
      <div className="p-6 rounded-lg border bg-white shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">CodeFast</h2>
            <p className="text-sm text-gray-600">Learn to code in weeks, not years</p>
          </div>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
            $417k/mo
          </div>
        </div>
        
        <div className="h-64 w-full">
          {/* Chart placeholder - You'll need to add a proper chart library */}
          <div className="w-full h-full bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg relative">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-200 to-transparent rounded-lg" style={{ clipPath: 'polygon(0 100%, 100% 70%, 100% 100%, 0% 100%)' }} />
          </div>
        </div>
      </div>
    </div>
  );
} 