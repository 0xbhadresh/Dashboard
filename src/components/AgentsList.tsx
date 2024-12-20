"use client";

import { useState } from "react";
import { AgentCard } from "./AgentCard";
import { ChevronRight } from "lucide-react";
import { useAccount } from "wagmi";
import WalletPageComponent from "./WalletPageComponent";

// Define the type for an agent
interface Agent {
  name: string;
  username: string;
  balance: number;
  capabilities: string[];
  recentChange: number; // Added recentChange
}

export function AgentsList() {
  const { isConnected } = useAccount();
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null); // Allow both null and Agent type

  const agents: Agent[] = [
    {
      name: "Mitchell Luo",
      username: "@mitchell.luo",
      balance: 343.33,
      capabilities: ["TOKEN CREATION", "AIRDROP"],
      recentChange: 33.4, // Added recentChange
    },
    {
      name: "John Doe",
      username: "@john.doe",
      balance: 189.33,
      capabilities: [],
      recentChange: 10.2, // Added recentChange
    },
  ];

  return selectedAgent ? (
    // Render WalletPageComponent with the selected agent
    <WalletPageComponent agent={selectedAgent} />
  ) : (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold mb-2 text-white">Agents</h1>
      <p className="text-gray-400 mb-6">Create AI agents on Farcaster</p>

      {isConnected ? (
        agents.map((agent, index) => (
          <div key={index} className="relative">
            <AgentCard
              agent={agent}
              onClick={() => setSelectedAgent(agent)} // Set the selected agent
            />
            {index === agents.length - 1 && (
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">
          Connect your wallet first to view the agents.
        </p>
      )}
    </div>
  );
}
