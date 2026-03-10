# AI Agent Encyclopedia 📚

**A comprehensive educational resource for open source AI agents, agentic coders, and autonomous frameworks.**

---

## Table of Contents

1. [AI Agent Frameworks](#ai-agent-frameworks)
2. [Agentic Coders](#agentic-coders)
3. [Autonomous Agents](#autonomous-agents)
4. [Comparison Tables](#comparison-tables)

---

# AI Agent Frameworks

## LangChain

| Property | Value |
|----------|-------|
| **GitHub** | [langchain-ai/langchain](https://github.com/langchain-ai/langchain) |
| **Stars** | ~100,000+ ⭐ |
| **License** | MIT |
| **Language** | Python / JavaScript |
| **Type** | General Purpose Framework |

### Architecture

LangChain uses a modular, composable architecture:
- **Chains** - Sequential operations linking multiple components
- **Agents** - Autonomous decision-making using LLMs
- **Memory** - Conversation and context persistence
- **Tools** - External API integrations
- **Document Loaders** - Data ingestion from various sources
- **Vector Stores** - Embedding storage for RAG

### Key Features

- 500+ integrations with LLMs, tools, and data sources
- Production-ready with LangSmith observability
- Agent types: ReAct, Plan-and-Execute, Structured Chat
- Supports both simple and complex applications
- Active enterprise adoption

### Use Cases

- RAG (Retrieval Augmented Generation) applications
- Document Q&A systems
- Multi-step reasoning workflows
- Chatbots with memory
- Data analysis pipelines

### Limitations

- Steep learning curve due to extensive API
- Sometimes over-abstracts, making debugging difficult
- Frequent API changes between versions
- Can be verbose for simple use cases

---

## LangGraph

| Property | Value |
|----------|-------|
| **GitHub** | [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) |
| **Stars** | ~8,000+ ⭐ |
| **License** | MIT |
| **Language** | Python |
| **Type** | Graph-based Workflow Orchestration |

### Architecture

LangGraph uses state machines with cycles for agent workflows:
- **State Machines** - Graph-based workflow control
- **Cyclic Graphs** - Supports loops (unlike DAG-only frameworks)
- **Persistence** - Built-in checkpointing and memory
- **Human-in-the-loop** - Native support for human intervention
- **Time Travel** - Debug by reverting to previous states

### Key Features

- Precise control over agent workflows
- State management and checkpointing
- Complex multi-agent systems
- Visual debugging tools
- Streaming support

### Use Cases

- Complex multi-step agent workflows
- Stateful conversations
- Autonomous agents with planning
- Human-in-the-loop systems
- Production agent deployments

---

## CrewAI

| Property | Value |
|----------|-------|
| **GitHub** | [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) |
| **Stars** | ~25,000+ ⭐ |
| **License** | MIT |
| **Language** | Python |
| **Type** | Multi-Agent Orchestration |

### Architecture

CrewAI uses role-based team orchestration:
- **Agents** - Role-defined AI personas with goals
- **Tasks** - Specific assignments for agents
- **Crews** - Teams of agents working together
- **Processes** - Sequential, hierarchical, or consensual

### Key Features

- Human-readable agent definitions
- Role-playing and goal-oriented design
- Multiple collaboration patterns
- Easy to understand and use
- Rapid prototyping

### Use Cases

- Team-based research
- Content creation pipelines
- Multi-perspective analysis
- Role-playing simulations

---

## AutoGen (Microsoft)

| Property | Value |
|----------|-------|
| **GitHub** | [microsoft/autogen](https://github.com/microsoft/autogen) |
| **Stars** | ~35,000+ ⭐ |
| **License** | MIT |
| **Language** | Python |
| **Type** | Multi-Agent Conversation |

### Architecture

AutoGen uses conversational agents that collaborate:
- **Conversable Agents** - Agents that can send/receive messages
- **Group Chat** - Multi-agent conversations
- **Human Proxy** - Human-in-the-loop participation
- **Code Execution** - Safe sandboxed execution

### Key Features

- Natural conversation-based coordination
- Automatic reply and turn-taking
- Code generation and execution
- Research-oriented design
- Microsoft backing

---

## Semantic Kernel (Microsoft)

| Property | Value |
|----------|-------|
| **GitHub** | [microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel) |
| **Stars** | ~22,000+ ⭐ |
| **License** | MIT |
| **Language** | C# / Python |
| **Type** | Enterprise SDK |

### Architecture

Semantic Kernel uses a skill-based approach:
- **Skills** - Reusable AI capabilities
- **Planners** - Automatic orchestration
- **Connectors** - External service integration
- **Memories** - Context and embeddings

### Key Features

- Enterprise-ready SDK
- Native Azure integration
- Multi-language support (C#, Python)
- Pluggable architecture
- Production-grade reliability

---

## Haystack

| Property | Value |
|----------|-------|
| **GitHub** | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) |
| **Stars** | ~18,000+ ⭐ |
| **License** | Apache 2.0 |
| **Language** | Python |
| **Type** | NLP Framework with Agents |

### Architecture

Haystack focuses on NLP pipelines:
- **Pipelines** - Document processing workflows
- **Nodes** - Processing components
- **Agents** - Conversational AI
- **Document Stores** - Vector and keyword search

### Key Features

- Production-ready NLP pipelines
- Strong RAG capabilities
- Elasticsearch/OpenSearch integration
- Industry-proven (used by major companies)

---

## OpenAI Swarm

| Property | Value |
|----------|-------|
| **GitHub** | [openai/swarm](https://github.com/openai/swarm) |
| **Stars** | ~15,000+ ⭐ |
| **License** | MIT |
| **Language** | Python |
| **Type** | Experimental Multi-Agent |

### Architecture

Swarm uses lightweight agent orchestration:
- **Agents** - Simple agent definitions
- **Handoffs** - Agent-to-agent transfers
- **Routines** - Reusable workflows

### Key Features

- Lightweight and simple
- Official OpenAI experimental project
- Easy to understand
- Minimal abstraction

---

# Agentic Coders

## Claude Code

| Property | Value |
|----------|-------|
| **Provider** | Anthropic |
| **Model** | Claude 4 |
| **Platform** | CLI |
| **Price** | Free (with Claude subscription) |
| **Open Source** | ❌ |

### Key Features

- Official Anthropic CLI tool
- Full codebase understanding
- Multi-file editing
- Git integration
- Test-driven development

---

## Cursor

| Property | Value |
|----------|-------|
| **Provider** | Cursor Inc |
| **Model** | GPT-4 / Claude |
| **Platform** | VS Code Fork |
| **Price** | $20/month Pro |
| **Open Source** | ❌ |

### Key Features

- AI-native IDE (VS Code fork)
- Context-aware completions
- Chat with codebase
- Multi-file refactoring
- @codebase command for full context

---

## GitHub Copilot

| Property | Value |
|----------|-------|
| **Provider** | GitHub/Microsoft |
| **Model** | GPT-4 |
| **Platform** | All major IDEs |
| **Price** | $10-19/month |
| **Open Source** | ❌ |

### Key Features

- Industry standard
- Ubiquitous IDE support
- Code completion and chat
- Pull request summaries
- Enterprise features

---

## Continue.dev

| Property | Value |
|----------|-------|
| **GitHub** | [continuedev/continue](https://github.com/continuedev/continue) |
| **Stars** | ~20,000+ ⭐ |
| **License** | Apache 2.0 |
| **Platform** | VS Code / JetBrains |
| **Price** | Free |
| **Open Source** | ✅ |

### Key Features

- Fully open source
- Multi-model support (OpenAI, Anthropic, local)
- Customizable
- VS Code and JetBrains support
- Self-hosted option

---

## Aider

| Property | Value |
|----------|-------|
| **GitHub** | [Aider-AI/aider](https://github.com/Aider-AI/aider) |
| **Stars** | ~25,000+ ⭐ |
| **License** | Apache 2.0 |
| **Platform** | CLI |
| **Price** | Free (API costs) |
| **Open Source** | ✅ |

### Key Features

- Terminal-based
- Git-aware edits
- Multiple model support
- Voice coding support
- Architect mode for planning

---

## OpenHands (formerly OpenDevin)

| Property | Value |
|----------|-------|
| **GitHub** | [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands) |
| **Stars** | ~40,000+ ⭐ |
| **License** | MIT |
| **Platform** | Web / Docker |
| **Price** | Free |
| **Open Source** | ✅ |

### Key Features

- Autonomous software engineer
- Browser and terminal access
- Full development environment
- Task-based execution
- Research-oriented

---

# Autonomous Agents

## AutoGPT

| Property | Value |
|----------|-------|
| **GitHub** | [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) |
| **Stars** | ~170,000+ ⭐ |
| **License** | MIT |
| **Status** | Active |

### Key Features

- First autonomous agent (started the trend)
- Task decomposition and planning
- Memory and context management
- Web browsing capability
- File operations

---

## BabyAGI

| Property | Value |
|----------|-------|
| **GitHub** | [yoheinakajima/babyagi](https://github.com/yoheinakajima/babyagi) |
| **Stars** | ~30,000+ ⭐ |
| **License** | MIT |
| **Status** | Active |

### Key Features

- Task-driven autonomous agent
- Simple and lightweight
- Task prioritization
- Memory-based execution

---

## SuperAGI

| Property | Value |
|----------|-------|
| **GitHub** | [TransformerOptimus/SuperAGI](https://github.com/TransformerOptimus/SuperAGI) |
| **Stars** | ~15,000+ ⭐ |
| **License** | MIT |
| **Status** | Active |

### Key Features

- Agent infrastructure platform
- GUI for agent management
- Tool marketplace
- Cloud deployment

---

## GPT Engineer

| Property | Value |
|----------|-------|
| **GitHub** | [gpt-engineer-org/gpt-engineer](https://github.com/gpt-engineer-org/gpt-engineer) |
| **Stars** | ~52,000+ ⭐ |
| **License** | MIT |
| **Status** | Active |

### Key Features

- Full codebase generation
- Interactive specification
- Incremental refinement
- Multiple project templates

---

# Comparison Tables

## Framework Comparison

| Framework | Stars | Multi-Agent | Complexity | Best For |
|-----------|-------|-------------|------------|----------|
| LangChain | 100K+ | Via LangGraph | Medium | General purpose |
| LangGraph | 8K+ | ✅ Native | High | Complex workflows |
| CrewAI | 25K+ | ✅ Native | Low | Team orchestration |
| AutoGen | 35K+ | ✅ Native | Medium | Research |
| Semantic Kernel | 22K+ | ✅ | Medium | Enterprise |
| Haystack | 18K+ | ✅ | Medium | NLP/RAG |
| OpenAI Swarm | 15K+ | ✅ Native | Low | Experimentation |

## Agentic Coder Comparison

| Tool | Model | Open Source | Price | Best For |
|------|-------|-------------|-------|----------|
| Claude Code | Claude 4 | ❌ | Free | Claude users |
| Cursor | GPT-4/Claude | ❌ | $20/mo | AI-native IDE |
| GitHub Copilot | GPT-4 | ❌ | $10-19/mo | Enterprise |
| Continue.dev | Multi | ✅ | Free | Open source |
| Aider | GPT-4/Claude | ✅ | API costs | CLI users |
| OpenHands | Multi | ✅ | Free | Autonomous |

## Autonomous Agent Comparison

| Agent | Stars | Purpose | Status |
|-------|-------|---------|--------|
| AutoGPT | 170K+ | Task automation | Active |
| BabyAGI | 30K+ | Task management | Active |
| GPT Engineer | 52K+ | Code generation | Active |
| SuperAGI | 15K+ | Agent platform | Active |

---

## Sources

1. Official GitHub repositories (accessed March 2026)
2. Official documentation websites
3. Product pages and pricing information

---

*Last Updated: March 10, 2026*
*Generated using Deep Research Pro + UI/UX Pro Max design system*
