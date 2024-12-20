import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { WalletCard } from "../components/WalletCard";
import { ActivityList } from "../components/ActivityList";
import { ApiSidebar } from "../components/ApiSideBar";

// Define the type for the agent prop
interface Agent {
  name: string;
  username: string;
  balance: number;
  capabilities: string[];
  recentChange: number; // Added recentChange
}

interface WalletPageComponentProps {
  agent: Agent;
}

export default function WalletPageComponent({
  agent,
}: WalletPageComponentProps) {
  return (
    <div className="flex h-screen bg-[#1c1c1c] text-white">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto p-6">
            
          {/* Pass agent to WalletCard */}
          <WalletCard agent={agent} />
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
