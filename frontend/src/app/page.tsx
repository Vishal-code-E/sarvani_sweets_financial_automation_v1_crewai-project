"use client";

import PageHeader from "@/components/page-header";
import MetricCard from "@/components/metric-card";
import { formatCurrency, formatDate } from "@/lib/utils";
import {
  mockDashboardMetrics,
  mockBranches,
  mockTransactions,
} from "@/lib/mock-data";
import { Activity } from "lucide-react";

export default function Home() {
  return (
    <div>
      <PageHeader
        title="Dashboard Overview"
        description="Real-time financial insights across all Sarvani Sweets branches"
      />

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Revenue"
          value={formatCurrency(mockDashboardMetrics.totalRevenue)}
          change={mockDashboardMetrics.revenueChange}
          subtitle="Last 30 days"
        />
        <MetricCard
          title="Total Sales"
          value={mockDashboardMetrics.totalSales.toLocaleString()}
          change={mockDashboardMetrics.salesChange}
          subtitle="Transactions"
        />
        <MetricCard
          title="GST Due"
          value={formatCurrency(mockDashboardMetrics.gstDue)}
          change={mockDashboardMetrics.gstChange}
          subtitle="Current month"
        />
        <MetricCard
          title="Cash Flow"
          value={formatCurrency(mockDashboardMetrics.cashFlow)}
          change={mockDashboardMetrics.cashFlowChange}
          subtitle="Net position"
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Transactions */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-black">
              Recent Transactions
            </h2>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {mockTransactions.slice(0, 5).map((txn) => (
              <div
                key={txn.id}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-black">
                    {txn.branch}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {txn.invoiceNumber} • {formatDate(txn.date)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-black">
                    {formatCurrency(txn.amount)}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 capitalize">
                    {txn.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Branch Performance */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-black mb-4">
            Top Performing Branches
          </h2>
          <div className="space-y-3">
            {mockBranches.slice(0, 5).map((branch, index) => (
              <div
                key={branch.id}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-700">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black">
                      {branch.name.replace("Sarvani Sweets - ", "")}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {branch.sales} sales
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-black">
                    {formatCurrency(branch.revenue)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Branches Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-black">All Branches</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
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
            <tbody className="divide-y divide-gray-200">
              {mockBranches.map((branch) => (
                <tr key={branch.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-black">
                      {branch.name.replace("Sarvani Sweets - ", "")}
                    </div>
                    <div className="text-xs text-gray-500">{branch.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {branch.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-black">
                    {formatCurrency(branch.revenue)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                    {branch.sales.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                    {formatCurrency(branch.gst)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {branch.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

