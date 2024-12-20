import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { AgentsList } from "../components/AgentsList";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto bg-[#1c1c1c] p-6">
          <h1 className="text-4xl font-bold mb-2 text-white">Agents</h1>
          <p className="text-gray-400 mb-6">Create AI agents on Forcaster</p>
          <AgentsList />
        </main>
      </div>
    </div>
  );
}
