import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { AgentsList } from "../components/AgentsList";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto bg-[#1c1c1c] p-6">
          
          <AgentsList />
        </main>
      </div>
    </div>
  );
}
