import { WalletCard } from "./WalletCard";
import { ActivityList } from "./ActivityList";
import { ApiSidebar } from "./ApiSideBar";

interface WalletProps {
  name: string;
  username: string;
  balance: number;
  recentChange: number;
}

export function Wallet({ name, username, balance, recentChange }: WalletProps) {
  return (
    <div className="flex-1 overflow-auto p-6 bg-[#1c1c1c] text-white">
      <WalletCard
        name={name}
        username={username}
        balance={balance}
        recentChange={recentChange}
      />
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
