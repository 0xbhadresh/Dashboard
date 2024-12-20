import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { AgentsList } from "@/components/AgentsList";

export default function Discover() {
  return (
    <div className="flex h-screen">
      <main className="flex-1 overflow-auto bg-[#1c1c1c]">
        <div className="p-6">
         
          <AgentsList />
        </div>
      </main>
    </div>
  );
}
