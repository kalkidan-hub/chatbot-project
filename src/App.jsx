import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem("chatMessages")) || []);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="chatbot-container">
      <ChatMessages chatMessages={chatMessages} isLoading={isLoading} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}
export default App;
