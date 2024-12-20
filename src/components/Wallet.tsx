// Wallet.tsx
import { WalletCard } from "./WalletCard";
import { ActivityList } from "./ActivityList";
import { ApiSidebar } from "./ApiSideBar";

interface Agent {
  name: string;
  username: string;
  balance: number;
  recentChange: number;
}

interface WalletProps {
  agent: Agent; // Accept agent as a prop
}

export function Wallet({ agent }: WalletProps) {
  return (
    <div className="flex-1 overflow-auto p-6 bg-[#1c1c1c] text-white">
      {/* Pass the agent object to WalletCard */}
      <WalletCard agent={agent} />
      <h2 className="text-2xl font-bold mt-8 mb-4">Activity</h2>
      <div className="flex gap-6">
        <div className="flex-1">
          <ActivityList />
        </div>
        <ApiSidebar />
      </div>
    </div>
  );
}
