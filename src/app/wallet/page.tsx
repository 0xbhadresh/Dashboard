'use client'
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { WalletCard } from "../../components/WalletCard";
import { ActivityList } from "../../components/ActivityList";
import { ApiSidebar } from "../../components/ApiSideBar";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";


export default function WalletPage() {
  const router = useRouter();
  return (
    <div className="flex h-screen bg-[#1c1c1c] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              <span>Back</span>
            </button>
          </div>
          <WalletCard />
          <h2 className="text-2xl font-bold mt-8 mb-4">Activity</h2>
          <div className="flex gap-6">
            <div className="flex-1">
              <ActivityList />
            </div>
            <ApiSidebar />
          </div>
        </main>
      </div>
    </div>
  );
}
