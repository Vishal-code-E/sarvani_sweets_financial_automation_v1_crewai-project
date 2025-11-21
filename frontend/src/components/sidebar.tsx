"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Building2,
    FileText,
    Receipt,
    BarChart3,
    Shield,
    Settings,
    ChevronLeft,
} from "lucide-react";
import { useState } from "react";

const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Branches", href: "/branches", icon: Building2 },
    { name: "Invoices", href: "/invoices", icon: FileText },
    { name: "GST / Tax", href: "/gst", icon: Receipt },
    { name: "Reports", href: "/reports", icon: BarChart3 },
    { name: "Audit", href: "/audit", icon: Shield },
    { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={cn(
                "fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 z-40",
                collapsed ? "w-16" : "w-64"
            )}
        >
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
                    {!collapsed && (
                        <h1 className="text-lg font-serif font-semibold text-black">
                            Sarvani Sweets
                        </h1>
                    )}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        <ChevronLeft
                            className={cn(
                                "w-5 h-5 text-gray-600 transition-transform",
                                collapsed && "rotate-180"
                            )}
                        />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-4 space-y-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-black text-white"
                                        : "text-gray-700 hover:bg-gray-100"
                                )}
                            >
                                <Icon className="w-5 h-5 flex-shrink-0" />
                                {!collapsed && <span>{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200">
                    {!collapsed && (
                        <div className="text-xs text-gray-500">
                            <p className="font-medium">Automation Suite</p>
                            <p className="mt-0.5">v1.0.0</p>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}
