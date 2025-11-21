"use client";

import PageHeader from "@/components/page-header";
import { formatCurrency } from "@/lib/utils";
import { mockBranches, mockGSTSummary } from "@/lib/mock-data";
import { Download, FileText, TrendingUp } from "lucide-react";

export default function ReportsPage() {
    const totalRevenue = mockBranches.reduce((sum, b) => sum + b.revenue, 0);
    const totalGST = mockGSTSummary.reduce((sum, g) => sum + g.total, 0);

    const reports = [
        {
            id: 1,
            name: "Monthly Financial Summary",
            description: "Consolidated revenue, expenses, and profit analysis",
            type: "Financial",
            lastGenerated: "2025-11-21",
        },
        {
            id: 2,
            name: "GST Compliance Report",
            description: "Complete GST filing status and liability breakdown",
            type: "Tax",
            lastGenerated: "2025-11-20",
        },
        {
            id: 3,
            name: "Branch Performance Analysis",
            description: "Comparative performance metrics across all branches",
            type: "Operations",
            lastGenerated: "2025-11-21",
        },
        {
            id: 4,
            name: "Reconciliation Report",
            description: "Bank reconciliation and discrepancy tracking",
            type: "Audit",
            lastGenerated: "2025-11-21",
        },
        {
            id: 5,
            name: "CA-Grade Financial Statement",
            description: "Professional financial statements for chartered accountant",
            type: "Financial",
            lastGenerated: "2025-11-15",
        },
    ];

    return (
        <div>
            <PageHeader
                title="Financial Reports"
                description="Generate and download comprehensive financial reports"
            />

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="w-5 h-5 text-gray-600" />
                        <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    </div>
                    <p className="text-3xl font-semibold text-black">
                        {formatCurrency(totalRevenue)}
                    </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-5 h-5 text-gray-600" />
                        <p className="text-sm font-medium text-gray-600">Reports Available</p>
                    </div>
                    <p className="text-3xl font-semibold text-black">{reports.length}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-5 h-5 text-gray-600" />
                        <p className="text-sm font-medium text-gray-600">Total GST</p>
                    </div>
                    <p className="text-3xl font-semibold text-black">
                        {formatCurrency(totalGST)}
                    </p>
                </div>
            </div>

            {/* Reports List */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-black">Available Reports</h2>
                </div>
                <div className="divide-y divide-gray-200">
                    {reports.map((report) => (
                        <div
                            key={report.id}
                            className="p-6 hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <FileText className="w-5 h-5 text-gray-400" />
                                        <h3 className="text-base font-semibold text-black">
                                            {report.name}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">
                                        {report.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs text-gray-500">
                                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-700 font-medium">
                                            {report.type}
                                        </span>
                                        <span>Last generated: {report.lastGenerated}</span>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors ml-4">
                                    <Download className="w-4 h-4" />
                                    Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
