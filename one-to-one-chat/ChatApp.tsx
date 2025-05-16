import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

interface Message {
  sender: string;
  content: string;
}

export default function ChatApp() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loggedIn) {
      const newSocket = io("http://localhost:3001");
      setSocket(newSocket);

      newSocket.on("connect", () => {
        setConnected(true);
        newSocket.emit("join", username);
      });

      newSocket.on("disconnect", () => {
        setConnected(false);
      });

      newSocket.on("message", (msg: Message) => {
        setMessages((prev) => [...prev, msg]);
      });

      return () => {
        newSocket.disconnect();
      };
    }
  }, [loggedIn]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() && socket) {
      const msg = { sender: username, content: input };
      socket.emit("message", msg);
      setMessages((prev) => [...prev, msg]);
      setInput("");
    }
  };

  const handleLogin = () => {
    if (username.trim()) setLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      {!loggedIn ? (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4">Enter your name to join</h2>
          <input
            className="w-full p-2 rounded mb-4 text-black"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="bg-blue-500 w-full py-2 rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Join Chat
          </button>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-2xl flex flex-col h-[80vh]">
          <h2 className="text-xl font-bold mb-2">Chat Room</h2>
          <div className="text-sm mb-2">
            Status:{" "}
            <span className={connected ? "text-green-400" : "text-red-400"}>
              {connected ? "Connected" : "Disconnected"}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto bg-gray-700 p-4 rounded mb-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 ${
                  msg.sender === username ? "text-right" : "text-left"
                }`}
              >
                <div className="text-sm">
                  <strong>{msg.sender}</strong>: {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex space-x-2">
            <input
              className="flex-1 p-2 rounded text-black"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message"
            />
            <button
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
