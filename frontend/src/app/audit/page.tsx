"use client";

import PageHeader from "@/components/page-header";
import { formatDate } from "@/lib/utils";
import { mockAuditLogs } from "@/lib/mock-data";
import { Shield, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export default function AuditPage() {
    const successCount = mockAuditLogs.filter((log) => log.status === "success").length;
    const warningCount = mockAuditLogs.filter((log) => log.status === "warning").length;
    const errorCount = mockAuditLogs.filter((log) => log.status === "error").length;

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "success":
                return <CheckCircle className="w-4 h-4 text-green-600" />;
            case "warning":
                return <AlertTriangle className="w-4 h-4 text-orange-600" />;
            case "error":
                return <XCircle className="w-4 h-4 text-red-600" />;
            default:
                return null;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "success":
                return "bg-green-100 text-green-800";
            case "warning":
                return "bg-orange-100 text-orange-800";
            case "error":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div>
            <PageHeader
                title="Audit & Reconciliation"
                description="System activity logs and reconciliation tracking"
            />

            {/* Status Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-sm font-medium text-gray-600">Successful</p>
                    </div>
                    <p className="text-3xl font-semibold text-black">{successCount}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                        <p className="text-sm font-medium text-gray-600">Warnings</p>
                    </div>
                    <p className="text-3xl font-semibold text-black">{warningCount}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <XCircle className="w-5 h-5 text-red-600" />
                        <p className="text-sm font-medium text-gray-600">Errors</p>
                    </div>
                    <p className="text-3xl font-semibold text-black">{errorCount}</p>
                </div>
            </div>

            {/* Audit Logs */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-gray-600" />
                        <h2 className="text-lg font-semibold text-black">Activity Logs</h2>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Timestamp
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Action
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    User/Agent
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Branch
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Details
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {mockAuditLogs.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {formatDate(log.timestamp)}
                                        <div className="text-xs text-gray-400 mt-0.5">
                                            {new Date(log.timestamp).toLocaleTimeString("en-IN", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-black">
                                            {log.action}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {log.user}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {log.branch}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                                        {log.details}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span
                                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                                                log.status
                                            )}`}
                                        >
                                            {getStatusIcon(log.status)}
                                            {log.status}
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
