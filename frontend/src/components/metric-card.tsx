"use client";

import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
    title: string;
    value: string;
    change?: number;
    subtitle?: string;
    className?: string;
}

export default function MetricCard({
    title,
    value,
    change,
    subtitle,
    className,
}: MetricCardProps) {
    const isPositive = change && change > 0;
    const isNegative = change && change < 0;

    return (
        <div
            className={cn(
                "relative overflow-hidden bg-[#13131a] border border-[#1f1f2e] rounded-2xl p-6 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20 group",
                className
            )}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                            {title}
                        </p>
                        <p className="mt-3 text-4xl font-bold text-white">
                            {value}
                        </p>
                        {subtitle && (
                            <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
                        )}
                    </div>
                    {change !== undefined && (
                        <div
                            className={cn(
                                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold",
                                isPositive && "bg-emerald-500/10 text-emerald-400",
                                isNegative && "bg-red-500/10 text-red-400",
                                !isPositive && !isNegative && "bg-gray-500/10 text-gray-400"
                            )}
                        >
                            {isPositive && <TrendingUp className="w-4 h-4" />}
                            {isNegative && <TrendingDown className="w-4 h-4" />}
                            <span>{Math.abs(change)}%</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
