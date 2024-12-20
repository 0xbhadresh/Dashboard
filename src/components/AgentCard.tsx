import { Copy } from "lucide-react";
import { Badge } from "./ui/Badge";

interface AgentCardProps {
  agent: {
    name: string;
    username: string;
    balance: number;
    capabilities: string[];
  };
  onClick: () => void; // Add the onClick prop to handle agent selection
}

export function AgentCard({ agent, onClick }: AgentCardProps) {
  return (
    <div
      onClick={onClick} // Trigger onClick when the card is clicked
      className="bg-[#2f2f2f] rounded-lg p-6 hover:bg-[#3f3f3f] transition-colors cursor-pointer"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
          <div>
            <h3 className="font-semibold text-white">{agent.name}</h3>
            <p className="text-gray-400">{agent.username}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white flex items-center">
          API Key <Copy className="ml-1 w-4 h-4" />
        </button>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-gray-400 mb-1">Balance</p>
          <p className="text-3xl font-bold text-green-500">
            ${agent.balance.toFixed(2)}
          </p>
        </div>
        {agent.capabilities.length > 0 && (
          <div>
            <p className="text-gray-400 mb-2">CAPABILITIES</p>
            <div className="flex gap-2">
              {agent.capabilities.map((capability, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-orange-500 border-orange-500"
                >
                  {capability}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
