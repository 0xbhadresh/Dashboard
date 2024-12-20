"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "./ui/Button";

import { useAccount } from "wagmi";

export function Header() {
  const { isConnected } = useAccount();
  return (
    <header className="flex justify-end items-center p-4 bg-[#1c1c1c]">
      {isConnected ? (
        <Button
          variant="outline"
          className="mr-2 text-black border-gray-600 hover:bg-green-200"
        >
          + Create
        </Button>
      ) : null}
      {/* <Button className="bg-green-500 hover:bg-green-600 text-white">
        Connect Wallet
      </Button> */}
    </header>
  );
}
