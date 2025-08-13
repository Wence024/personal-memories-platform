# Git Commit Guidelines

Follow these steps every time you commit a new change to ensure consistent and meaningful commit messages.

---

## Steps to Follow

### 1. Stage the Commit

- **Atomic Commits:** Ensure that your commit contains a unified change. Each commit should represent a single, logical unit of work. Avoid mixing unrelated changes.

### 2. Run the Following Commands

Before committing, run the following commands to prepare and review your changes:

```bash
npm run format
git update-index --again
cls
git log --oneline -5
git diff --staged
```

- `npm run format`: Format the code to maintain consistency (if prettier is setup).
- `git update-index --again`: Make sure staged changes are updated with the prettier formatting.
- `cls`: Clear the terminal screen.
- `git log --oneline -5`: Review the last 5 commits for context.
- `git diff --staged`: Check the changes you've staged for commit.

### 2. Copy the Result to ChatGPT (Incognito Mode)

- After reviewing your changes, copy the results (log and diff output) into ChatGPT's incognito mode.

### 3. Copy the Following Prompt and Paste It at the Top of Your Message

```txt
Do a conventional commit + gitmoji for this. Syntax is `type(scope): :gitmoji: shortMessage\n\nlongMessage`. Use consistent present verb tense. Avoid redundancy in subject line. Warn me if the current diff necessitates large and vague commit messages in the subject line. Use more descriptive scope for small changes.
```

This ensures ChatGPT follows our commit guidelines for consistent messaging.

### 4. Copy the Generated Git Commit Message

- After ChatGPT generates the commit message, **copy** the commit message (including `type`, `scope`, `gitmoji`, and the short and long message).

### 5. Paste the Commit Message into VSCode Git Commit Box

- Open your VSCode, paste the commit message into the Git commit box, and finalize the commit.

---

### Additional Notes

- **Commit Atomicity:** Each commit should be focused on a single purpose. Avoid large, unrelated changes in one commit.
- **Commit Message Structure:** Stick to the following structure for consistency:

  - `type(scope): :gitmoji: shortMessage`
  - **Type**: Describes the change type (e.g., `docs`, `feat`, `fix`, `chore`).
  - **Scope**: Optional but helps specify which part of the project was changed (e.g., `readme`, `api`, `ui`).
  - **Gitmoji**: Use an emoji to categorize the commit (e.g., 📚 for docs, ✨ for features).
  - **Short Message**: A concise description of the change.
  - **Long Message**: Provide further details if necessary.

By following this process, you ensure your commit messages are consistent, clear, and aligned with project standards.
