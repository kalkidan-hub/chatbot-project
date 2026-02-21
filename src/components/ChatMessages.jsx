import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

function useAutoScroll(dependencies) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
    if (dependencies && Array.isArray(dependencies) && dependencies[0]) {
        localStorage.setItem("chatMessages", JSON.stringify(dependencies[0]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return chatMessagesRef;
}

export function ChatMessages({ chatMessages, isLoading }) {
  const chatMessagesRef = useAutoScroll([chatMessages, isLoading]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={chatMessage.time}
            key={chatMessage.id}
          />
        );
      })}
      {isLoading && (
        <ChatMessage
          message={
            <span className="loading-spinner" aria-label="Loading"></span>
          }
          sender="robot"
        />
      )}
    </div>
  );
}
