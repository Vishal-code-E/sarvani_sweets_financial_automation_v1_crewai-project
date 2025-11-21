"use client";

import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Plus, Search } from "lucide-react";

export default function ComponentsDemo() {
    return (
        <div>
            <PageHeader
                title="UI Components Library"
                description="Reusable components integrated into the dashboard"
                action={
                    <Button>
                        <Plus className="w-4 h-4" />
                        Add New
                    </Button>
                }
            />

            {/* Buttons Section */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Buttons</CardTitle>
                    <CardDescription>Different button variants and sizes</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="default">Default Button</Button>
                        <Button variant="outline">Outline Button</Button>
                        <Button variant="ghost">Ghost Button</Button>
                        <Button variant="link">Link Button</Button>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <Button size="sm">Small</Button>
                        <Button size="default">Default</Button>
                        <Button size="lg">Large</Button>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <Button>
                            <Download className="w-4 h-4" />
                            With Icon
                        </Button>
                        <Button disabled>Disabled</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Badges Section */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Badges</CardTitle>
                    <CardDescription>Status indicators and tags</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="default">Default</Badge>
                        <Badge variant="success">Success</Badge>
                        <Badge variant="warning">Warning</Badge>
                        <Badge variant="error">Error</Badge>
                        <Badge variant="info">Info</Badge>
                    </div>
                </CardContent>
            </Card>

            {/* Input Section */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Input Fields</CardTitle>
                    <CardDescription>Form inputs with different states</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4 max-w-md">
                        <div>
                            <label className="text-sm font-medium text-black mb-2 block">
                                Default Input
                            </label>
                            <Input placeholder="Enter text..." />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-black mb-2 block">
                                With Icon
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input className="pl-10" placeholder="Search..." />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-black mb-2 block">
                                Disabled Input
                            </label>
                            <Input disabled placeholder="Disabled..." />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600">
                            This is a basic card component with header and content.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>With Badge</CardTitle>
                        <CardDescription>Status indicators</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2">
                            <Badge variant="success">Active</Badge>
                            <Badge variant="info">New</Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>With Button</CardTitle>
                        <CardDescription>Action cards</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button variant="outline" className="w-full">
                            Click Me
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Table Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Data Table</CardTitle>
                    <CardDescription>Structured data display</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                <TableHead className="text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Item 1</TableCell>
                                <TableCell>
                                    <Badge variant="success">Active</Badge>
                                </TableCell>
                                <TableCell className="text-right">₹1,234</TableCell>
                                <TableCell className="text-center">
                                    <Button variant="ghost" size="sm">
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Item 2</TableCell>
                                <TableCell>
                                    <Badge variant="warning">Pending</Badge>
                                </TableCell>
                                <TableCell className="text-right">₹5,678</TableCell>
                                <TableCell className="text-center">
                                    <Button variant="ghost" size="sm">
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Item 3</TableCell>
                                <TableCell>
                                    <Badge variant="error">Inactive</Badge>
                                </TableCell>
                                <TableCell className="text-right">₹9,012</TableCell>
                                <TableCell className="text-center">
                                    <Button variant="ghost" size="sm">
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
