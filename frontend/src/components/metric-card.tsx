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
                "bg-white border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-sm",
                className
            )}
        >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="mt-2 text-3xl font-semibold text-black">{value}</p>
                    {subtitle && (
                        <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
                    )}
                </div>
                {change !== undefined && (
                    <div
                        className={cn(
                            "flex items-center gap-1 text-sm font-medium",
                            isPositive && "text-green-600",
                            isNegative && "text-red-600",
                            !isPositive && !isNegative && "text-gray-600"
                        )}
                    >
                        {isPositive && <TrendingUp className="w-4 h-4" />}
                        {isNegative && <TrendingDown className="w-4 h-4" />}
                        <span>{Math.abs(change)}%</span>
                    </div>
                )}
            </div>
        </div>
    );
}
