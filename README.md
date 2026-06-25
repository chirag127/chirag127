# Hi, I'm Chirag Singhal 👋

**Software Engineering Specialist** at TCS, based in Bhubaneswar, India. ML enthusiast, agent-tooling hacker, and the solo engineer behind the [**oriz.in**](https://oriz.in) family of free public tools.

I ship products: web apps, public APIs, browser extensions, mobile apps, VS Code extensions, and AI / agent tooling. Pure-JS where it fits, Cloudflare at the edge where it deploys, MIT-licensed across the board. No signup walls, no ads inside the tools, no card-on-file required to use anything I publish.

### What I'm working on

- **The Oriz family.** A growing set of free, public, privacy-respecting web tools and reference APIs at `*.oriz.in`. Each one solves a problem I personally hit and couldn't find a clean free alternative for.
- **Agent tooling.** Reusable Claude Code skills, MCP servers, and notification plugins that make AI coding agents more useful end-to-end.
- **Browser + VS Code extensions.** Small, focused tools that take the friction out of common workflows — bookmarks, secrets, clickbait, rewriting.

📫 **[chirag127.in](https://chirag127.in)** · **[linkedin.com/in/chirag127](https://linkedin.com/in/chirag127)** · **[@singhal127](https://twitter.com/singhal127)**

---

## 🌐 The Oriz family — [oriz.in](https://oriz.in)

A family of free public tools at [@oriz-org](https://github.com/oriz-org). Astro 6 + React 19 + Tailwind v4 on the frontend, Cloudflare Pages + Workers at the edge, Firebase Spark where state is needed. Common design language across every property, shared component library, and a single OKF knowledge bundle that documents the architecture decisions.

The shape:
- **Apps** are static-rendered Astro with React islands where interactivity earns its keep.
- **APIs** are pure Cloudflare Workers — no Node servers, no cold starts, no card.
- **Books** are Markdown manuscripts built with an in-house Astro pipeline that compiles to web + EPUB + PDF.

### Web apps

| App | Live | What it does |
|---|---|---|
| **Oriz** | [me.oriz.in](https://me.oriz.in) | Personal site — who I am, what I ship, how to reach me |
| **Blog** | [blog.oriz.in](https://blog.oriz.in) | Long-form writing on engineering, finance, and books |
| **Journal** | [journal.oriz.in](https://journal.oriz.in) | Privacy-first PWA journal — Tiptap editor, mood + tags, calendar heatmap, optional E2EE |
| **NCERT** | [books.oriz.in](https://books.oriz.in) | Free NCERT textbook directory for the Indian K-12 curriculum |
| **Lore** | [book-lore.oriz.in](https://book-lore.oriz.in) | Structured book summaries — overview, content map, critical analysis |
| **Janaushdhi** | [janaushdhi.oriz.in](https://janaushdhi.oriz.in) | PMBJP generic medicine catalog — search, filter, locate the nearest Kendra |

### Public APIs

Free, no-auth, CORS-open. Deployed on Cloudflare Workers.

| Repo | What it does |
|---|---|
| [`oriz-org/freellmapi`](https://github.com/oriz-org/freellmapi) | OpenAI-compatible proxy that stacks the free tiers of 16 LLM providers behind one `/v1` endpoint. Smart routing + failover. |
| [`oriz-org/omniroute`](https://github.com/oriz-org/omniroute) | Unified AI gateway — one endpoint, 160+ providers, MCP / A2A bridges, automatic provider fallback. |
| [`oriz-org/oriz-mmi-tickertape-mmi-api`](https://github.com/oriz-org/oriz-mmi-tickertape-mmi-api) | India Market Mood Index API — daily sentiment readings, no scraping for downstream consumers. |

### Books

Source manuscripts for the Oriz book series — written in Markdown, built with a custom Astro-based pipeline.

- [`oriz-org/oriz-me-book`](https://github.com/oriz-org/oriz-me-book) — *Oriz Me*: 100-year personal-strategy book.
- [`oriz-org/oriz-janaushdhi-book`](https://github.com/oriz-org/oriz-janaushdhi-book) — companion book to the Janaushdhi medicine catalog.

### Browser extensions

| Repo | What it does |
|---|---|
| [`oriz-org/bookmark-mind-bs-ext`](https://github.com/oriz-org/bookmark-mind-bs-ext) | AI-driven bookmark organizer — Gemini / Groq categorize and tag automatically. Snapshot + undo, cross-browser. |
| [`oriz-org/dearrow-plus-bs-ext`](https://github.com/oriz-org/dearrow-plus-bs-ext) | DeArrow downstream — clickbait fighter, dual-title display, preference badge. |
| [`oriz-org/ai-rewrite-bs-ext`](https://github.com/oriz-org/ai-rewrite-bs-ext) | Right-click any input → rewrite with Gemini (Polite, Professional, Cheeky, …). |

### Developer tooling

- [`oriz-org/sops-lens-vsc-ext`](https://github.com/oriz-org/sops-lens-vsc-ext) — VS Code extension. Renders SOPS-encrypted values inline as CodeLens / hover / ghost-text. Decrypts in-memory; plaintext never touches disk.
- [`oriz-org/userscripts`](https://github.com/oriz-org/userscripts) — Tampermonkey / ScriptCat collection. Includes `serp-open-articles` (open SERP article hits in tabs) and `dearrow-show-original` (the userscript companion to DeArrow Plus).
- [`oriz-org/agent-skills`](https://github.com/oriz-org/agent-skills) — reusable skills for Claude Code and other agent harnesses. Symlinked into `~/.claude/skills/` and `~/.agents/skills/`.
- [`oriz-org/claude-notifications-cli`](https://github.com/oriz-org/claude-notifications-cli) — cross-platform smart notifications plugin for Claude Code. Six notification types, click-to-focus, one-line install, webhook support (ntfy / Slack / Telegram).

### Operating principles

A short list of the rules every Oriz repo follows. They keep the family coherent across a long tail of small projects.

- **Free at the point of use.** No signup walls in the app shell. No ads inside the tools. Donation links in the footer, never in the way.
- **No card on file.** Every backing service either has a permanent free tier I can stay inside, or I don't use it.
- **MIT-licensed.** Fork it, mirror it, run it yourself. The hosted version is a convenience, not a gate.
- **Privacy by default.** Where data lives client-side, it stays client-side. Where E2EE is feasible, it's optional and on by default.

---

## 🧩 Selected projects from [chirag127/*](https://github.com/chirag127)

The personal-namespace work — experiments, full-stack web apps, mobile apps, and AI tooling that live outside the Oriz family. A mix of polished products and idea-validation prototypes.

### AI / agent tooling

- [**odysseus**](https://github.com/chirag127/odysseus) — self-hosted AI workspace. Brings provider-agnostic chat, agent runs, and prompt libraries to a single local app.
- [**code-cringe-detector**](https://github.com/chirag127/code-cringe-detector) — lint for AI-written code smells (the tells that reveal a generation was machine-authored without a human pass). ⭐ 1
- [**CogniPilot**](https://github.com/chirag127/CogniPilot-AI-Desktop-Automation-Python-Engine) — LLM-driven desktop automation engine; mimics human computer interaction to chain real-world workflows.
- [**ClaudeBridge**](https://github.com/chirag127/ClaudeBridge-LLM-Interaction-Python-CLI-Tool) — high-performance Python CLI for resilient Claude interaction with structured output parsing and prompt orchestration.
- [**ddgs-mcp-server**](https://github.com/chirag127/ddgs-mcp-server) — DuckDuckGo MCP server for AI agents. Drop-in search backend for any agent harness that speaks MCP.
- [**prompts**](https://github.com/chirag127/prompts) — curated AI prompts for architects and DevOps. Battle-tested system prompts I reach for repeatedly.

### Browser extensions

- [**YouTube AI Navigator**](https://github.com/chirag127/YouTube-AI-Navigator-Browser-Extension) — privacy-first AI YouTube analysis. Gemini summaries, smart transcripts, SponsorBlock, comment analysis. Zero-config, runs entirely on the client. ⭐ 3
- [**CerebrasAI Browser Extension**](https://github.com/chirag127/CerebrasAI-Browser-Extension) — AI-powered productivity and personalized content generation. ⭐ 5
- [**TabGroupSaver**](https://github.com/chirag127/TabGroupSaver-Session-Manager-VSCode-Extension) — VS Code extension. Save, restore, and organize groups of open tabs as named sessions; auto-save and multiple storage scopes. ⭐ 2
- [**ChronoLens**](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Extension) — capture and browse your web history as an interactive visual timeline. Privacy-first. ⭐ 2

### Cross-platform mobile (React Native + Expo)

- [**SynthSum**](https://github.com/chirag127/SynthSum-AI-Video-Summarizer-Cross-Platform-App) — AI video summarizer (iOS / Android / Web). Text-to-speech with word highlighting, summary history, dark mode. (⭐ 1)
- [**SkillSwap**](https://github.com/chirag127/SkillSwap-Community-Barter-Network-React-Native-Mobile-App) — community barter network with time bank, verified reviews, Node / Express backend.
- [**ScanFlow**](https://github.com/chirag127/ScanFlow-CrossPlatform-QRCode-Manager-Mobile-App) — high-speed QR scanner + manager.

### Full-stack web

- [**ShopFlow**](https://github.com/chirag127/ShopFlow-Modern-Grocery-E-commerce-Platform) — grocery e-commerce in Java 17 / Spring Boot / React / PostgreSQL. JWT auth, dual customer + admin UIs, Dockerized. ⭐ 1
- [**OmniCampaign**](https://github.com/chirag127/OmniCampaign-Ads-Management-Web-Application) — enterprise ad-campaign management across major ad platforms from a single dashboard. ⭐ 3
- [**AdVantage**](https://github.com/chirag127/AdVantage-Campaign-Management-Multi-Platform-App) — unified SaaS for multi-channel ad campaigns with real-time analytics, lead tracking, and a cross-platform web + mobile dashboard. ⭐ 4
- [**WebDevRef**](https://github.com/chirag127/WebDevRef-Offline-HTML-CSS-JS-Documentation-Web-App) — offline HTML / CSS / JS docs PWA.

### Data + Python

- [**TaskFlow**](https://github.com/chirag127/TaskFlow-Asynchronous-Scheduling-Engine-Python-Services) — asynchronous scheduling engine for reliable task execution and micro-reminder distribution.
- [**PyNLP Toolkit**](https://github.com/chirag127/PyNLP-Toolkit-Jupyter-Notebooks) — Jupyter notebooks for state-of-the-art text analysis and modeling.
- [**StreamAudio**](https://github.com/chirag127/StreamAudio-YouTube-Audio-Extractor-Web-App) — yt-dlp Streamlit frontend for robust audio extraction.

---

## 🎯 How I work

- **Edit > write.** I prefer surgical changes to existing code over rewrites. Most repos here started small and stayed small on purpose.
- **One source of truth per concern.** OKF knowledge bundles, AGENTS.md files, and committed runbooks document architectural decisions inside the repo that owns them — not scattered across a wiki.
- **Read the README, then the diff.** Every project ships with a README that answers *why does this exist*, *how do I run it*, and *what's the smallest thing I can change* before getting into the code.
- **Conventional commits, signed.** Every commit is a complete thought. No "wip", no "fix stuff".
- **Donation-funded, not ad-funded.** Buy Me A Coffee and GitHub Sponsors keep the lights on; nothing else is required.

---

## 💻 Tech stack

**Daily drivers** &nbsp;&nbsp; ![Astro](https://img.shields.io/badge/-Astro-FF5D01?logo=astro&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) ![Cloudflare](https://img.shields.io/badge/-Cloudflare-F38020?logo=cloudflare&logoColor=white) ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white) ![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white)

**Also fluent** &nbsp;&nbsp; ![Java](https://img.shields.io/badge/-Java-007396?logo=java&logoColor=white) ![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?logo=springboot&logoColor=white) ![React Native](https://img.shields.io/badge/-React%20Native-61DAFB?logo=react&logoColor=black) ![Expo](https://img.shields.io/badge/-Expo-000020?logo=expo&logoColor=white) ![FastAPI](https://img.shields.io/badge/-FastAPI-009688?logo=fastapi&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white) ![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white)

**Infrastructure** &nbsp;&nbsp; Cloudflare Pages + Workers + KV + D1 · Firebase Spark (Auth, Firestore, Storage) · GitHub Actions · sops + age for env management · MIT throughout

**AI / Agents** &nbsp;&nbsp; Claude Code + Claude Agent SDK · MCP servers (mine + community) · LangChain · RAG · Gemini API · LLM benchmarking

---

## 📊 GitHub stats

[![Stats](https://github-readme-stats.vercel.app/api?username=chirag127&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true)](https://github.com/chirag127)
[![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=chirag127&layout=compact&theme=tokyonight&hide_border=true)](https://github.com/chirag127)

---

## 🤝 Looking to collaborate

- **Open-source AI / agent tooling** — MCP servers, agent skills, eval harnesses, anything that makes Claude / GPT / Gemini agents more useful end-to-end.
- **Cloudflare-edge architecture** — anything that runs at the edge. I have strong opinions about Workers, Pages, KV, D1, and the right boundary between static and dynamic.
- **India-data APIs** — if you publish a free dataset India needs, I'll happily consume it and build a free public reader on top.
- **Hire me?** — open to roles that ship products and trust engineers. [chirag127.in](https://chirag127.in) · [LinkedIn](https://linkedin.com/in/chirag127)

If you're building something in this space and want to compare notes, my DMs are open on every channel listed at the top.

---

<sub>Everything I publish is MIT. This profile lives at [github.com/chirag127/chirag127](https://github.com/chirag127/chirag127).</sub>
