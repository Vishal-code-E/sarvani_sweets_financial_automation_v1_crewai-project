"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  IndianRupee, 
  FileText,
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter,
  Search,
  ChevronRight,
  Building2
} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Breadcrumb & Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Dashboard</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your business overview</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Revenue */}
        <Card className="card-elevated border-0">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Revenue
            </CardTitle>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <IndianRupee className="w-5 h-5 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {formatCurrency(mockDashboardMetrics.totalRevenue)}
            </div>
            <div className="flex items-center gap-1 text-sm">
              {mockDashboardMetrics.revenueChange >= 0 ? (
                <>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium text-emerald-600">
                    +{mockDashboardMetrics.revenueChange}%
                  </span>
                </>
              ) : (
                <>
                  <TrendingDown className="w-4 h-4 text-red-600" />
                  <span className="font-medium text-red-600">
                    {mockDashboardMetrics.revenueChange}%
                  </span>
                </>
              )}
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
            {/* Mini sparkline */}
            <svg className="sparkline mt-3 w-full h-8" viewBox="0 0 80 32">
              <path
                d="M 0 24 L 10 20 L 20 22 L 30 14 L 40 16 L 50 8 L 60 12 L 70 6 L 80 4"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CardContent>
        </Card>

        {/* Total Invoices */}
        <Card className="card-elevated border-0">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Invoices
            </CardTitle>
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {mockDashboardMetrics.totalSales.toLocaleString()}
            </div>
            <div className="flex items-center gap-1 text-sm">
              {mockDashboardMetrics.salesChange >= 0 ? (
                <>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium text-emerald-600">
                    +{mockDashboardMetrics.salesChange}%
                  </span>
                </>
              ) : (
                <>
                  <TrendingDown className="w-4 h-4 text-red-600" />
                  <span className="font-medium text-red-600">
                    {mockDashboardMetrics.salesChange}%
                  </span>
                </>
              )}
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
            <svg className="sparkline mt-3 w-full h-8" viewBox="0 0 80 32">
              <path
                d="M 0 16 L 10 18 L 20 14 L 30 16 L 40 10 L 50 12 L 60 8 L 70 10 L 80 6"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CardContent>
        </Card>

        {/* GST Due */}
        <Card className="card-elevated border-0">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              GST Pending
            </CardTitle>
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {formatCurrency(mockDashboardMetrics.gstDue)}
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-orange-600 font-medium">Due: Dec 20</span>
              <span className="text-gray-500 ml-1">• 5 days left</span>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-3 text-orange-600 border-orange-200 hover:bg-orange-50">
              File GST Return
            </Button>
          </CardContent>
        </Card>

        {/* Pending Audits */}
        <Card className="card-elevated border-0">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Audit Status
            </CardTitle>
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              3 / 13
            </div>
            <div className="flex items-center gap-1 text-sm mb-3">
              <span className="text-gray-600">Branches audited</span>
            </div>
            <Progress value={(3/13) * 100} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions - 2 columns */}
        <Card className="card-elevated border-0 lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Recent Transactions</CardTitle>
                <CardDescription className="mt-1">Latest financial activity across all branches</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                View All
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {mockTransactions.slice(0, 6).map((txn) => (
                <div
                  key={txn.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      txn.type === 'sale' ? 'bg-emerald-50' :
                      txn.type === 'purchase' ? 'bg-blue-50' : 'bg-orange-50'
                    }`}>
                      {txn.type === 'sale' ? (
                        <ArrowUpRight className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <ArrowDownRight className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{txn.branch}</p>
                      <p className="text-xs text-gray-500">{txn.invoiceNumber} • {formatDate(txn.date)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">
                      {formatCurrency(txn.amount)}
                    </p>
                    <Badge
                      variant={txn.status === 'completed' ? 'default' : 'secondary'}
                      className={`text-xs mt-1 ${
                        txn.status === 'completed'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-gray-100 text-gray-600 border-gray-200'
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

        {/* Top Branches - 1 column */}
        <Card className="card-elevated border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Top Branches</CardTitle>
                <CardDescription className="mt-1">By revenue</CardDescription>
              </div>
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
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                          index === 0 ? 'bg-emerald-100 text-emerald-700' :
                          index === 1 ? 'bg-blue-100 text-blue-700' :
                          index === 2 ? 'bg-purple-100 text-purple-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          #{index + 1}
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

      {/* Full Width Table */}
      <Card className="card-elevated border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">All Branches</CardTitle>
              <CardDescription className="mt-1">Complete overview of all 13 locations</CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search branches..."
                  className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Branch
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Transactions
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    GST Collected
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {mockBranches.map((branch) => (
                  <tr key={branch.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {branch.name.replace("Sarvani Sweets - ", "")}
                          </div>
                          <div className="text-xs text-gray-500">{branch.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                      {branch.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-gray-900">
                      {formatCurrency(branch.revenue)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                      {branch.sales.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                      {formatCurrency(branch.gst)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
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
