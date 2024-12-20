import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { AgentsList } from "@/components/AgentsList";

export default function Discover() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-[#1c1c1c]">
        <Header />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-2 text-white">Agents</h1>
          <p className="text-gray-400 mb-6">Create AI agents on Farcaster</p>
          <AgentsList />
        </div>
      </main>
    </div>
  );
}
