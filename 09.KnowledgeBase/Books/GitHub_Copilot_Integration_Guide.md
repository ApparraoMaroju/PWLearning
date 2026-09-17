# Connecting GitHub Copilot to Command Code

> **What this guide covers:** using your **GitHub Copilot subscription** as a model provider **inside the Command Code CLI**. This is the officially supported integration and lets you run Copilot-backed models (`gpt-5-codex`, etc.) from the Command Code terminal.
>
> **What it does NOT cover (important):** Command Code does **not** run *inside* the GitHub Copilot VS Code panel. Command Code is a terminal agent that connects to your editor (VS Code, Cursor, Windsurf) through its **own** extension, not through GitHub Copilot's. For an IDE experience, you launch `cmd` in the editor's integrated terminal (see [Section 7](#7-optional-run-command-code-inside-vs-code-instead)).
>
> **Prerequisite:** An **active GitHub Copilot subscription** (Copilot Pro, Business, or Enterprise). You do **not** need a GitHub API key or a Command Code API key for this flow.

---

## Contents

1. [How the integration works](#1-how-the-integration-works)
2. [Check your current setup](#2-check-your-current-setup)
3. [Option A — Connect interactively with `/connect` (recommended)](#3-option-a--connect-interactively-with-connect-recommended)
4. [Option B — Connect from the command line with `cmd login copilot`](#4-option-b--connect-from-the-command-line-with-cmd-login-copilot)
5. [Verify and switch models](#5-verify-and-switch-models)
6. [Troubleshooting](#6-troubleshooting)
7. [Optional: run Command Code inside VS Code instead](#7-optional-run-command-code-inside-vs-code-instead)

---

## 1. How the integration works

GitHub Copilot is one of the **BYOK (Bring Your Own Key) providers** built into Command Code.

```
┌─────────────────────┐        ┌──────────────────────┐
│  Command Code CLI   │  ───►  │  GitHub Copilot API  │
│  (your terminal)    │  auth  │  (your subscription) │
└─────────────────────┘        └──────────────────────┘
        ▲
        │ device sign-in (browser)
        │
   You complete login at github.com
```

Key facts:

- **Requests go straight** from your machine to GitHub's Copilot endpoint using your Copilot subscription — they do not route through Command Code's servers.
- **Sign-in is a device flow**: the CLI shows a code, you open a browser, sign in to GitHub, and authorize. No API key to copy/paste.
- Copilot's current model list is discovered automatically and appears under **GitHub Copilot** in the `/model` menu.
- You can switch back to Command Code models (or other providers) anytime via `/model`.
- Your keys/credentials are stored locally in `~/.commandcode/auth.json`.

> If you don't have a Copilot subscription, the alternative is to use a **Command Code API key** via `/connect` → **Command Code** (the default provider). The steps in this guide use Copilot's own sign-in, so your Command Code API key is **not required** for this path.

---

## 2. Check your current setup

**Step 2.1 — Confirm Command Code is installed**

Open a terminal (PowerShell, cmd, or your IDE's integrated terminal) and run:

```bash
cmd --version
```

**Expected result (screenshot description):** output like `x.y.z` (version number). If you get `command not found` / `'cmd' is not recognized`, install it first:

```bash
npm install -g command-code
```

**Step 2.2 — Check your auth status**

```bash
cmd status
```

**Expected result (screenshot description):** a status panel showing which provider(s) you're authenticated with. If you have never logged in, it will prompt you to log in to Command Code first — that is fine, do it, then continue. You'll be able to add Copilot alongside it.

> Your Command Code login and your GitHub Copilot login are **separate**. This guide keeps your existing Command Code account and **adds** Copilot as an extra provider.

---

## 3. Option A — Connect interactively with `/connect` (recommended)

**Step 3.1 — Start Command Code**

In your terminal, run:

```bash
cmd
```

**Screenshot description:** the interactive Command Code session starts with an input box at the bottom.

**Step 3.2 — Open the provider menu**

Type the slash command and press Enter:

```
/connect
```

**Screenshot description:** the **Connect to AI providers** menu opens. It lists providers with a green `✓` next to the ones already connected, plus an entry for **Command Code**, and options like **(BYOK) Add your own provider**.

**Step 3.3 — Select GitHub Copilot**

Use the arrow keys (`↑`/`↓`) to scroll to **GitHub Copilot** and press `Enter`. (You can also start typing `copilot` to filter the list.)

**Screenshot description:** a new window appears titled something like **Connect GitHub Copilot**, prompting you to sign in to GitHub.

**Step 3.4 — Start the device sign-in**

Press `Enter` (or the key shown, e.g. `s` for "sign in") on the sign-in prompt.

**Screenshot description:** the CLI displays:
- A **one-time code**, e.g. `ABCD-1234`
- A **URL**, e.g. `https://github.com/login/device`

**Step 3.5 — Complete sign-in in your browser**

1. Open the URL shown (`https://github.com/login/device`).
2. Enter the **one-time code** exactly as shown.
3. Click **Continue** / **Authorize** when GitHub asks to grant access.

**Screenshot description (browser):** the GitHub device-activation page with a code entry field, then an **Authorize GitHub Copilot** confirmation button.

> **Windows note:** if a Chrome "Local Network Access" prompt appears during sign-in, click **Allow** — Command Code runs a temporary local server for the OAuth callback, and this is expected and safe.

**Step 3.6 — Return to the terminal**

**Screenshot description:** the `/connect` menu now shows a green `✓` next to **GitHub Copilot** and its model count (e.g. "GitHub Copilot ✓ 5 models").

Press `Esc` (or select **Done**) to close the menu.

---

## 4. Option B — Connect from the command line with `cmd login copilot`

Prefer typing over menus? The same flow runs from a plain command:

**Step 4.1 — Run the login**

```bash
cmd login copilot
```

**Screenshot description:** same as Step 3.4 — the terminal prints a **one-time code** and a **URL** (`https://github.com/login/device`).

**Step 4.2 — Authorize in the browser**

1. Open `https://github.com/login/device`.
2. Enter the code.
3. Click **Authorize**.

**Step 4.3 — Confirm**

**Screenshot description:** the terminal prints a success message like *"GitHub Copilot connected"* (or shows the connected provider in the status).

Verify anytime with:

```bash
cmd status
```

---

## 5. Verify and switch models

**Step 5.1 — Open the model picker**

Inside the `cmd` session, type:

```
/model
```

**Screenshot description:** the model menu lists providers in sections — you'll see **Command Code** models and a **GitHub Copilot** section with Copilot's models (e.g. `gpt-5-codex`, depending on what your subscription exposes).

**Step 5.2 — Select a Copilot model**

Use `↑`/`↓` to highlight a model under the **GitHub Copilot** heading and press `Enter`.

**Screenshot description:** the input area now shows your chosen model name, e.g. `github copilot/gpt-5-codex`. Every prompt from here routes to Copilot until you switch again.

**Step 5.3 — Do a quick test**

Type something small and press Enter:

```
Say hello in one short sentence
```

**Expected result:** Copilot responds. If you see model/route info in the UI, it should reflect the Copilot provider.

**Step 5.4 — Switch back anytime**

Reopen `/model` and pick any model under **Command Code** (or another provider). Nothing about your Copilot connection is lost.

---

## 6. Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Copilot doesn't appear in `/connect` | Older Command Code version | `npm update -g command-code`, then restart `cmd` |
| Sign-in fails / "unauthorized" | Expired or stale session | Run `cmd logout` then `cmd login copilot` again. If it persists, check your Copilot subscription is active at github.com/settings/copilot |
| No Copilot section in `/model` | Provider connected but no models imported, or connection failed | Reopen `/connect`, highlight **GitHub Copilot**, and use the `u` (update models) action on its card |
| "Provider needs a key" indicator | The device sign-in didn't complete | Repeat Option A/B from the start and finish the browser authorization |
| Chrome Local Network Access prompt | Normal OAuth behavior (Windows) | Click **Allow** |
| Still stuck | — | Run `/connect` → select GitHub Copilot and press `h` for the in-menu help, or see official docs below |

---

## 7. Optional: run Command Code inside VS Code instead

If your real goal was a **VS Code GUI experience** (which is what the "GitHub Copilot UI" often means), the supported setup is to run Command Code in **VS Code's integrated terminal** — not inside the Copilot extension:

**Step 7.1 — Open VS Code's integrated terminal** (`Ctrl` + `` ` ``).

**Step 7.2 — Launch Command Code from there:**

```bash
cmd
```

**What happens (screenshot description):** on first run inside an IDE terminal, Command Code **auto-installs its own extension** and connects. A green `IDE ✓` flash appears near the input, and the bottom-left of the input shows your open file, e.g. `In auth.ts`.

**Step 7.3 — Use file context and diagnostics**

- Select lines in the editor and prompt Command Code — the input shows `15 lines selected`.
- The agent can read your editor's lint/type errors via its diagnostics tool.

**Step 7.4 — If it doesn't connect**, type `/ide` inside the session to check the connection and install the extension.

> Supported editors: **Visual Studio Code, Cursor, Windsurf** (including their Remote/SSH variants). GitHub Copilot's own panel is not one of them — that's why the *Copilot subscription → Command Code* flow in Sections 3–5 is the way to combine the two tools.

---

## Sources

- Command Code Docs — BYOK / GitHub Copilot provider: https://commandcode.ai/docs/byok
- Command Code Docs — IDE Integration: https://commandcode.ai/docs/ide-integration
- Command Code Docs — Interactive Mode & slash commands: https://commandcode.ai/docs/interactive-mode
