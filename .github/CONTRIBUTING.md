# 🤝 Contributing to Apex Profile Automation Framework

Contributions to this repository are governed by the **Apex Technical Authority Standard (December 2025)**. We seek collaborators who value architectural integrity, zero-defect execution, and future-proofing infrastructure.

## 1. Core Philosophy: Adopt the Apex Mindset

Before submitting any contribution, internalize the Prime Directive derived from the **AGENTS.md** manifest:

> **PRAGMATISM OVER PERFECTION, BUT PERFECTION IN PRAGMATISM.** Every contribution must enhance automation efficiency, adhere to **SOLID** principles (where applicable to configuration), and improve system resilience against future platform drift. We optimize for **Clarity, Velocity, and Maintainability**.

## 2. Prerequisites & Environment Setup

This project is a collection of configuration templates and automation logic. Ensure your local environment can execute the necessary DevOps tooling.

1.  **Forking:** Fork the repository: `https://github.com/chirag127/GitHub-Profile-Automation-Configuration-Framework-Templates`
2.  **Cloning:** Clone your fork locally.
3.  **Python Environment (For local execution/testing of workflow logic):** As this framework primarily defines YAML/Markdown/CSS standards, local execution focuses on validation tooling.
    bash
    # Assuming Python 3.10+ is available
    # Use uv for dependency management, as per Apex standards
    uv venv
    source .venv/bin/activate
    pip install ruff yamllint pytest
    

## 3. Workflow for Submitting Contributions

All contributions must follow a disciplined, traceable workflow:

### Step 1: Issue Identification or Proposal

*   **Bugs:** File a detailed **Bug Report** using the provided template in `.github/ISSUE_TEMPLATE/bug_report.md`.
*   **Features/Enhancements:** Open a new **Feature Proposal** outlining the desired state and architectural justification.

### Step 2: Branching Strategy

Create a feature branch based on `main`. Adopt the naming convention: `feat/<short-description>` or `fix/<issue-number-or-description>`.

bash
# Example for a new CI badge standard
git checkout -b feat/add-license-badge-shield


### Step 3: Development and Verification

Execute changes locally and verify them against the **Standard 11** compliance checks.

*   **Linting/Formatting:** All non-YAML/Markdown files must pass **Ruff** standards.
*   **Metadata Check:** Ensure `README.md`, `PROPOSED_README.md`, and `badges.yml` are perfectly synchronized using the mandated `flat-square` style and `chirag127` URL.
*   **Testing (Applicable to executable logic):** Any new workflow logic must have corresponding **Pytest** fixtures or local validation scripts demonstrating correctness.

### Step 4: Pull Request (PR) Submission

Submit your Pull Request targeting the `main` branch.

*   **Template:** Fill out the **Pull Request Template** (`.github/PULL_REQUEST_TEMPLATE.md`) completely. This ensures the Reviewer (or subsequent AI Agent) has immediate context.
*   **Self-Review Check:** Before submitting, confirm you have:
    1.  Updated the relevant documentation (`README.md`, `AGENTS.md` if core stack changed).
    2.  Verified all dynamic URLs point to `https://github.com/chirag127/GitHub-Profile-Automation-Configuration-Framework-Templates`.
    3.  Applied the **DRY (Don't Repeat Yourself)** principle rigorously to all configuration files.

## 4. Architectural & Style Guidelines

*   **Configuration as Code (CaC):** Treat all YAML, Markdown, and workflow files as code. They must be versioned, tested, and readable.
*   **Badge Integrity:** Adhere strictly to the **Dynamic URL & Badge Protocol**. The user MUST remain `chirag127` and the style `flat-square`.
*   **Security:** Review and comply with `.github/SECURITY.md` before introducing any secrets management changes or external dependencies.

## 5. Reporting Vulnerabilities

We take security seriously. If you discover a security vulnerability, **DO NOT** file a public issue. Please follow the process outlined in `.github/SECURITY.md` immediately for responsible disclosure.
