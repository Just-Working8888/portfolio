import React, { useState, useEffect } from "react";
import axios from "axios";
import MessageTable from "../components/Table";

const Messeges = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/messages");
      setMessages(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/messages/${id}`);
      fetchMessages(); 
      // Обновляем список сообщений после удаления
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div>
      <MessageTable data={messages} onDelete={handleDeleteMessage} />
    </div>
  );
};

export default Messeges;
