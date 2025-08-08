# Agent Role Definitions Repository

This repository contains a collection of specialized AI agent role definitions organized by functional area to assist with day-to-day operations. Each agent is designed to provide expert-level assistance in specific domains, helping streamline workflows and enhance productivity across different business functions.

## Overview

The agents defined in this repository serve as specialized consultants that can be activated within Claude Code to provide domain-specific expertise. Each agent has a carefully crafted persona, methodology, and knowledge base tailored to excel in particular business scenarios.

## Repository Structure

The repository follows a structured organization pattern:

```
ClaudeCodeAgentMaker/
├── README.md
└── .claude/
    ├── settings.local.json
    └── agents/
        ├── [functional-area]/
        │   ├── agent-name-1.md
        │   ├── agent-name-2.md
        │   └── agent-name-3.md
        └── [another-functional-area]/
            ├── agent-name-1.md
            └── agent-name-2.md
```

### Current Functional Areas and Agents

#### **Marketing B2B SaaS** (`marketingB2BSaaS/`)
- `b2b-growth-marketer.md` - Growth marketing and lead generation expert
- `b2b-saas-pmm-strategist.md` - Product marketing manager specialist
- `b2b-saas-visual-designer.md` - Professional B2B design expert
- `instagram-curator.md` - Instagram content strategy and curation specialist
- `linkedin-curator.md` - LinkedIn B2B content and networking expert
- `paid-media-strategist.md` - Paid advertising campaign specialist

#### **Software Engineering** (`software-engineering/`)
- `ai-engineer.md` - AI/ML implementation and integration specialist
- `backend-architect.md` - Backend systems design and API development expert
- `devops-automator.md` - CI/CD and infrastructure automation specialist
- `frontend-developer.md` - UI/UX implementation and frontend performance expert
- `mobile-app-builder.md` - Native and cross-platform mobile development specialist
- `rapid-prototyper.md` - MVP and proof-of-concept development expert
- `test-writer-fixer.md` - Testing strategy and test automation specialist

## How to Add a New Agent

### Method 1: Using the /agent Command (Recommended)

The easiest way to create a new agent is using Claude Code's built-in `/agent` command:

1. Open Claude Code in your terminal
2. Type `/agent` and press Enter
3. Follow the interactive prompts to define your agent:
   - Choose a functional area or create a new one
   - Provide the agent name and description
   - Define the agent's persona and capabilities
   - Claude Code will automatically create the agent file in the correct location

### Method 2: Manual Creation

#### Step 1: Choose or Create a Functional Area

1. **Using an Existing Area**: Navigate to `.claude/agents/[existing-area]/`
2. **Creating a New Area**: 
   - Create a new directory: `.claude/agents/[new-area-name]/`
   - Add your agent definitions directly in this directory

#### Step 2: Create the Agent Definition File

Create a new `.md` file in the appropriate `agents/` directory using this naming convention:
- Use lowercase letters
- Separate words with hyphens
- Be descriptive and specific
- Example: `b2b-sales-enablement-specialist.md`

#### Step 3: Agent Definition Template

Use this template for your agent definition:

```markdown
---
name: agent-name
description: Use this agent when [specific scenarios]. Include: [list of use cases]. The agent excels at [key strengths]. Examples: <example>Context: [situation description]. user: "[example user request]" assistant: "[example response]" <commentary>[explanation of why this agent is appropriate]</commentary></example> <example>Context: [another situation]. user: "[another example]" assistant: "[response]" <commentary>[reasoning]</commentary></example>
model: sonnet
color: [blue|green|cyan|red|yellow|purple]
---

You are "[AgentPersona]", a [professional title/description]. Your primary goal is [main objective]. You [unique value proposition and approach].

**Core Persona & Mindset:**
- **Key Trait 1**: [Description of primary characteristic]
- **Key Trait 2**: [Description of secondary characteristic]
- **Key Trait 3**: [Description of tertiary characteristic]
- **Expertise Focus**: [What you specialize in]
- **Success Metrics**: [How you measure success]

**Process & Methodology:**
When you receive a [domain] task, you must follow this structured approach:

1. **Step 1**: [First action/analysis step]
2. **Step 2**: [Second action/analysis step]
3. **Step 3**: [Third action/analysis step]
4. **Step 4**: [Implementation/recommendation step]
5. **Step 5**: [Validation/success measurement step]

**Knowledge Domains:**
- **Frameworks**: [Relevant methodologies, frameworks]
- **Tools & Technologies**: [Software, platforms, systems]
- **Deliverables**: [Types of outputs you create]
- **Industry Knowledge**: [Sector-specific expertise]

**Output Guidelines:**
- [Specific formatting requirements]
- [Communication style preferences]
- [Quality standards]
- [Measurement criteria]

[Additional specialized instructions and behavioral guidelines specific to this agent's domain]
```

## Agent Definition Best Practices

### 1. Persona Development
- **Unique Identity**: Give each agent a distinct name and personality
- **Clear Expertise**: Define specific areas of strength and specialization
- **Professional Tone**: Maintain authority while being approachable
- **Consistent Voice**: Ensure the agent's communication style aligns with their role

### 2. Description Guidelines
- **Specific Triggers**: Clearly define when to use this agent
- **Use Case Examples**: Provide 2-3 concrete examples with context
- **Differentiation**: Explain how this agent differs from similar ones
- **Success Scenarios**: Describe ideal situations for agent activation

### 3. Process Structure
- **Systematic Approach**: Define a repeatable methodology
- **Clear Steps**: Number and describe each phase of the process
- **Decision Points**: Include how the agent handles different scenarios
- **Quality Checks**: Build in validation and refinement steps

### 4. Technical Specifications
- **Model Selection**: Use `sonnet` for most general-purpose agents
- **Color Coding**: Choose colors that reflect the agent's domain:
  - `blue`: Strategy, consulting, analysis
  - `green`: Creative, design, content
  - `cyan`: Technical, development, data
  - `red`: Sales, marketing, growth
  - `yellow`: Operations, project management
  - `purple`: Leadership, executive, transformation

### 5. Knowledge Domains
- **Frameworks**: Include relevant methodologies and best practices
- **Tools**: List software, platforms, and technologies
- **Deliverables**: Specify types of outputs the agent creates
- **Industry Context**: Add sector-specific knowledge when relevant

## Guidelines for Agent Quality

### Content Quality
- **Actionable Advice**: Ensure recommendations are specific and implementable
- **Industry Standards**: Align with current best practices in the field
- **Measurable Outcomes**: Include success metrics and KPIs
- **Risk Awareness**: Address potential challenges and mitigation strategies

### User Experience
- **Clear Communication**: Use professional but accessible language
- **Structured Output**: Organize responses with headers, bullets, and formatting
- **Contextual Adaptation**: Tailor responses to user's experience level
- **Follow-up Guidance**: Provide next steps and implementation advice

### Maintenance
- **Regular Review**: Update agents as industry practices evolve
- **User Feedback**: Incorporate learnings from actual usage
- **Performance Monitoring**: Track agent effectiveness and user satisfaction
- **Version Control**: Use git to manage changes and improvements

## Testing Your Agent

Before finalizing your agent, test it with various scenarios:

1. **Edge Cases**: Try unusual or complex requests
2. **Different Contexts**: Test with various company sizes and situations
3. **Clarity Check**: Ensure responses are clear and actionable
4. **Consistency**: Verify the agent maintains its persona across interactions
5. **Value Validation**: Confirm the agent provides meaningful expertise

## Creating Agents with Metaprompting

Metaprompting is a two-step process that helps you create high-quality agents efficiently. First, you use Claude to generate the perfect prompt for your agent, then you use that prompt with the `/agent` command to create the actual agent.

### The Two-Step Process

#### Step 1: Generate the Agent Prompt with Metaprompting

Use this template to ask Claude to create a customized prompt for your specific agent:

```
Hello, I need you to create a prompt for defining a new AI agent. This prompt will be used with Claude Code's /agent command.

Here are the details for the agent I want to create:

Business Type: [Specify the business type here. E.g., B2B SaaS, Fashion E-commerce, FinTech, Healthcare Tech, etc.]

Department/Functional Area: [Specify the area here. E.g., Sales, Product Marketing, Customer Success, Engineering, Finance, etc.]

Agent Role: [Specific role name, e.g., "Customer Success Operations Manager", "DevSecOps Engineer", etc.]

Key Responsibilities: [List 3-5 main responsibilities this agent should handle]

Target Audience: [Who will interact with this agent? E.g., startup founders, enterprise teams, etc.]

Please generate a comprehensive prompt that I can use with /agent to create this agent. The prompt should include:
- A clear persona and professional identity
- Core expertise and specializations
- Methodologies and frameworks they should use
- Communication style and approach
- Specific tools and deliverables

Make the prompt detailed enough to create a high-quality, specialized agent.
```

#### Step 2: Use the Generated Prompt with /agent

1. Copy the prompt that Claude generates for you
2. Open Claude Code in your terminal
3. Type `/agent` and press Enter
4. When prompted for the agent details, paste the generated prompt
5. Claude Code will create the agent file in the correct location with proper formatting

### Example Workflow

**Step 1 - You ask Claude:**
```
I need you to create a prompt for defining a new AI agent for a B2B SaaS company's Customer Success department. The role is "Customer Success Operations Manager" who helps optimize CS processes and metrics.
```

**Claude generates a detailed prompt like:**
```
Create a Customer Success Operations Manager agent who specializes in B2B SaaS customer retention and growth. This agent should be an expert in CS metrics (NRR, GRR, churn), process optimization, and team enablement. They should use frameworks like HEART, customer health scoring, and journey mapping. The agent should be data-driven, strategic, and focused on scalable solutions...
```

**Step 2 - You use /agent:**
- Type `/agent` in Claude Code
- Paste the generated prompt when asked
- The agent is automatically created with proper structure

### Why This Two-Step Process Works

- **Precision**: The metaprompt ensures you think through all aspects of the agent
- **Quality**: Claude helps craft a comprehensive agent definition
- **Consistency**: All agents follow the same high standards
- **Speed**: Faster than writing agent definitions from scratch

### Advanced Metaprompting Tips

1. **Be Specific About Context**: Include industry specifics, company size, and unique challenges
2. **Reference Existing Agents**: Ask Claude to model the new agent after successful existing ones
3. **Iterate on the Prompt**: If the first generated prompt isn't perfect, ask Claude to refine it
4. **Batch Creation**: Generate multiple related agent prompts in one session for a cohesive team

This metaprompting approach ensures your agents are well-designed, comprehensive, and perfectly suited to their intended purpose.

## Additional Resources

To learn more about how agents work within Claude Code, please refer to the official documentation:
- **Sub-Agents Documentation**: [https://docs.anthropic.com/en/docs/claude-code/sub-agents](https://docs.anthropic.com/en/docs/claude-code/sub-agents)

## Contact

For more information, suggestions for new agents, or to better understand how these roles can benefit your organization, please contact us at [https://theeye.io](https://theeye.io)

## Contributing

We welcome contributions! To suggest new agents or improvements:

1. **Fork** this repository
2. **Create** your agent following the guidelines above
3. **Test** thoroughly with multiple scenarios
4. **Submit** a pull request with a clear description of the agent's purpose and value
5. **Include** examples of successful interactions in your PR description

---

*This repository is maintained to support operational excellence and specialized expertise across all business areas through AI agent specialization.*