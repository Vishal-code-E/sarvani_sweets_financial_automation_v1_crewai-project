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
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Calendar className="w-4 h-4" />
          <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Revenue */}
        <Card className="card-shadow hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Revenue
            </CardTitle>
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <IndianRupee className="w-5 h-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {formatCurrency(mockDashboardMetrics.totalRevenue)}
            </div>
            <div className={`flex items-center gap-1 text-sm ${getMetricColor(mockDashboardMetrics.revenueChange)}`}>
              {getMetricIcon(mockDashboardMetrics.revenueChange)}
              <span className="font-medium">{Math.abs(mockDashboardMetrics.revenueChange)}%</span>
              <span className="text-gray-500">from last month</span>
            </div>
          </CardContent>
        </Card>

        {/* Total Sales */}
        <Card className="card-shadow hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Sales
            </CardTitle>
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {mockDashboardMetrics.totalSales.toLocaleString()}
            </div>
            <div className={`flex items-center gap-1 text-sm ${getMetricColor(mockDashboardMetrics.salesChange)}`}>
              {getMetricIcon(mockDashboardMetrics.salesChange)}
              <span className="font-medium">{Math.abs(mockDashboardMetrics.salesChange)}%</span>
              <span className="text-gray-500">from last month</span>
            </div>
          </CardContent>
        </Card>

        {/* GST Due */}
        <Card className="card-shadow hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              GST Due
            </CardTitle>
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <Receipt className="w-5 h-5 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {formatCurrency(mockDashboardMetrics.gstDue)}
            </div>
            <div className={`flex items-center gap-1 text-sm ${getMetricColor(mockDashboardMetrics.gstChange)}`}>
              {getMetricIcon(mockDashboardMetrics.gstChange)}
              <span className="font-medium">{Math.abs(mockDashboardMetrics.gstChange)}%</span>
              <span className="text-gray-500">from last month</span>
            </div>
          </CardContent>
        </Card>

        {/* Cash Flow */}
        <Card className="card-shadow hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Cash Flow
            </CardTitle>
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <Activity className="w-5 h-5 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {formatCurrency(mockDashboardMetrics.cashFlow)}
            </div>
            <div className={`flex items-center gap-1 text-sm ${getMetricColor(mockDashboardMetrics.cashFlowChange)}`}>
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
        <Card className="card-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Recent Transactions</CardTitle>
                <CardDescription className="mt-1">Latest activity across all branches</CardDescription>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTransactions.slice(0, 5).map((txn) => (
                <div key={txn.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      txn.type === 'sale' ? 'bg-green-100' :
                      txn.type === 'purchase' ? 'bg-blue-100' : 'bg-orange-100'
                    }`}>
                      {txn.type === 'sale' ? (
                        <ArrowUpRight className={`w-5 h-5 ${txn.type === 'sale' ? 'text-green-600' : ''}`} />
                      ) : (
                        <ArrowDownRight className={`w-5 h-5 ${txn.type === 'purchase' ? 'text-blue-600' : 'text-orange-600'}`} />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{txn.branch}</p>
                      <p className="text-xs text-gray-500">{txn.invoiceNumber}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">
                      {formatCurrency(txn.amount)}
                    </p>
                    <Badge variant={txn.status === 'completed' ? 'default' : 'secondary'} className="text-xs mt-1">
                      {txn.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Branch Performance */}
        <Card className="card-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Top Branches</CardTitle>
                <CardDescription className="mt-1">Performance by revenue</CardDescription>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockBranches.slice(0, 5).map((branch, index) => {
                const maxRevenue = Math.max(...mockBranches.map(b => b.revenue));
                const percentage = (branch.revenue / maxRevenue) * 100;
                
                return (
                  <div key={branch.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <span className="text-sm font-semibold text-gray-700">#{index + 1}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {branch.name.replace("Sarvani Sweets - ", "")}
                          </p>
                          <p className="text-xs text-gray-500">{branch.sales} transactions</p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        {formatCurrency(branch.revenue)}
                      </p>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* All Branches Table */}
      <Card className="card-shadow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">All Branches</CardTitle>
              <CardDescription className="mt-1">Complete overview of all locations</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-600">{mockBranches.length} branches</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Branch
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Sales
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                    GST
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {mockBranches.map((branch) => (
                  <tr key={branch.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {branch.name.replace("Sarvani Sweets - ", "")}
                      </div>
                      <div className="text-xs text-gray-500">{branch.id}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                      {branch.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                      {formatCurrency(branch.revenue)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                      {branch.sales.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                      {formatCurrency(branch.gst)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-200">
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
