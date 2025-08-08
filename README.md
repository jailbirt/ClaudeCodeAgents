# Claude Code Agent Maker

A structured repository for creating and managing specialized AI agent definitions for Claude Code, organized by functional areas to enhance productivity across business operations.

## 🚀 Quick Start

Agents are automatically available in Claude Code. Simply describe your task and the appropriate agent will be triggered. You can also explicitly request an agent by mentioning their name.

### Example Usage
- "We need to improve our trial-to-paid conversion" → `b2b-growth-marketer`
- "Create a professional logo for our cybersecurity platform" → `b2b-saas-visual-designer`
- "Build a REST API for user management" → `backend-architect`
- "Our app needs more personality" → `whimsy-injector`

### Creating New Agents
The fastest way to create a new agent is using Claude Code's `/agent` command:

```bash
# In Claude Code terminal
/agent
# Follow the interactive prompts
```

## Repository Structure

```
ClaudeCodeAgentMaker/
├── README.md
├── AGENTS.md                     # Comprehensive agent documentation
└── .claude/
    └── agents/
        ├── coach.md              # Special performance coach agent
        ├── design/               # UX/UI and brand specialists
        ├── marketingB2BSaaS/     # B2B marketing specialists
        ├── operations/           # Business operations experts
        ├── performanceBenchmarking/ # Testing and optimization
        ├── product/              # Product strategy specialists
        └── software-engineering/ # Development experts
```

## 📁 Agent Categories

### 🎯 Marketing B2B SaaS (`marketingB2BSaaS/`)
Specialized agents for B2B software marketing, lead generation, and growth strategies.

| Agent | Description | Primary Use Cases |
|-------|-------------|-------------------|
| **b2b-growth-marketer** | Growth hacking and pipeline optimization | • Lead generation strategies<br>• Conversion funnel optimization<br>• ABM campaign design<br>• Customer acquisition cost reduction |
| **b2b-saas-pmm-strategist** | Product marketing and positioning expert | • Go-to-market strategies<br>• Sales enablement materials<br>• Competitive positioning<br>• Feature-to-benefit translation |
| **b2b-saas-visual-designer** | Professional B2B design specialist | • Logo and brand identity<br>• Sales deck design<br>• Whitepaper layouts<br>• Data visualizations |
| **instagram-curator** | Instagram content strategy | • Visual content calendars<br>• Caption writing<br>• Hashtag optimization<br>• Story strategies |
| **linkedin-curator** | LinkedIn B2B content expert | • Thought leadership posts<br>• Company page optimization<br>• Professional networking<br>• B2B content calendars |
| **paid-media-strategist** | Paid advertising specialist | • LinkedIn Ads campaigns<br>• Google Ads for B2B<br>• Budget allocation<br>• Ad copy creation |

### 💻 Software Engineering (`software-engineering/`)
Technical experts for building scalable, maintainable software solutions.

| Agent | Description | Primary Use Cases |
|-------|-------------|-------------------|
| **ai-engineer** | AI/ML implementation specialist | • LLM integration<br>• Recommendation systems<br>• Intelligent automation<br>• ML model deployment |
| **backend-architect** | API and systems design expert | • RESTful API design<br>• Database architecture<br>• Microservices design<br>• Security implementation |
| **devops-automator** | CI/CD and infrastructure specialist | • Pipeline configuration<br>• Cloud deployment<br>• Monitoring setup<br>• Infrastructure as code |
| **frontend-developer** | UI implementation expert | • React/Vue/Angular apps<br>• Performance optimization<br>• Responsive design<br>• State management |
| **mobile-app-builder** | Native and cross-platform specialist | • iOS/Android development<br>• React Native apps<br>• App store deployment<br>• Mobile optimization |
| **rapid-prototyper** | MVP and proof-of-concept expert | • Quick scaffolding<br>• Trend integration<br>• Demo preparation<br>• 6-day sprints |
| **test-writer-fixer** | Testing and quality assurance | • Test suite creation<br>• Test failure analysis<br>• Coverage improvement<br>• CI test integration |

### 🎨 Design (`design/`)
Creative specialists for user experience, branding, and visual communication.

| Agent | Description | Primary Use Cases |
|-------|-------------|-------------------|
| **brand-guardian** | Brand consistency and guidelines | • Brand guideline creation<br>• Visual consistency audits<br>• Asset management<br>• Identity evolution |
| **ui-designer** | User interface design specialist | • Component design<br>• Design systems<br>• Visual aesthetics<br>• Interaction patterns |
| **ux-researcher** | User research and validation | • User interviews<br>• Journey mapping<br>• Usability testing<br>• Persona development |
| **visual-storyteller** | Visual narrative and infographics | • Data visualization<br>• Presentation design<br>• Onboarding flows<br>• Marketing graphics |
| **whimsy-injector** | Delight and personality expert | • Micro-interactions<br>• Easter eggs<br>• Loading animations<br>• Error state humor |

### 📊 Operations (`operations/`)
Business operations and support specialists.

| Agent | Description | Primary Use Cases |
|-------|-------------|-------------------|
| **analytics-reporter** | Data analysis and insights | • Performance reports<br>• Metric dashboards<br>• Trend analysis<br>• ROI calculations |
| **finance-tracker** | Budget and financial management | • Cost optimization<br>• Revenue forecasting<br>• Budget planning<br>• Financial reporting |
| **infrastructure-maintainer** | System health and reliability | • Performance monitoring<br>• Scaling strategies<br>• Disaster recovery<br>• System optimization |
| **legal-compliance-checker** | Regulatory and legal compliance | • Privacy policies<br>• Terms of service<br>• GDPR compliance<br>• License management |
| **support-responder** | Customer support excellence | • Support documentation<br>• Response templates<br>• Ticket analysis<br>• FAQ creation |

### 🏃 Product (`product/`)
Product strategy and user feedback specialists.

| Agent | Description | Primary Use Cases |
|-------|-------------|-------------------|
| **feedback-synthesizer** | User feedback analysis | • Review analysis<br>• Feature requests<br>• Pain point identification<br>• Sentiment tracking |
| **sprint-prioritizer** | Sprint planning and prioritization | • Feature prioritization<br>• Sprint planning<br>• Trade-off decisions<br>• Roadmap management |
| **trend-researcher** | Market and trend analysis | • Viral opportunity identification<br>• Competitor analysis<br>• Market validation<br>• Trend integration |

### 🔧 Performance & Testing (`performanceBenchmarking/`)
Specialized agents for performance optimization and quality assurance.

| Agent | Description | Primary Use Cases |
|-------|-------------|-------------------|
| **api-tester** | API testing and validation | • Load testing<br>• Contract testing<br>• Performance benchmarks<br>• API documentation |
| **performance-benchmarker** | Speed and optimization | • Performance profiling<br>• Bottleneck identification<br>• Optimization strategies<br>• Speed metrics |
| **test-results-analyzer** | Test data synthesis | • Test trend analysis<br>• Quality metrics<br>• Failure patterns<br>• Coverage reports |
| **tool-evaluator** | Development tool assessment | • Framework comparison<br>• Tool recommendations<br>• Cost-benefit analysis<br>• Integration planning |
| **workflow-optimizer** | Process improvement | • Workflow analysis<br>• Efficiency optimization<br>• Bottleneck removal<br>• Automation opportunities |

### 🏆 Special Agents
Elite specialists for unique situations.

| Agent | Description | Primary Use Cases |
|-------|-------------|-------------------|
| **coach** | Performance coach and coordinator | • Multi-agent coordination<br>• Team motivation<br>• Complex project management<br>• Performance optimization |

## Creating New Agents

### Method 1: Using Metaprompting (Recommended)

**Step 1:** Ask Claude to generate an agent prompt:

```
Create a prompt for a [Role] agent in [Department] for [Business Type].

Key responsibilities:
- [Responsibility 1]
- [Responsibility 2]
- [Responsibility 3]

Target audience: [Who will use this agent]
```

**Step 2:** Use the generated prompt with `/agent` command in Claude Code.

### Method 2: Manual Creation

1. Create directory: `.claude/agents/[area-name]/`
2. Add agent file: `agent-name.md`
3. Use this template:

```markdown
---
name: agent-name
description: Use this agent when [scenarios]. The agent excels at [strengths].
model: sonnet
color: blue
---

You are "[AgentName]", a [role description]. Your goal is [objective].

**Core Expertise:**
- [Expertise area 1]
- [Expertise area 2]
- [Expertise area 3]

**Process:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Deliverables:**
- [Output type 1]
- [Output type 2]
```

## Agent Colors
- `blue` - Strategy, analysis
- `green` - Creative, design
- `cyan` - Technical, data
- `red` - Sales, marketing
- `yellow` - Operations
- `purple` - Leadership

## 📋 Agent Selection Guide

### By Business Need

**Starting a New Project:**
- `rapid-prototyper` - Quick MVP creation
- `backend-architect` - System design
- `ui-designer` - Interface planning

**Growing Your Business:**
- `b2b-growth-marketer` - Lead generation
- `trend-researcher` - Market opportunities
- `paid-media-strategist` - Advertising campaigns

**Improving Product Quality:**
- `test-writer-fixer` - Test coverage
- `performance-benchmarker` - Speed optimization
- `ux-researcher` - User validation

**Enhancing User Experience:**
- `whimsy-injector` - Adding delight
- `visual-storyteller` - Better communication
- `feedback-synthesizer` - Understanding users

## 🛠️ Working with Agents

### Best Practices

1. **Be Specific**: Provide clear context and requirements
2. **Use Examples**: Share examples of what you're looking for
3. **Iterate**: Agents work best with feedback loops
4. **Combine Expertise**: Use multiple agents for complex tasks

### Agent Collaboration Examples

**Launching a New B2B Product:**
1. `trend-researcher` → Identify market opportunity
2. `rapid-prototyper` → Build MVP
3. `b2b-saas-pmm-strategist` → Create positioning
4. `b2b-growth-marketer` → Design launch campaign

**Optimizing Application Performance:**
1. `performance-benchmarker` → Identify bottlenecks
2. `backend-architect` → Design optimizations
3. `frontend-developer` → Implement improvements
4. `test-writer-fixer` → Validate changes

## Contributing

1. Fork this repository
2. Create your agent following the guidelines
3. Test with multiple scenarios
4. Submit a pull request

## Resources

- [Claude Code Sub-Agents Documentation](https://docs.anthropic.com/en/docs/claude-code/sub-agents)
- Contact: [https://theeye.io](https://theeye.io)

---

*Enhancing productivity through specialized AI agent expertise.*