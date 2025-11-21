"use client";

import PageHeader from "@/components/page-header";
import { User, Bell, Database, Shield, Key } from "lucide-react";

export default function SettingsPage() {
    return (
        <div>
            <PageHeader
                title="Settings"
                description="Manage your account and system preferences"
            />

            {/* Settings Sections */}
            <div className="space-y-6">
                {/* Account Settings */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-semibold text-black">
                                Account Settings
                            </h2>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div>
                                <p className="text-sm font-medium text-black">Organization Name</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Sarvani Sweets Private Limited
                                </p>
                            </div>
                            <button className="text-sm text-gray-600 hover:text-black font-medium">
                                Edit
                            </button>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div>
                                <p className="text-sm font-medium text-black">Email Address</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    admin@sarvanisweets.com
                                </p>
                            </div>
                            <button className="text-sm text-gray-600 hover:text-black font-medium">
                                Edit
                            </button>
                        </div>
                        <div className="flex items-center justify-between py-3">
                            <div>
                                <p className="text-sm font-medium text-black">Phone Number</p>
                                <p className="text-xs text-gray-500 mt-1">+91 98765 43210</p>
                            </div>
                            <button className="text-sm text-gray-600 hover:text-black font-medium">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <Bell className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-semibold text-black">Notifications</h2>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div>
                                <p className="text-sm font-medium text-black">
                                    Daily Financial Summary
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Receive daily reports via email
                                </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div>
                                <p className="text-sm font-medium text-black">GST Filing Alerts</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Reminders for GST filing deadlines
                                </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between py-3">
                            <div>
                                <p className="text-sm font-medium text-black">
                                    Reconciliation Warnings
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Alerts for discrepancies detected
                                </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Data & Sync */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <Database className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-semibold text-black">Data & Sync</h2>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div>
                                <p className="text-sm font-medium text-black">
                                    Automatic Branch Sync
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Hourly data synchronization</p>
                            </div>
                            <span className="text-xs px-2.5 py-1 rounded-full bg-green-100 text-green-800 font-medium">
                                Active
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div>
                                <p className="text-sm font-medium text-black">Last Sync</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    2025-11-21 at 12:30 PM
                                </p>
                            </div>
                            <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
                                Sync Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-semibold text-black">Security</h2>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div>
                                <p className="text-sm font-medium text-black">Change Password</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Update your account password
                                </p>
                            </div>
                            <button className="text-sm text-gray-600 hover:text-black font-medium">
                                Change
                            </button>
                        </div>
                        <div className="flex items-center justify-between py-3">
                            <div>
                                <p className="text-sm font-medium text-black">
                                    Two-Factor Authentication
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Add an extra layer of security
                                </p>
                            </div>
                            <button className="text-sm text-gray-600 hover:text-black font-medium">
                                Enable
                            </button>
                        </div>
                    </div>
                </div>

                {/* API Access */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <Key className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-semibold text-black">API Access</h2>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between py-3">
                            <div>
                                <p className="text-sm font-medium text-black">API Key</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    For integrating with external systems
                                </p>
                            </div>
                            <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
                                Generate Key
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
