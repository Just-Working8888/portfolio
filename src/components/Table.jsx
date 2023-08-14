import React, { useState } from "react";
import { Table } from "antd";


const MessageTable = ({ data, onDelete }) => {
  const [selectedMessage, setSelectedMessage] = useState(null);
selectedMessage
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
      render: (id) => <button onClick={() => onDelete(id)}>Удалить</button>,
    },
  ];

  return (
    <>{selectedMessage ? "ddd" : 'dsds'}
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="id" // Assuming "id" is the unique identifier for each message
      />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus
      odit minima laboriosam eligendi non, qui fugit deserunt totam sed esse
      blanditiis dolore incidunt veniam natus animi sunt fuga harum. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Debitis assumenda vero esse
      aliquam ratione eius. Quia sed similique deleniti corporis libero unde!
      Facilis sequi eos est itaque voluptates incidunt facere.
    </>
  );
};

export default MessageTable;
