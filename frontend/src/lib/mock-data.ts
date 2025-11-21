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

// Mock Dashboard Metrics - Aggregated from all 13 Vizag branches
export const mockDashboardMetrics: DashboardMetrics = {
    totalRevenue: 30450000,  // Sum of all 13 branches
    totalSales: 24360,       // Sum of all branch sales
    gstDue: 5481000,         // Sum of all branch GST
    cashFlow: 22850000,      // Net cash position
    revenueChange: 14.2,
    salesChange: 9.8,
    gstChange: -2.5,
    cashFlowChange: 16.3,
};

// Mock Branch Data - Actual Sarvani Sweets Locations in Visakhapatnam
export const mockBranches: BranchData[] = [
    {
        id: 'BR001',
        name: 'Sarvani Sweets - Asilmetta',
        location: 'Sampath Vinayaka Temple Road, Beside Asilmetta Junction Petrol Bunk, Dwaraka Nagar',
        revenue: 2850000,
        sales: 2240,
        gst: 513000,
        status: 'active',
        lastSync: '2025-11-21T12:30:00',
    },
    {
        id: 'BR002',
        name: 'Sarvani Sweets - Seethammadhara',
        location: 'Opposite Eenadu Office, Seethammadhara',
        revenue: 3200000,
        sales: 2580,
        gst: 576000,
        status: 'active',
        lastSync: '2025-11-21T12:28:00',
    },
    {
        id: 'BR003',
        name: 'Sarvani Sweets - NAD Junction',
        location: 'Shop No. 1, Old Panchayat Building, Opp. Carmel College',
        revenue: 2650000,
        sales: 2120,
        gst: 477000,
        status: 'active',
        lastSync: '2025-11-21T12:25:00',
    },
    {
        id: 'BR004',
        name: 'Sarvani Sweets - MVP Colony',
        location: 'Eenadu, MVP Colony / NAD',
        revenue: 2950000,
        sales: 2380,
        gst: 531000,
        status: 'active',
        lastSync: '2025-11-21T12:22:00',
    },
    {
        id: 'BR005',
        name: 'Sarvani Sweets - Malkapuram',
        location: 'Malkapuram, Visakhapatnam',
        revenue: 2100000,
        sales: 1680,
        gst: 378000,
        status: 'active',
        lastSync: '2025-11-21T12:20:00',
    },
    {
        id: 'BR006',
        name: 'Sarvani Sweets - Muralinagar',
        location: 'Muralinagar, Visakhapatnam',
        revenue: 1950000,
        sales: 1560,
        gst: 351000,
        status: 'active',
        lastSync: '2025-11-21T12:18:00',
    },
    {
        id: 'BR007',
        name: 'Sarvani Sweets - CBM Compound',
        location: 'CBM Compound, Visakhapatnam',
        revenue: 2250000,
        sales: 1800,
        gst: 405000,
        status: 'active',
        lastSync: '2025-11-21T12:15:00',
    },
    {
        id: 'BR008',
        name: 'Sarvani Sweets - Amar Nagar',
        location: 'Amar Nagar, Visakhapatnam',
        revenue: 1850000,
        sales: 1480,
        gst: 333000,
        status: 'active',
        lastSync: '2025-11-21T12:12:00',
    },
    {
        id: 'BR009',
        name: 'Sarvani Sweets - Siripuram',
        location: 'Siripuram, Visakhapatnam',
        revenue: 2400000,
        sales: 1920,
        gst: 432000,
        status: 'active',
        lastSync: '2025-11-21T12:10:00',
    },
    {
        id: 'BR010',
        name: 'Sarvani Sweets - Chinnamushidiwada',
        location: 'Chinnamushidiwada, Visakhapatnam',
        revenue: 1750000,
        sales: 1400,
        gst: 315000,
        status: 'active',
        lastSync: '2025-11-21T12:08:00',
    },
    {
        id: 'BR011',
        name: 'Sarvani Sweets - Maddilapalem',
        location: 'Reddyhouse, NH5, Near Maddilapalem',
        revenue: 2550000,
        sales: 2040,
        gst: 459000,
        status: 'active',
        lastSync: '2025-11-21T12:05:00',
    },
    {
        id: 'BR012',
        name: 'Sarvani Sweets - Ram Nagar',
        location: 'Ram Nagar, Visakhapatnam',
        revenue: 1900000,
        sales: 1520,
        gst: 342000,
        status: 'active',
        lastSync: '2025-11-21T12:02:00',
    },
    {
        id: 'BR013',
        name: 'Sarvani Sweets - Sujatha Nagar',
        location: 'Sujatha Nagar, Visakhapatnam',
        revenue: 2050000,
        sales: 1640,
        gst: 369000,
        status: 'active',
        lastSync: '2025-11-21T12:00:00',
    },
];

// Mock Transactions
export const mockTransactions: Transaction[] = [
    {
        id: 'TXN001',
        date: '2025-11-21',
        branch: 'Seethammadhara',
        type: 'sale',
        amount: 45000,
        gst: 8100,
        invoiceNumber: 'INV-2025-001234',
        status: 'completed',
    },
    {
        id: 'TXN002',
        date: '2025-11-21',
        branch: 'Asilmetta',
        type: 'sale',
        amount: 32000,
        gst: 5760,
        invoiceNumber: 'INV-2025-001235',
        status: 'completed',
    },
    {
        id: 'TXN003',
        date: '2025-11-20',
        branch: 'MVP Colony',
        type: 'purchase',
        amount: 125000,
        gst: 22500,
        invoiceNumber: 'PUR-2025-000456',
        status: 'completed',
    },
    {
        id: 'TXN004',
        date: '2025-11-20',
        branch: 'NAD Junction',
        type: 'sale',
        amount: 28000,
        gst: 5040,
        invoiceNumber: 'INV-2025-001236',
        status: 'pending',
    },
    {
        id: 'TXN005',
        date: '2025-11-19',
        branch: 'Maddilapalem',
        type: 'expense',
        amount: 15000,
        gst: 2700,
        invoiceNumber: 'EXP-2025-000089',
        status: 'completed',
    },
    {
        id: 'TXN006',
        date: '2025-11-19',
        branch: 'Siripuram',
        type: 'sale',
        amount: 38000,
        gst: 6840,
        invoiceNumber: 'INV-2025-001237',
        status: 'completed',
    },
    {
        id: 'TXN007',
        date: '2025-11-18',
        branch: 'Malkapuram',
        type: 'sale',
        amount: 29500,
        gst: 5310,
        invoiceNumber: 'INV-2025-001238',
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
        branch: 'Seethammadhara',
        status: 'success',
        details: 'Hourly sync completed successfully',
    },
    {
        id: 'AUD002',
        timestamp: '2025-11-21T12:28:00',
        action: 'Branch Data Sync',
        user: 'System',
        branch: 'Asilmetta',
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
        branch: 'MVP Colony',
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
    {
        id: 'AUD006',
        timestamp: '2025-11-21T08:30:00',
        action: 'Branch Data Sync',
        user: 'System',
        branch: 'Maddilapalem',
        status: 'success',
        details: 'Hourly sync completed successfully',
    },
    {
        id: 'AUD007',
        timestamp: '2025-11-21T07:45:00',
        action: 'TDS Computation',
        user: 'TDS Compliance Officer',
        branch: 'All Branches',
        status: 'success',
        details: 'Monthly TDS calculations completed',
    },
];
