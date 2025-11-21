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
    Package,
} from "lucide-react";
import { useState } from "react";

const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Branches", href: "/branches", icon: Building2 },
    { name: "Invoices", href: "/invoices", icon: FileText },
    { name: "GST / Tax", href: "/gst", icon: Receipt },
    { name: "Reports", href: "/reports", icon: BarChart3 },
    { name: "Audit", href: "/audit", icon: Shield },
    { name: "Components", href: "/components-demo", icon: Package },
    { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={cn(
                "fixed left-0 top-0 h-screen bg-[#13131a] border-r border-[#1f1f2e] transition-all duration-300 z-40",
                collapsed ? "w-20" : "w-72"
            )}
        >
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="h-20 flex items-center justify-between px-6 border-b border-[#1f1f2e]">
                    {!collapsed && (
                        <div>
                            <h1 className="text-xl font-bold gradient-text">
                                Sarvani Sweets
                            </h1>
                            <p className="text-xs text-gray-400 mt-0.5">Automation Suite</p>
                        </div>
                    )}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="p-2 hover:bg-[#1a1a24] rounded-lg transition-colors"
                    >
                        <ChevronLeft
                            className={cn(
                                "w-5 h-5 text-gray-400 transition-transform",
                                collapsed && "rotate-180"
                            )}
                        />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-4 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200",
                                    isActive
                                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/50"
                                        : "text-gray-400 hover:text-white hover:bg-[#1a1a24]"
                                )}
                            >
                                <Icon className="w-5 h-5 flex-shrink-0" />
                                {!collapsed && <span>{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-[#1f1f2e]">
                    {!collapsed && (
                        <div className="text-xs text-gray-500">
                            <p className="font-semibold text-gray-400">Version 1.0.0</p>
                            <p className="mt-1">Powered by AI</p>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}
