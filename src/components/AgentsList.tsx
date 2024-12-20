import { AgentCard } from "./AgentCard";
import { ChevronRight } from "lucide-react";

interface Agent {
  name: string;
  username: string;
  balance: number;
  recentChange: number;
  capabilities: string[];
}

interface AgentsListProps {
  onAgentSelect: (agent: Agent) => void;
}

export function AgentsList({ onAgentSelect }: AgentsListProps) {
  const agents: Agent[] = [
    {
      name: "Mitchell Luo",
      username: "@mitchell.luo",
      balance: 343.33,
      recentChange: 33.4,
      capabilities: ["TOKEN CREATION", "AIRDROP"],
    },
    {
      name: "John Doe",
      username: "@john.doe",
      balance: 500.0,
      recentChange: 50.0,
      capabilities: [],
    },
  ];

  return (
    <div className="space-y-4">
      {agents.map((agent, index) => (
        <div key={index} className="relative">
          <AgentCard agent={agent} onSelect={() => onAgentSelect(agent)} />
          {index === agents.length - 1 && (
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
