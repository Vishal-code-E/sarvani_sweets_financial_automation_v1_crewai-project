# Google Gemini API Setup Guide

## ✅ Changes Made

All 6 AI agents have been updated to use **Google Gemini 1.5 Flash** instead of OpenAI GPT-4o-mini.

### Updated Agents:
1. ✅ Main Financial Controller
2. ✅ Branch Operations Manager
3. ✅ GST Compliance Specialist
4. ✅ TDS and Payroll Compliance Officer
5. ✅ Financial Reconciliation and Audit Specialist
6. ✅ Financial Reporting and CA Documentation Specialist

**Model**: `gemini/gemini-1.5-flash` (Fast, cost-effective, 1M token context)

---

## 🚀 Setup Instructions

### Step 1: Get Your Google API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy your API key

### Step 2: Install Dependencies

Run these commands in your terminal:

```bash
# Navigate to project root
cd /Users/vishale/Downloads/sarvani_sweets_financial_automation_v1_crewai-project

# Install Google Generative AI SDK
pip install google-generativeai

# OR using uv (recommended for this project)
uv pip install google-generativeai

# Reinstall all project dependencies
crewai install
```

### Step 3: Configure Environment Variables

Create or update your `.env` file:

```bash
# Create .env file if it doesn't exist
touch .env

# Add your Google API key
echo "GOOGLE_API_KEY=your_actual_api_key_here" >> .env
```

**OR** manually edit `.env` file:

```env
# Google Gemini API Key
GOOGLE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Optional: Keep OpenAI key for backup
# OPENAI_API_KEY=your_openai_key_here
```

### Step 4: Verify Installation

```bash
# Test Python import
python -c "import google.generativeai as genai; print('✅ Google GenAI SDK installed successfully')"

# Run your crew
crewai run
```

---

## 🔧 Model Options

You can use different Gemini models by updating the `model` parameter in `crew.py`:

### Available Models:

| Model | Description | Best For |
|-------|-------------|----------|
| `gemini/gemini-1.5-flash` | Fast, cost-effective | Production, high-volume tasks ✅ **(Currently Used)** |
| `gemini/gemini-1.5-pro` | More capable, slower | Complex reasoning tasks |
| `gemini/gemini-2.0-flash-exp` | Experimental, latest | Testing new features |

### To Change Model:

Edit `/src/sarvani_sweets_financial_automation/crew.py`:

```python
llm=LLM(
    model="gemini/gemini-1.5-pro",  # Change this
    temperature=0.7,
),
```

---

## 💰 Pricing Comparison

### Google Gemini 1.5 Flash (Current)
- **Input**: $0.075 per 1M tokens
- **Output**: $0.30 per 1M tokens
- **Context**: 1M tokens
- **Rate Limit**: 1,500 RPM (free tier)

### OpenAI GPT-4o-mini (Previous)
- **Input**: $0.15 per 1M tokens
- **Output**: $0.60 per 1M tokens
- **Context**: 128k tokens

**💡 Gemini is 2x cheaper and has 8x more context!**

---

## 🧪 Testing

Test individual agents:

```python
# Test script (create test_gemini.py)
from sarvani_sweets_financial_automation.crew import SarvaniSweetsFinancialAutomationCrew

crew = SarvaniSweetsFinancialAutomationCrew()
agent = crew.main_financial_controller()
print(f"Agent: {agent.role}")
print(f"Model: {agent.llm.model}")
```

Run test:
```bash
python test_gemini.py
```

---

## 🔒 Security Best Practices

1. **Never commit `.env` file**:
   ```bash
   echo ".env" >> .gitignore
   ```

2. **Use environment variables**:
   ```bash
   export GOOGLE_API_KEY="your_key_here"
   ```

3. **Rotate keys regularly** from Google AI Studio

4. **Set usage limits** in Google Cloud Console

---

## 🐛 Troubleshooting

### Error: "GOOGLE_API_KEY not found"
```bash
# Check if .env file exists
cat .env

# Verify environment variable
echo $GOOGLE_API_KEY

# Reload environment
source .env
```

### Error: "Module 'google.generativeai' not found"
```bash
# Reinstall package
pip install --upgrade google-generativeai

# Verify installation
pip show google-generativeai
```

### Error: "Invalid API key"
- Check your API key at [Google AI Studio](https://makersuite.google.com/app/apikey)
- Ensure no extra spaces in `.env` file
- Try regenerating the API key

### Error: "Rate limit exceeded"
- Gemini free tier: 1,500 RPM
- Add delays between requests
- Upgrade to paid tier for higher limits

---

## 📊 Monitoring Usage

Track your API usage at:
- [Google AI Studio Dashboard](https://makersuite.google.com/)
- View request counts, token usage, and costs
- Set up billing alerts

---

## 🔄 Switching Back to OpenAI (Optional)

If you need to switch back:

1. Update `crew.py`:
   ```python
   llm=LLM(
       model="openai/gpt-4o-mini",
       temperature=0.7,
   ),
   ```

2. Add OpenAI key to `.env`:
   ```env
   OPENAI_API_KEY=sk-...
   ```

---

## 📚 Additional Resources

- [Google Gemini API Docs](https://ai.google.dev/docs)
- [CrewAI LLM Configuration](https://docs.crewai.com/concepts/llms)
- [LiteLLM Provider List](https://docs.litellm.ai/docs/providers)

---

## ✨ Benefits of Gemini

✅ **50% cheaper** than GPT-4o-mini  
✅ **1M token context** (vs 128k for GPT-4o-mini)  
✅ **Fast response times** with Flash model  
✅ **Free tier** with 1,500 RPM  
✅ **Multimodal support** (text, images, audio)  
✅ **Better at long documents** (perfect for financial reports)

---

**🎉 You're all set! Your AI agents are now powered by Google Gemini!**
