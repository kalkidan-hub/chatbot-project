# Chatbot Project

A React-based chatbot application that lets you have a conversation with an AI-powered bot. Messages are persisted across sessions using `localStorage`, so your chat history is preserved even after refreshing the page.

## Features

- 💬 Send messages and receive AI-powered responses
- 🕐 Timestamps displayed on every message
- 💾 Chat history persisted in `localStorage`
- ⏳ Loading indicator while waiting for a response
- 🔄 Reset button to clear the conversation
- ⌨️ Send messages by pressing **Enter**; clear input with **Escape**
- 🤖 Distinct avatars for the user and the bot

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 6](https://vitejs.dev/) | Build tool & dev server |
| [supersimpledev](https://www.npmjs.com/package/supersimpledev) | Chatbot response API |
| [dayjs](https://dayjs.js.org/) | Timestamp formatting |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/kalkidan-hub/chatbot-project.git
cd chatbot-project

# Install dependencies
npm install
```

### Running the App

```bash
# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot-module replacement |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project Structure

```
chatbot-project/
├── src/
│   ├── components/
│   │   ├── ChatInput.jsx      # Text input, Send & Reset buttons
│   │   ├── ChatInput.css
│   │   ├── ChatMessage.jsx    # Single message bubble with avatar & timestamp
│   │   ├── ChatMessage.css
│   │   ├── ChatMessages.jsx   # Scrollable messages list with loading indicator
│   │   └── ChatMessages.css
│   ├── assets/                # Images (robot.png, user.png)
│   ├── App.jsx                # Root component; manages chat state
│   ├── App.css
│   ├── main.jsx               # React entry point
│   └── index.css
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Usage

1. Type a message in the input field at the bottom of the screen.
2. Press **Send** or hit **Enter** to submit your message.
3. Wait for the bot to respond (a loading indicator is shown while the response is being fetched).
4. To start a new conversation, click the **Reset** button — this also clears the saved history from `localStorage`.
