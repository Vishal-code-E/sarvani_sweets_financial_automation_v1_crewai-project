// Mock data for the Sarvani Sweets Automation Dashboard

export interface DashboardMetrics {
    totalRevenue: number;
    totalSales: number;
    gstDue: number;
    cashFlow: number;
    revenueChange: number;
    salesChange: number;
    gstChange: number;
    cashFlowChange: number;
}

export interface BranchData {
    id: string;
    name: string;
    location: string;
    revenue: number;
    sales: number;
    gst: number;
    status: 'active' | 'inactive';
    lastSync: string;
}

export interface Transaction {
    id: string;
    date: string;
    branch: string;
    type: 'sale' | 'purchase' | 'expense';
    amount: number;
    gst: number;
    invoiceNumber: string;
    status: 'completed' | 'pending' | 'failed';
}

export interface GSTSummary {
    month: string;
    cgst: number;
    sgst: number;
    igst: number;
    total: number;
    filed: boolean;
}

export interface AuditLog {
    id: string;
    timestamp: string;
    action: string;
    user: string;
    branch: string;
    status: 'success' | 'warning' | 'error';
    details: string;
}

// Mock Dashboard Metrics
export const mockDashboardMetrics: DashboardMetrics = {
    totalRevenue: 12450000,
    totalSales: 8920,
    gstDue: 2240100,
    cashFlow: 9870000,
    revenueChange: 12.5,
    salesChange: 8.3,
    gstChange: -3.2,
    cashFlowChange: 15.7,
};

// Mock Branch Data
export const mockBranches: BranchData[] = [
    {
        id: 'BR001',
        name: 'Sarvani Sweets - Jubilee Hills',
        location: 'Jubilee Hills, Hyderabad',
        revenue: 3200000,
        sales: 2340,
        gst: 576000,
        status: 'active',
        lastSync: '2025-11-21T12:30:00',
    },
    {
        id: 'BR002',
        name: 'Sarvani Sweets - Banjara Hills',
        location: 'Banjara Hills, Hyderabad',
        revenue: 2850000,
        sales: 2100,
        gst: 513000,
        status: 'active',
        lastSync: '2025-11-21T12:28:00',
    },
    {
        id: 'BR003',
        name: 'Sarvani Sweets - Madhapur',
        location: 'Madhapur, Hyderabad',
        revenue: 2950000,
        sales: 2180,
        gst: 531000,
        status: 'active',
        lastSync: '2025-11-21T12:25:00',
    },
    {
        id: 'BR004',
        name: 'Sarvani Sweets - Kukatpally',
        location: 'Kukatpally, Hyderabad',
        revenue: 1950000,
        sales: 1450,
        gst: 351000,
        status: 'active',
        lastSync: '2025-11-21T12:20:00',
    },
    {
        id: 'BR005',
        name: 'Sarvani Sweets - Secunderabad',
        location: 'Secunderabad, Hyderabad',
        revenue: 1500000,
        sales: 850,
        gst: 270000,
        status: 'active',
        lastSync: '2025-11-21T12:15:00',
    },
];

// Mock Transactions
export const mockTransactions: Transaction[] = [
    {
        id: 'TXN001',
        date: '2025-11-21',
        branch: 'Jubilee Hills',
        type: 'sale',
        amount: 45000,
        gst: 8100,
        invoiceNumber: 'INV-2025-001234',
        status: 'completed',
    },
    {
        id: 'TXN002',
        date: '2025-11-21',
        branch: 'Banjara Hills',
        type: 'sale',
        amount: 32000,
        gst: 5760,
        invoiceNumber: 'INV-2025-001235',
        status: 'completed',
    },
    {
        id: 'TXN003',
        date: '2025-11-20',
        branch: 'Madhapur',
        type: 'purchase',
        amount: 125000,
        gst: 22500,
        invoiceNumber: 'PUR-2025-000456',
        status: 'completed',
    },
    {
        id: 'TXN004',
        date: '2025-11-20',
        branch: 'Kukatpally',
        type: 'sale',
        amount: 28000,
        gst: 5040,
        invoiceNumber: 'INV-2025-001236',
        status: 'pending',
    },
    {
        id: 'TXN005',
        date: '2025-11-19',
        branch: 'Secunderabad',
        type: 'expense',
        amount: 15000,
        gst: 2700,
        invoiceNumber: 'EXP-2025-000089',
        status: 'completed',
    },
];

// Mock GST Summary
export const mockGSTSummary: GSTSummary[] = [
    {
        month: 'November 2025',
        cgst: 560000,
        sgst: 560000,
        igst: 120000,
        total: 1240000,
        filed: false,
    },
    {
        month: 'October 2025',
        cgst: 520000,
        sgst: 520000,
        igst: 95000,
        total: 1135000,
        filed: true,
    },
    {
        month: 'September 2025',
        cgst: 485000,
        sgst: 485000,
        igst: 88000,
        total: 1058000,
        filed: true,
    },
    {
        month: 'August 2025',
        cgst: 510000,
        sgst: 510000,
        igst: 102000,
        total: 1122000,
        filed: true,
    },
];

// Mock Audit Logs
export const mockAuditLogs: AuditLog[] = [
    {
        id: 'AUD001',
        timestamp: '2025-11-21T12:30:00',
        action: 'Branch Data Sync',
        user: 'System',
        branch: 'Jubilee Hills',
        status: 'success',
        details: 'Hourly sync completed successfully',
    },
    {
        id: 'AUD002',
        timestamp: '2025-11-21T12:28:00',
        action: 'Branch Data Sync',
        user: 'System',
        branch: 'Banjara Hills',
        status: 'success',
        details: 'Hourly sync completed successfully',
    },
    {
        id: 'AUD003',
        timestamp: '2025-11-21T11:45:00',
        action: 'GST Calculation',
        user: 'GST Compliance Agent',
        branch: 'All Branches',
        status: 'success',
        details: 'Monthly GST liability calculated',
    },
    {
        id: 'AUD004',
        timestamp: '2025-11-21T10:30:00',
        action: 'Financial Reconciliation',
        user: 'Audit Specialist',
        branch: 'Madhapur',
        status: 'warning',
        details: 'Minor discrepancy detected in cash register',
    },
    {
        id: 'AUD005',
        timestamp: '2025-11-21T09:15:00',
        action: 'Report Generation',
        user: 'Financial Controller',
        branch: 'All Branches',
        status: 'success',
        details: 'Daily financial summary generated',
    },
];
