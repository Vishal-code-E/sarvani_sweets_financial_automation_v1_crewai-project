"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { formatCurrency, formatDate } from "@/lib/utils";
import {
  mockDashboardMetrics,
  mockBranches,
  mockTransactions,
} from "@/lib/mock-data";
import { 
  TrendingUp, 
  TrendingDown, 
  ShoppingCart, 
  Receipt, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Building2,
  IndianRupee,
  Calendar
} from "lucide-react";

export default function Home() {
  const getMetricIcon = (change: number) => {
    return change >= 0 ? (
      <TrendingUp className="w-4 h-4" />
    ) : (
      <TrendingDown className="w-4 h-4" />
    );
  };

  const getMetricColor = (change: number) => {
    return change >= 0 ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="glass rounded-2xl p-6 border border-indigo-500/20 relative overflow-hidden">
        <div className="absolute inset-0 shimmer"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-sm text-indigo-300 mb-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <h1 className="text-4xl font-bold text-white text-glow mb-2">Financial Control Center</h1>
          <p className="text-gray-400">Real-time insights and analytics for Sarvani Sweets operations</p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Revenue */}
        <Card className="glass border-indigo-500/20 card-glow group">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Total Revenue
            </CardTitle>
            <div className="w-12 h-12 rounded-xl gradient-success flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <IndianRupee className="w-6 h-6 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">
              {formatCurrency(mockDashboardMetrics.totalRevenue)}
            </div>
            <div className={`flex items-center gap-1 text-sm ${mockDashboardMetrics.revenueChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {getMetricIcon(mockDashboardMetrics.revenueChange)}
              <span className="font-medium">{Math.abs(mockDashboardMetrics.revenueChange)}%</span>
              <span className="text-gray-500">from last month</span>
            </div>
          </CardContent>
        </Card>

        {/* Total Sales */}
        <Card className="glass border-indigo-500/20 card-glow group">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Total Sales
            </CardTitle>
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">
              {mockDashboardMetrics.totalSales.toLocaleString()}
            </div>
            <div className={`flex items-center gap-1 text-sm ${mockDashboardMetrics.salesChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {getMetricIcon(mockDashboardMetrics.salesChange)}
              <span className="font-medium">{Math.abs(mockDashboardMetrics.salesChange)}%</span>
              <span className="text-gray-500">from last month</span>
            </div>
          </CardContent>
        </Card>

        {/* GST Due */}
        <Card className="glass border-indigo-500/20 card-glow group">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              GST Due
            </CardTitle>
            <div className="w-12 h-12 rounded-xl gradient-warning flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Receipt className="w-6 h-6 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">
              {formatCurrency(mockDashboardMetrics.gstDue)}
            </div>
            <div className={`flex items-center gap-1 text-sm ${mockDashboardMetrics.gstChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {getMetricIcon(mockDashboardMetrics.gstChange)}
              <span className="font-medium">{Math.abs(mockDashboardMetrics.gstChange)}%</span>
              <span className="text-gray-500">from last month</span>
            </div>
          </CardContent>
        </Card>

        {/* Cash Flow */}
        <Card className="glass border-indigo-500/20 card-glow group">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Cash Flow
            </CardTitle>
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">
              {formatCurrency(mockDashboardMetrics.cashFlow)}
            </div>
            <div className={`flex items-center gap-1 text-sm ${mockDashboardMetrics.cashFlowChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {getMetricIcon(mockDashboardMetrics.cashFlowChange)}
              <span className="font-medium">{Math.abs(mockDashboardMetrics.cashFlowChange)}%</span>
              <span className="text-gray-500">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card className="glass border-indigo-500/20 card-glow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl text-white">Recent Transactions</CardTitle>
                <CardDescription className="mt-1 text-gray-400">Latest activity across all branches</CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 hover:text-white"
              >
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockTransactions.slice(0, 5).map((txn) => (
                <div 
                  key={txn.id} 
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-indigo-500/10 hover:border-indigo-500/30 group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-lg ${
                      txn.type === 'sale' ? 'gradient-success' :
                      txn.type === 'purchase' ? 'gradient-primary' : 'gradient-warning'
                    }`}>
                      {txn.type === 'sale' ? (
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      ) : (
                        <ArrowDownRight className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{txn.branch}</p>
                      <p className="text-xs text-gray-500">{txn.invoiceNumber}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">
                      {formatCurrency(txn.amount)}
                    </p>
                    <Badge 
                      variant={txn.status === 'completed' ? 'default' : 'secondary'} 
                      className={`text-xs mt-1 ${
                        txn.status === 'completed' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }`}
                    >
                      {txn.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Branch Performance */}
        <Card className="glass border-indigo-500/20 card-glow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl text-white">Top Branches</CardTitle>
                <CardDescription className="mt-1 text-gray-400">Performance by revenue</CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 hover:text-white"
              >
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockBranches.slice(0, 5).map((branch, index) => {
                const maxRevenue = Math.max(...mockBranches.map(b => b.revenue));
                const percentage = (branch.revenue / maxRevenue) * 100;
                
                return (
                  <div key={branch.id} className="space-y-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-indigo-500/10 hover:border-indigo-500/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          index === 0 ? 'gradient-success' :
                          index === 1 ? 'gradient-primary' :
                          index === 2 ? 'gradient-warning' : 'bg-indigo-500/20'
                        } shadow-lg`}>
                          <span className="text-sm font-bold text-white">#{index + 1}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            {branch.name.replace("Sarvani Sweets - ", "")}
                          </p>
                          <p className="text-xs text-gray-500">{branch.sales} transactions</p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        {formatCurrency(branch.revenue)}
                      </p>
                    </div>
                    <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 gradient-primary rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* All Branches Table */}
      <Card className="glass border-indigo-500/20 card-glow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-white">All Branches</CardTitle>
              <CardDescription className="mt-1 text-gray-400">Complete overview of all locations</CardDescription>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
              <Building2 className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">{mockBranches.length} branches</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border border-indigo-500/20 overflow-hidden">
            <table className="w-full">
              <thead className="bg-white/5 border-b border-indigo-500/20">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    Branch
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    Sales
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    GST
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-500/10">
                {mockBranches.map((branch) => (
                  <tr key={branch.id} className="hover:bg-white/5 transition-all group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">
                        {branch.name.replace("Sarvani Sweets - ", "")}
                      </div>
                      <div className="text-xs text-gray-500">{branch.id}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400 max-w-xs truncate">
                      {branch.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-white">
                      {formatCurrency(branch.revenue)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-400">
                      {branch.sales.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-400">
                      {formatCurrency(branch.gst)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Badge 
                        variant="default" 
                        className="bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30"
                      >
                        {branch.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
