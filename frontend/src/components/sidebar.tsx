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
    IndianRupee,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

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
                "fixed left-0 top-0 h-screen glass-strong border-r border-indigo-500/20 transition-all duration-500 z-50 overflow-hidden",
                collapsed ? "w-20" : "w-80"
            )}
        >
            <ScrollArea className="h-full">
                <div className="flex flex-col h-full p-4">
                    {/* Header */}
                    <div className="mb-8 relative">
                        {!collapsed ? (
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-lg border-glow">
                                            <IndianRupee className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#13131a] animate-pulse"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-xl font-bold text-white text-glow">
                                            Sarvani Sweets
                                        </h1>
                                        <p className="text-xs text-indigo-300">Financial Control Center</p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setCollapsed(!collapsed)}
                                    className="absolute -right-2 top-2 h-8 w-8 hover:bg-indigo-500/20 text-indigo-300 hover:text-white"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-lg border-glow">
                                        <IndianRupee className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#13131a] animate-pulse"></div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setCollapsed(!collapsed)}
                                    className="h-8 w-8 hover:bg-indigo-500/20 text-indigo-300 hover:text-white"
                                >
                                    <ChevronLeft className="h-4 w-4 rotate-180" />
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-2">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 relative group overflow-hidden",
                                        isActive
                                            ? "gradient-primary text-white shadow-lg card-glow"
                                            : "text-gray-400 hover:text-white hover:bg-indigo-500/10"
                                    )}
                                >
                                    {isActive && (
                                        <div className="absolute inset-0 shimmer"></div>
                                    )}
                                    <Icon className={cn(
                                        "w-5 h-5 flex-shrink-0 relative z-10",
                                        isActive && "drop-shadow-lg"
                                    )} />
                                    {!collapsed && (
                                        <span className="relative z-10">{item.name}</span>
                                    )}
                                    {!collapsed && !isActive && (
                                        <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                        </div>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    {!collapsed && (
                        <>
                            <Separator className="my-4 bg-indigo-500/20" />
                            <div className="space-y-3">
                                <div className="glass rounded-xl p-4 border border-indigo-500/20 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <p className="text-xs font-semibold text-white">
                                                System Status
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-400 mb-3">
                                            All systems operational
                                        </p>
                                        <Button 
                                            variant="outline" 
                                            size="sm" 
                                            className="w-full text-xs h-9 bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 hover:text-white hover:border-indigo-400"
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </ScrollArea>
        </aside>
    );
}
