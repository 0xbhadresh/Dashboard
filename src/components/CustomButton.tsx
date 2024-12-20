"use client";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function CustomButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className="mb-4"
          >
            {!connected ? (
              <button
                onClick={openConnectModal}
                type="button"
                className="w-full bg-white text-green-500 rounded-lg py-3 px-4 font-medium"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="mb-4">
                {chain.unsupported ? (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="w-full bg-red-500 text-white rounded-lg py-3 px-4 font-medium"
                  >
                    Wrong network
                  </button>
                ) : (
                  <div className="space-y-1">
                    <div onClick={openAccountModal} className="cursor-pointer">
                      <div className="flex items-center space-x-2 text-white mb-1">
                        <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
                          S
                        </div>
                        <span>ShreyaTh</span>
                      </div>
                      <div className="text-white/60 text-sm">
                        {account.displayName}
                      </div>
                      <div className="text-white/60 text-sm">
                        {account.displayBalance}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
