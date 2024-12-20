import { Button } from "./ui/Button";

interface WalletCardProps {
  agent: {
    name: string;
    username: string;
    balance: number;
    recentChange: number; // Ensure this is part of WalletCardProps
  };
}

export function WalletCard({ agent }: WalletCardProps) {
  return (
    <div className="bg-[#2f2f2f] rounded-lg p-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-gray-600 rounded-lg mr-4"></div>
        <div>
          <div className="flex items-center">
            <h2 className="text-xl font-bold mr-2">{agent.name}</h2>
            <span className="text-gray-400 text-sm">0x942c</span>
          </div>
          <div className="text-3xl font-bold text-white">
            ${agent.balance.toFixed(2)}
          </div>
          <div className="text-green-500">+ {agent.recentChange} (338)</div>
        </div>
      </div>
      <div className="flex space-x-4">
        <Button
          variant="outline"
          className="bg-gray-700 text-white hover:bg-gray-600"
        >
          Withdraw
        </Button>
        <Button className="bg-green-500 hover:bg-green-600">Deposit</Button>
      </div>
    </div>
  );
}
