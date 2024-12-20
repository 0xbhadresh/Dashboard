"use client";
import { Home, Compass, FileText, Settings, LogOut } from "lucide-react";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { useDisconnect } from "wagmi";


export function Sidebar() {
  const [isConnected, setIsConnected] = useState(false);
  const { disconnect } = useDisconnect();

  return (
    <aside className="w-64 bg-green-600 p-4 flex flex-col h-screen">
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-white rounded-sm mr-2"></div>
        <span className="text-2xl font-bold text-white">EarnKit</span>
      </div>

      {!isConnected ? (
        // <button
        //   onClick={() => setIsConnected(true)}
        //   className="w-full bg-white text-green-500 rounded-lg py-3 px-4 font-medium mb-4"
        // >
        //   Connect Wallet
        // </button>
        <CustomButton />
      ) : (
        <div className="mb-4">
          <div className="flex items-center space-x-2 text-white mb-1">
            <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
              S
            </div>
            <span>ShreyaTh</span>
          </div>
          <div className="text-white/60 text-sm">Q3jh446apk88cp133</div>
        </div>
      )}

      <nav className="flex-grow flex flex-col justify-between">
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="flex items-center p-2 bg-green-700 rounded-md text-white"
            >
              <Home className="mr-2" />
              Home
            </a>
          </li>
          <li>
            <a
              href="/discover"
              className="flex items-center p-2 text-white hover:bg-green-700 rounded-md"
            >
              <Compass className="mr-2" />
              Discover
            </a>
          </li>
        </ul>
        <ul className="space-y-2">
          {/* <li>
            <a
              href="#"
              className="flex items-center p-2 text-white hover:bg-green-700 rounded-md"
            >
              <FileText className="mr-2" />
              Docs
            </a>
          </li> */}
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-white hover:bg-green-700 rounded-md"
            >
              <Settings className="mr-2" />
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-white hover:bg-green-700 rounded-md"
              onClick={() => disconnect()}
            >
              <LogOut className="mr-2" />
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
