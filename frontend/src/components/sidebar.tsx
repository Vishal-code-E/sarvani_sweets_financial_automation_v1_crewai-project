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
                "fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 z-40",
                collapsed ? "w-20" : "w-72"
            )}
        >
            <ScrollArea className="h-full">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
                        {!collapsed && (
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-xl bg-gradient-accent flex items-center justify-center shadow-sm">
                                    <IndianRupee className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-base font-bold text-gray-900">
                                        Sarvani Sweets
                                    </h1>
                                    <p className="text-xs text-gray-500">Financial Suite</p>
                                </div>
                            </div>
                        )}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setCollapsed(!collapsed)}
                            className="h-8 w-8 hover:bg-gray-100"
                        >
                            <ChevronLeft
                                className={cn(
                                    "h-4 w-4 transition-transform text-gray-600",
                                    collapsed && "rotate-180"
                                )}
                            />
                        </Button>
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
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                                        isActive
                                            ? "bg-gray-900 text-white shadow-sm"
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                    )}
                                >
                                    <Icon className="w-5 h-5 flex-shrink-0" />
                                    {!collapsed && <span>{item.name}</span>}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    {!collapsed && (
                        <>
                            <Separator className="mx-3" />
                            <div className="p-4">
                                <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
                                    <p className="text-xs font-semibold text-gray-900 mb-1">
                                        Need Help?
                                    </p>
                                    <p className="text-xs text-gray-500 mb-3">
                                        Contact support for assistance
                                    </p>
                                    <Button variant="outline" size="sm" className="w-full text-xs h-8">
                                        Get Support
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </ScrollArea>
        </aside>
    );
}
