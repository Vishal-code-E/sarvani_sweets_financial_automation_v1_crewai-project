# Sarvani Sweets Automation Suite - Frontend Dashboard

A clean, minimal Next.js dashboard for managing multi-branch financial operations for Sarvani Sweets.

## 🎨 Design Philosophy

- **Minimal & Clean**: White background, black text, subtle gray borders
- **Typography-Focused**: Playfair Display for headings, Inter for body text
- **No Flashy Elements**: Classic, professional aesthetic
- **Responsive**: Works seamlessly on desktop, tablet, and mobile

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion (for subtle transitions)

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Dashboard Overview
│   │   ├── branches/page.tsx     # Branch Reports
│   │   ├── invoices/page.tsx     # Transactions & Invoices
│   │   ├── gst/page.tsx          # GST & Tax Summary
│   │   ├── reports/page.tsx      # Financial Reports
│   │   ├── audit/page.tsx        # Audit & Reconciliation
│   │   ├── settings/page.tsx     # Settings
│   │   ├── layout.tsx            # Root layout with sidebar
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── sidebar.tsx           # Navigation sidebar
│   │   ├── metric-card.tsx       # Metric display card
│   │   └── page-header.tsx       # Page header component
│   └── lib/
│       ├── utils.ts              # Utility functions
│       └── mock-data.ts          # Mock data for dashboard
```

## 🎯 Features

### Dashboard Overview
- Key metrics: Revenue, Sales, GST Due, Cash Flow
- Recent transactions list
- Top performing branches
- All branches table

### Branch Reports
- Individual branch performance cards
- Location and sync status
- Revenue, sales, and GST breakdown

### Transactions & Invoices
- Complete transaction history
- Filter by type (sale, purchase, expense)
- Status tracking (completed, pending, failed)
- Export functionality

### GST & Tax Summary
- CGST, SGST, IGST breakdown
- Monthly GST summary
- Filing status tracking
- Compliance monitoring

### Financial Reports
- Pre-defined report templates
- Download functionality
- Report categorization (Financial, Tax, Operations, Audit)

### Audit & Reconciliation
- System activity logs
- Status tracking (success, warning, error)
- Timestamp and user tracking
- Detailed event information

### Settings
- Account management
- Notification preferences
- Data sync configuration
- Security settings
- API access management

## 🏃 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design System

### Colors
- **Background**: `#ffffff` (white)
- **Text**: `#000000` (black)
- **Borders**: `#e5e7eb` (gray-200)
- **Subtle Background**: `#f4f4f4` (gray-100)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
All components follow a minimal design pattern:
- Subtle borders (`border-gray-200`)
- Clean hover states (`hover:bg-gray-50`)
- Typography-focused layouts
- No gradients or flashy effects

## 📊 Mock Data

The dashboard currently uses mock data defined in `src/lib/mock-data.ts`. This includes:
- Dashboard metrics
- Branch data (5 branches)
- Transactions
- GST summaries
- Audit logs

## 🔗 Integration with CrewAI Backend

This frontend is designed to work alongside the Python CrewAI backend located in the parent directory. The backend handles:
- Financial data processing
- GST calculations
- Branch data synchronization
- Reconciliation and auditing
- Report generation

To integrate with the backend, you'll need to:
1. Set up API endpoints in the Python backend
2. Replace mock data calls with actual API calls
3. Handle authentication and authorization

## 🛠️ Development

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

## 📝 Notes

- This is a **frontend-only** implementation with mock data
- No backend API integrations are currently implemented
- All data is static and defined in `mock-data.ts`
- The design follows a minimal, classic aesthetic as specified

## 🎯 Future Enhancements

- Connect to Python CrewAI backend via REST API
- Add real-time data updates
- Implement user authentication
- Add data export functionality
- Create custom report builder
- Add data visualization charts
- Implement advanced filtering and search

## 📄 License

This project is part of the Sarvani Sweets Financial Automation Suite.
