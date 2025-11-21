"use client";

import PageHeader from "@/components/page-header";
import MetricCard from "@/components/metric-card";
import { formatCurrency, formatDate } from "@/lib/utils";
import { mockBranches } from "@/lib/mock-data";
import { MapPin, Clock } from "lucide-react";

export default function BranchesPage() {
    const totalRevenue = mockBranches.reduce((sum, b) => sum + b.revenue, 0);
    const totalSales = mockBranches.reduce((sum, b) => sum + b.sales, 0);
    const totalGST = mockBranches.reduce((sum, b) => sum + b.gst, 0);

    return (
        <div>
            <PageHeader
                title="Branch Reports"
                description="Performance metrics and insights for all branch locations"
            />

            {/* Summary Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <MetricCard
                    title="Total Branches"
                    value={mockBranches.length.toString()}
                    subtitle="Active locations"
                />
                <MetricCard
                    title="Combined Revenue"
                    value={formatCurrency(totalRevenue)}
                    subtitle="All branches"
                />
                <MetricCard
                    title="Total Transactions"
                    value={totalSales.toLocaleString()}
                    subtitle="Across network"
                />
            </div>

            {/* Branch Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockBranches.map((branch) => (
                    <div
                        key={branch.id}
                        className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-lg font-semibold text-black">
                                    {branch.name.replace("Sarvani Sweets - ", "")}
                                </h3>
                                <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
                                    <MapPin className="w-4 h-4" />
                                    <span>{branch.location}</span>
                                </div>
                            </div>
                            <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${branch.status === "active"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-gray-100 text-gray-800"
                                    }`}
                            >
                                {branch.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Revenue</p>
                                <p className="text-sm font-semibold text-black">
                                    {formatCurrency(branch.revenue)}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Sales</p>
                                <p className="text-sm font-semibold text-black">
                                    {branch.sales.toLocaleString()}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">GST</p>
                                <p className="text-sm font-semibold text-black">
                                    {formatCurrency(branch.gst)}
                                </p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                <Clock className="w-3.5 h-3.5" />
                                <span>Last sync: {formatDate(branch.lastSync)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
