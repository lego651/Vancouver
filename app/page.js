import ProfileSection from "@/components/home/ProfileSection";
import ChartSection from "@/components/home/ChartSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <ProfileSection />
          <ChartSection />
        </div>
      </div>
    </div>
  );
}
