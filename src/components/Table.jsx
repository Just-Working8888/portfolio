import React, { useState } from "react";
import { Table } from "antd";
import axios from "axios";

const MessageTable = ({ data, onDelete }) => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      ellipsis: true,
      render: (text, record) => (
        <span
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => setSelectedMessage(text)}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "id", // Assume you have an "id" field in your data for each message
      key: "actions",
      render: (id) => (
        <button onClick={() => onDelete(id)}>Удалить</button>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="id" // Assuming "id" is the unique identifier for each message
      />
    </>
  );
};

export default MessageTable;
