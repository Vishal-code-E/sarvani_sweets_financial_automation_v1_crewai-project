"use client"

import {
  Calculator,
  Coins,
  Home,
  Landmark,
  LayoutDashboard,
  LineChart,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function CryptoSidebar() {
  const trendingCryptos = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "$46,727.54",
      change: "+2.92%",
      icon: "https://v3.material-tailwind.com/icon/bitcoin.svg",
      positive: true,
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: "$4,307.22",
      change: "+1.02%",
      icon: "https://v3.material-tailwind.com/icon/eth.svg",
      positive: true,
    },
    {
      symbol: "USDT",
      name: "TetherUS",
      price: "$1,846.11",
      change: "+2.92%",
      icon: "https://v3.material-tailwind.com/icon/usdt.svg",
      positive: true,
    },
    {
      symbol: "SOL",
      name: "Solana",
      price: "$183.73",
      change: "-0.12%",
      icon: "https://v3.material-tailwind.com/icon/solana.svg",
      positive: false,
    },
  ]

  return (
    <div className="bg-black h-screen w-full max-w-[370px] overflow-y-auto text-white">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-sm">
            <LayoutDashboard className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold">Creative Tim UI</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Tabs */}
        <Tabs defaultValue="staking" className="w-full">
          <TabsList className="h-auto w-full bg-transparent p-0 mb-8 gap-2">
            <TabsTrigger
              value="staking"
              className="flex-1 rounded-lg border border-white/20 bg-white/5 data-[state=active]:bg-white/10 data-[state=active]:border-white/30 text-white/60 data-[state=active]:text-white py-2.5 shadow-none"
            >
              Staking
            </TabsTrigger>
            <TabsTrigger
              value="fixedYield"
              className="flex-1 rounded-lg border border-white/20 bg-white/5 data-[state=active]:bg-white/10 data-[state=active]:border-white/30 text-white/60 data-[state=active]:text-white py-2.5 shadow-none"
            >
              Fixed Yield
            </TabsTrigger>
          </TabsList>

          <TabsContent value="staking" className="mt-0 space-y-8">
            {/* Main Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-4">
                Main
              </h3>

              <ul className="space-y-1">
                <li className="flex items-center gap-3 px-3 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/5 cursor-pointer transition-all">
                  <Home className="h-5 w-5" />
                  <span className="font-medium">Overview</span>
                </li>
                <li className="flex items-center gap-3 px-3 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/5 cursor-pointer transition-all">
                  <Wallet className="h-5 w-5" />
                  <span className="font-medium">Portfolio</span>
                </li>
                <li className="flex items-center gap-3 px-3 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/5 cursor-pointer transition-all">
                  <Coins className="h-5 w-5" />
                  <span className="font-medium">Yield Providers</span>
                  <Badge className="ml-auto bg-red-500/20 text-red-400 hover:bg-red-500/30 border-0 rounded-full px-2.5">
                    14
                  </Badge>
                </li>
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Wallet Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-4">
                Wallet
              </h3>

              <ul className="space-y-1">
                <li className="flex items-center gap-3 px-3 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/5 cursor-pointer transition-all">
                  <Calculator className="h-5 w-5" />
                  <span className="font-medium">Rewards Calculator</span>
                </li>
                <li className="flex items-center gap-3 px-3 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/5 cursor-pointer transition-all">
                  <LineChart className="h-5 w-5" />
                  <span className="font-medium">Market Data</span>
                </li>
                <li className="flex items-center gap-3 px-3 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/5 cursor-pointer transition-all">
                  <Landmark className="h-5 w-5" />
                  <span className="font-medium">Investments</span>
                </li>
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Trending Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-4">
                Trending
              </h3>

              <ul className="space-y-2">
                {trendingCryptos.map((crypto) => (
                  <li
                    key={crypto.symbol}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 cursor-pointer transition-all group"
                  >
                    <div className="bg-white/10 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                      <img
                        src={crypto.icon}
                        alt={crypto.name}
                        className="h-7 w-7"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm">
                        {crypto.symbol}
                      </p>
                      <p className="text-white/50 text-xs">
                        {crypto.name}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-white font-semibold text-sm">
                        {crypto.price}
                      </p>
                      <div
                        className={`flex items-center justify-end gap-1 text-xs font-semibold ${crypto.positive ? "text-green-400" : "text-red-400"
                          }`}
                      >
                        {crypto.positive ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        <span>{crypto.change}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="fixedYield" className="mt-0">
            <div className="rounded-lg border border-white/10 p-8 text-center">
              <p className="text-white/50 text-sm">
                Fixed Yield content goes here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
