import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/image.png";
import "./ChatMessage.css";

export function ChatMessage(props) {
  // const message = props.message;
  // const sender = props.sender;

  const { message, sender, time } = props;
  // const { sender } = props;

  return (
    <div
      className={
        sender === "user"
          ? "chat-message-container-user"
          : "chat-message-container-robot"
      }
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-body">
        <div className="chat-message-contents">{message}</div>
        <div className="chat-message-time">{time}</div>
      </div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}
