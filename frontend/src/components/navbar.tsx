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
    Search,
    Bell,
    User,
    ChevronDown,
    IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Branches", href: "/branches", icon: Building2 },
    { name: "Invoices", href: "/invoices", icon: FileText },
    { name: "GST / Tax", href: "/gst", icon: Receipt },
    { name: "Reports", href: "/reports", icon: BarChart3 },
    { name: "Audit", href: "/audit", icon: Shield },
    { name: "Settings", href: "/settings", icon: Settings },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
            <div className="flex items-center justify-between h-full px-6">
                {/* Logo & Brand */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                            <IndianRupee className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-gray-900">Sarvani Sweets</h1>
                            <p className="text-[10px] text-gray-500 -mt-0.5">Financial Suite</p>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center gap-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                        isActive
                                            ? "bg-emerald-50 text-emerald-600"
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                    )}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {/* Search */}
                    <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
                        <Search className="w-5 h-5" />
                    </Button>

                    {/* Notifications */}
                    <div className="relative">
                        <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-emerald-500 text-white text-[10px]">
                            3
                        </Badge>
                    </div>

                    {/* User Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-2 hover:bg-gray-50">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-emerald-100 text-emerald-700 text-sm font-semibold">
                                        VA
                                    </AvatarFallback>
                                </Avatar>
                                <div className="text-left">
                                    <p className="text-sm font-medium text-gray-900">Vishal Admin</p>
                                    <p className="text-xs text-gray-500">Owner</p>
                                </div>
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Log out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
