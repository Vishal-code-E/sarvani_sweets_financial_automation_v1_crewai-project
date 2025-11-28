"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency } from "@/lib/utils";
import {
  mockDashboardMetrics,
  mockBranches,
  mockTransactions,
} from "@/lib/mock-data";
import { 
  TrendingUp, 
  TrendingDown, 
  IndianRupee, 
  FileText,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Download,
  RefreshCw,
  MoreVertical,
} from "lucide-react";

export default function Home() {
  // Calculate chart data
  const monthlyData = [
    { month: 'Jan', revenue: 2800000, sales: 1200 },
    { month: 'Feb', revenue: 3200000, sales: 1400 },
    { month: 'Mar', revenue: 2900000, sales: 1300 },
    { month: 'Apr', revenue: 3500000, sales: 1600 },
    { month: 'May', revenue: 3800000, sales: 1800 },
    { month: 'Jun', revenue: 4200000, sales: 2000 },
  ];

  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));
  const topBranches = mockBranches.slice(0, 10);
  const maxBranchRevenue = Math.max(...topBranches.map(b => b.revenue));

  return (
    <div className="space-y-6">
      {/* Header with date range and actions */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Dashboard</h1>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Tabs defaultValue="month" className="w-auto">
            <TabsList>
              <TabsTrigger value="day" className="text-xs">Today</TabsTrigger>
              <TabsTrigger value="week" className="text-xs">Week</TabsTrigger>
              <TabsTrigger value="month" className="text-xs">Month</TabsTrigger>
              <TabsTrigger value="year" className="text-xs">Year</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
          <Button size="sm" className="gap-2 bg-emerald-600 hover:bg-emerald-700">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Revenue */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(mockDashboardMetrics.totalRevenue)}
                </p>
                <div className="flex items-center gap-2">
                  <div className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${
                    mockDashboardMetrics.revenueChange >= 0 
                      ? 'bg-emerald-50 text-emerald-700' 
                      : 'bg-red-50 text-red-700'
                  }`}>
                    {mockDashboardMetrics.revenueChange >= 0 ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    <span>{Math.abs(mockDashboardMetrics.revenueChange)}%</span>
                  </div>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Sales */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">
                  {mockDashboardMetrics.totalSales.toLocaleString()}
                </p>
                <div className="flex items-center gap-2">
                  <div className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${
                    mockDashboardMetrics.salesChange >= 0 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'bg-red-50 text-red-700'
                  }`}>
                    {mockDashboardMetrics.salesChange >= 0 ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    <span>{Math.abs(mockDashboardMetrics.salesChange)}%</span>
                  </div>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GST Pending */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">GST Pending</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(mockDashboardMetrics.gstDue)}
                </p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-orange-50 text-orange-700 border-0 text-xs">
                    Due in 5 days
                  </Badge>
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Audit Progress */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Audit Complete</p>
                <p className="text-2xl font-bold text-gray-900">23%</p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-50 text-purple-700 border-0 text-xs">
                    3 of 13 branches
                  </Badge>
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {/* Revenue Trend Chart - 4 cols */}
        <Card className="border-0 shadow-sm lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">Revenue Trend</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {monthlyData.map((data, index) => {
                const height = (data.revenue / maxRevenue) * 100;
                return (
                  <div key={data.month} className="flex items-center gap-3">
                    <span className="text-xs font-medium text-gray-600 w-8">{data.month}</span>
                    <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden relative group">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg transition-all duration-500 flex items-center justify-end pr-3"
                        style={{ width: `${height}%` }}
                      >
                        <span className="text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          {formatCurrency(data.revenue)}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-900 w-24 text-right">
                      {formatCurrency(data.revenue)}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Branch Breakdown - 3 cols */}
        <Card className="border-0 shadow-sm lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">Branch Distribution</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topBranches.slice(0, 6).map((branch, index) => {
                const percentage = (branch.revenue / maxBranchRevenue) * 100;
                const colors = [
                  'from-emerald-500 to-emerald-600',
                  'from-blue-500 to-blue-600',
                  'from-purple-500 to-purple-600',
                  'from-orange-500 to-orange-600',
                  'from-pink-500 to-pink-600',
                  'from-indigo-500 to-indigo-600',
                ];
                
                return (
                  <div key={branch.id} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-gray-700 truncate max-w-[180px]">
                        {branch.name.replace("Sarvani Sweets - ", "")}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {formatCurrency(branch.revenue)}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${colors[index % colors.length]} rounded-full transition-all duration-500`}
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

      {/* Data Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Transactions */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">Recent Transactions</CardTitle>
            <Button variant="link" size="sm" className="text-emerald-600 h-8">
              View all →
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {mockTransactions.slice(0, 5).map((txn) => (
                <div
                  key={txn.id}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      txn.type === 'sale' ? 'bg-emerald-500' :
                      txn.type === 'purchase' ? 'bg-blue-500' : 'bg-orange-500'
                    }`} />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{txn.branch}</p>
                      <p className="text-xs text-gray-500">{txn.invoiceNumber}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">
                      {formatCurrency(txn.amount)}
                    </p>
                    <p className="text-xs text-gray-500">{txn.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Branches */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">Top Performing Branches</CardTitle>
            <Button variant="link" size="sm" className="text-emerald-600 h-8">
              View all →
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {topBranches.slice(0, 5).map((branch, index) => (
                <div
                  key={branch.id}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      index === 0 ? 'bg-emerald-100 text-emerald-700' :
                      index === 1 ? 'bg-blue-100 text-blue-700' :
                      index === 2 ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      #{index + 1}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {branch.name.replace("Sarvani Sweets - ", "")}
                      </p>
                      <p className="text-xs text-gray-500">{branch.sales} transactions</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    {formatCurrency(branch.revenue)}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Full Data Table */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base font-semibold">All Branches Performance</CardTitle>
          <div className="flex items-center gap-2">
            <Tabs defaultValue="all" className="w-auto">
              <TabsList className="h-8">
                <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
                <TabsTrigger value="active" className="text-xs">Active</TabsTrigger>
                <TabsTrigger value="top" className="text-xs">Top 5</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Branch</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Location</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">Revenue</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">Sales</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">GST</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockBranches.map((branch) => (
                  <tr key={branch.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-gray-900">
                        {branch.name.replace("Sarvani Sweets - ", "")}
                      </div>
                      <div className="text-xs text-gray-500">{branch.id}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 max-w-[200px] truncate">
                      {branch.location}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-right text-gray-900">
                      {formatCurrency(branch.revenue)}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-600">
                      {branch.sales.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-600">
                      {formatCurrency(branch.gst)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge className="bg-emerald-50 text-emerald-700 border-0 text-xs">
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
