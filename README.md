# Claude Code Agent Maker

A structured repository for creating and managing specialized AI agent definitions for Claude Code, organized by functional areas to enhance productivity across business operations.

## Quick Start

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
└── .claude/
    └── agents/
        ├── marketingB2BSaaS/     # B2B marketing specialists
        ├── software-engineering/ # Development experts
        └── [other-areas]/       # Additional functional areas
```

## Available Agents

### Marketing B2B SaaS
- **b2b-growth-marketer** - Lead generation and conversion optimization
- **b2b-saas-pmm-strategist** - Product marketing and positioning
- **b2b-saas-visual-designer** - Professional B2B design
- **instagram-curator** - Instagram content strategy
- **linkedin-curator** - LinkedIn B2B networking
- **paid-media-strategist** - Paid advertising campaigns

### Software Engineering
- **ai-engineer** - AI/ML implementation
- **backend-architect** - API and systems design
- **devops-automator** - CI/CD and infrastructure
- **frontend-developer** - UI/UX implementation
- **mobile-app-builder** - Mobile development
- **rapid-prototyper** - MVP development
- **test-writer-fixer** - Testing automation

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

## Best Practices

1. **Clear Purpose**: Define specific use cases
2. **Unique Identity**: Give each agent distinct expertise
3. **Actionable Output**: Ensure practical recommendations
4. **Test Thoroughly**: Validate with real scenarios

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