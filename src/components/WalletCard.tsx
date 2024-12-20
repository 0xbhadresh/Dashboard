import { Button } from "./ui/Button";

interface WalletCardProps {
  name: string;
  username: string;
  balance: number;
  recentChange: number;
}

export function WalletCard({
  name,
  username,
  balance,
  recentChange,
}: WalletCardProps) {
  return (
    <div className="bg-[#2f2f2f] rounded-lg p-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-gray-600 rounded-lg mr-4"></div>
        <div>
          <div className="flex items-center">
            <h2 className="text-xl font-bold mr-2">{name}</h2>
            <span className="text-gray-400 text-sm">{username}</span>
          </div>
          <div className="text-3xl font-bold text-white">
            $ {balance}
          </div>
          <div className="text-green-500">
            + {recentChange}(
            {((recentChange / balance) * 100).toFixed(2)}%)
          </div>
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
