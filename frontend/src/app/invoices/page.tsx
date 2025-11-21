"use client";

import PageHeader from "@/components/page-header";
import { formatCurrency, formatDate } from "@/lib/utils";
import { mockTransactions } from "@/lib/mock-data";
import { FileText, Download } from "lucide-react";

export default function InvoicesPage() {
    const totalAmount = mockTransactions.reduce((sum, t) => sum + t.amount, 0);
    const totalGST = mockTransactions.reduce((sum, t) => sum + t.gst, 0);

    return (
        <div>
            <PageHeader
                title="Transactions & Invoices"
                description="Complete transaction history and invoice management"
                action={
                    <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                }
            />

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-sm font-medium text-gray-600">Total Transactions</p>
                    <p className="mt-2 text-3xl font-semibold text-black">
                        {mockTransactions.length}
                    </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-sm font-medium text-gray-600">Total Amount</p>
                    <p className="mt-2 text-3xl font-semibold text-black">
                        {formatCurrency(totalAmount)}
                    </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-sm font-medium text-gray-600">Total GST</p>
                    <p className="mt-2 text-3xl font-semibold text-black">
                        {formatCurrency(totalGST)}
                    </p>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-black">All Transactions</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Invoice
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Branch
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Type
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    GST
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {mockTransactions.map((txn) => (
                                <tr key={txn.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <FileText className="w-4 h-4 text-gray-400" />
                                            <span className="text-sm font-medium text-black">
                                                {txn.invoiceNumber}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {formatDate(txn.date)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {txn.branch}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${txn.type === "sale"
                                                    ? "bg-green-100 text-green-800"
                                                    : txn.type === "purchase"
                                                        ? "bg-blue-100 text-blue-800"
                                                        : "bg-orange-100 text-orange-800"
                                                }`}
                                        >
                                            {txn.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-black">
                                        {formatCurrency(txn.amount)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                                        {formatCurrency(txn.gst)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${txn.status === "completed"
                                                    ? "bg-green-100 text-green-800"
                                                    : txn.status === "pending"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-red-100 text-red-800"
                                                }`}
                                        >
                                            {txn.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <button className="text-sm text-gray-600 hover:text-black font-medium">
                                            View
                                        </button>
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
