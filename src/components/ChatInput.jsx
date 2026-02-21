import { useState } from "react";
import { Chatbot } from "supersimpledev";
import dayjs from "dayjs";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages, setIsLoading }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    const time = dayjs().valueOf();
    if (inputText != "") {
      const userMessage = {
        message: inputText,
        sender: "user",
        time: dayjs(time).format("h:mm A"),
        id: crypto.randomUUID(),
      };
      setChatMessages([...chatMessages, userMessage]);
      chatMessages.push(userMessage);

      setInputText("");
      setIsLoading(true);

      const response = await Chatbot.getResponseAsync(inputText);
      setIsLoading(false);
      setChatMessages([
        ...chatMessages,
        {
          message: response,
          sender: "robot",
          time: dayjs().format("h:mm A"),
          id: crypto.randomUUID(),
        },
      ]);
      setInputText("");
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Type a message..."
        className="chat-input"
        onChange={saveInputText}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            sendMessage();
          }
          if (event.key === "Escape") {
            setInputText("");
          }
        }}
        value={inputText}
      />
      <div className="chat-input-actions">
        <button onClick={sendMessage} className="send-button">
          Send
        </button>
        <button onClick={() => {
            chatMessages.length = 0;
            setChatMessages([]);
            localStorage.removeItem("chatMessages");
        }} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
}
