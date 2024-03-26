import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";

const socket = io('<http://localhost:3000>');

function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');
    const [user, setUser] = useState(null);
    // Send a message
    const sendMessage = () => {
        socket.emit('message', messageText);
        setMessageText('');
    };

    // Receive messages
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        });
    }, []);

    const joinChatRoom = (userDetails) => {
        setUser(userDetails);
        socket.emit('join', userDetails);
    };
    const leaveChatRoom = () => {
        socket.emit('leave', user);
        setUser(null);
    };
    return (
        <div className="chat-room">
      // The chat room components will go here
        </div>
    );
}

export default ChatRoom;