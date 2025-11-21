# Sarvani Sweets Financial Automation - Integration Guide

## Project Overview

This project consists of two main components:

### 1. **Backend (Python + CrewAI)** - `/src/sarvani_sweets_financial_automation/`
AI-powered financial automation system with specialized agents for:
- Main Financial Controller
- Branch Operations Manager
- GST Compliance Specialist
- TDS and Payroll Compliance Officer
- Financial Reconciliation and Audit Specialist
- Financial Reporting and CA Documentation Specialist

### 2. **Frontend (Next.js Dashboard)** - `/frontend/`
Clean, minimal web dashboard for visualizing and managing financial data

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend Dashboard                        │
│                  (Next.js + TypeScript)                      │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │Dashboard │  │ Branches │  │   GST    │  │  Audit   │   │
│  │ Overview │  │ Reports  │  │   Tax    │  │   Logs   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ REST API (To be implemented)
                            │
┌─────────────────────────────────────────────────────────────┐
│                    Backend (Python)                          │
│                   CrewAI Automation                          │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              AI Agent Crew                            │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐     │  │
│  │  │ Financial  │  │   Branch   │  │    GST     │     │  │
│  │  │Controller  │  │ Operations │  │Compliance  │     │  │
│  │  └────────────┘  └────────────┘  └────────────┘     │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐     │  │
│  │  │    TDS     │  │    Audit   │  │  Reporting │     │  │
│  │  │  Payroll   │  │Specialist  │  │ Specialist │     │  │
│  │  └────────────┘  └────────────┘  └────────────┘     │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Task Processing                          │  │
│  │  • Hourly Branch Data Sync                           │  │
│  │  • Daily Financial Summary                           │  │
│  │  • GST Liability Calculation                         │  │
│  │  • TDS Computation                                    │  │
│  │  • Multi-Branch Reconciliation                       │  │
│  │  • CA-Grade Report Generation                        │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Current Status

### ✅ Completed
- **Frontend Dashboard**: Fully functional UI with all pages
- **Backend AI Agents**: Configured and ready to process tasks
- **Mock Data**: Frontend displays sample financial data

### 🔄 To Be Implemented
- **API Layer**: REST API to connect frontend with backend
- **Authentication**: User login and session management
- **Real-time Updates**: WebSocket or polling for live data
- **Data Persistence**: Database integration for storing results

## Running the Project

### Backend (Python CrewAI)

1. Navigate to project root:
```bash
cd /path/to/sarvani_sweets_financial_automation_v1_crewai-project
```

2. Install dependencies:
```bash
pip install uv
crewai install
```

3. Set up environment:
```bash
# Create .env file and add your OpenAI API key
echo "OPENAI_API_KEY=your_key_here" > .env
```

4. Run the automation:
```bash
crewai run
```

### Frontend (Next.js Dashboard)

1. Navigate to frontend:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open browser:
```
http://localhost:3000
```

## Integration Roadmap

### Phase 1: API Development (Backend)
Create REST API endpoints in Python:

```python
# Example API structure (to be implemented)
from fastapi import FastAPI

app = FastAPI()

@app.get("/api/dashboard/metrics")
async def get_dashboard_metrics():
    # Return aggregated financial metrics
    pass

@app.get("/api/branches")
async def get_branches():
    # Return all branch data
    pass

@app.get("/api/transactions")
async def get_transactions():
    # Return transaction history
    pass

@app.get("/api/gst/summary")
async def get_gst_summary():
    # Return GST calculations
    pass

@app.get("/api/audit/logs")
async def get_audit_logs():
    # Return audit trail
    pass
```

### Phase 2: Frontend API Integration
Replace mock data with API calls:

```typescript
// Example: src/lib/api.ts
export async function getDashboardMetrics() {
  const response = await fetch('http://localhost:8000/api/dashboard/metrics');
  return response.json();
}

export async function getBranches() {
  const response = await fetch('http://localhost:8000/api/branches');
  return response.json();
}
```

### Phase 3: Real-time Updates
Implement WebSocket or polling for live data:

```typescript
// Example: Real-time updates
useEffect(() => {
  const interval = setInterval(() => {
    fetchLatestData();
  }, 30000); // Poll every 30 seconds
  
  return () => clearInterval(interval);
}, []);
```

### Phase 4: Authentication
Add user authentication:

```typescript
// Example: Auth context
export function useAuth() {
  const [user, setUser] = useState(null);
  
  const login = async (email, password) => {
    // Authenticate with backend
  };
  
  return { user, login };
}
```

## Data Flow Example

### Scenario: Hourly Branch Sync

1. **Backend (CrewAI)**:
   - Branch Operations Manager agent runs hourly task
   - Syncs data from all branch POS systems
   - Processes and validates data
   - Stores in database
   - Triggers webhook/event

2. **Frontend (Dashboard)**:
   - Receives update notification
   - Fetches latest branch data via API
   - Updates UI components
   - Shows "Last synced" timestamp

## File Structure Integration

```
sarvani_sweets_financial_automation_v1_crewai-project/
│
├── src/                          # Python backend
│   └── sarvani_sweets_financial_automation/
│       ├── crew.py              # AI agents
│       ├── main.py              # Entry point
│       ├── config/
│       │   ├── agents.yaml      # Agent configurations
│       │   └── tasks.yaml       # Task definitions
│       └── tools/               # Custom tools
│
├── frontend/                     # Next.js dashboard
│   ├── src/
│   │   ├── app/                 # Pages
│   │   ├── components/          # UI components
│   │   └── lib/                 # Utilities & mock data
│   └── package.json
│
├── knowledge/                    # Shared knowledge base
├── pyproject.toml               # Python dependencies
└── README.md                    # Main project README
```

## Environment Variables

### Backend (.env)
```bash
OPENAI_API_KEY=your_openai_key
DATABASE_URL=postgresql://...
API_PORT=8000
```

### Frontend (.env.local)
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000
```

## Development Workflow

1. **Start Backend**:
   ```bash
   cd /path/to/project
   crewai run
   ```

2. **Start Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

3. **Make Changes**:
   - Backend: Edit Python files in `src/`
   - Frontend: Edit TypeScript files in `frontend/src/`

4. **Test Integration**:
   - Backend processes data
   - Frontend displays results
   - Verify data flow

## Next Steps

1. **Implement FastAPI backend** for REST endpoints
2. **Connect frontend to API** (replace mock data)
3. **Add database** (PostgreSQL recommended)
4. **Implement authentication** (JWT tokens)
5. **Deploy both services** (Backend: Railway/Render, Frontend: Vercel)
6. **Set up CI/CD** for automated deployments

## Support

For questions or issues:
- Backend: Check `src/sarvani_sweets_financial_automation/`
- Frontend: Check `frontend/README.md`
- CrewAI Docs: https://docs.crewai.com
