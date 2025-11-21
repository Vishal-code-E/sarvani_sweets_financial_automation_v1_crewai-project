"use client";

import PageHeader from "@/components/page-header";
import MetricCard from "@/components/metric-card";
import { formatCurrency } from "@/lib/utils";
import { mockGSTSummary } from "@/lib/mock-data";
import { Receipt, CheckCircle, AlertCircle } from "lucide-react";

export default function GSTPage() {
    const currentMonth = mockGSTSummary[0];
    const filedCount = mockGSTSummary.filter((m) => m.filed).length;

    return (
        <div>
            <PageHeader
                title="GST & Tax Summary"
                description="Comprehensive GST liability tracking and compliance status"
            />

            {/* Current Month Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <MetricCard
                    title="CGST"
                    value={formatCurrency(currentMonth.cgst)}
                    subtitle={currentMonth.month}
                />
                <MetricCard
                    title="SGST"
                    value={formatCurrency(currentMonth.sgst)}
                    subtitle={currentMonth.month}
                />
                <MetricCard
                    title="IGST"
                    value={formatCurrency(currentMonth.igst)}
                    subtitle={currentMonth.month}
                />
                <MetricCard
                    title="Total GST Due"
                    value={formatCurrency(currentMonth.total)}
                    subtitle={currentMonth.month}
                />
            </div>

            {/* Filing Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-black">Filed Returns</h3>
                            <p className="text-sm text-gray-500">Compliance status</p>
                        </div>
                    </div>
                    <p className="text-4xl font-semibold text-black mb-2">{filedCount}</p>
                    <p className="text-sm text-gray-600">
                        Out of {mockGSTSummary.length} periods
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                            <AlertCircle className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-black">Pending Filing</h3>
                            <p className="text-sm text-gray-500">Action required</p>
                        </div>
                    </div>
                    <p className="text-4xl font-semibold text-black mb-2">
                        {mockGSTSummary.length - filedCount}
                    </p>
                    <p className="text-sm text-gray-600">Returns to be filed</p>
                </div>
            </div>

            {/* GST Summary Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <Receipt className="w-5 h-5 text-gray-600" />
                        <h2 className="text-lg font-semibold text-black">
                            Monthly GST Summary
                        </h2>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Period
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    CGST
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    SGST
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    IGST
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Total
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {mockGSTSummary.map((period, index) => (
                                <tr
                                    key={index}
                                    className={`hover:bg-gray-50 ${!period.filed ? "bg-orange-50/30" : ""
                                        }`}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-black">
                                            {period.month}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                                        {formatCurrency(period.cgst)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                                        {formatCurrency(period.sgst)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                                        {formatCurrency(period.igst)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-black">
                                        {formatCurrency(period.total)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        {period.filed ? (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                <CheckCircle className="w-3 h-3" />
                                                Filed
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                                <AlertCircle className="w-3 h-3" />
                                                Pending
                                            </span>
                                        )}
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
