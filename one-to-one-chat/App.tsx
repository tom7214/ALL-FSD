import { useState, useEffect, useRef, FormEvent } from 'react';
import './App.css';
import { io, Socket } from 'socket.io-client';

interface ChatMessage {
  user: string;
  text: string;
}

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:5000');
    socketRef.current.on('message', (msg: ChatMessage) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() && socketRef.current) {
      const msgData: ChatMessage = { user: username, text: message };
      socketRef.current.emit('message', msgData);
      setMessage('');
    }
  };

  return (
    <div className="chat-app">
      <h1>Chat Application</h1>
      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default App;
