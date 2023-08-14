import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Messages from "./Messages";

describe("Messages Component", () => {
  const mock = new MockAdapter(axios);

  const mockMessages = [
    { id: 1, text: "Message 1" },
    { id: 2, text: "Message 2" },
    // Add more mock messages as needed
  ];

  beforeEach(() => {
    mock.reset();
  });

  it("fetches messages and displays them in a table", async () => {
    mock.onGet("http://localhost:5000/messages").reply(200, mockMessages);

    render(<Messages />);

    // Wait for messages to load
    await waitFor(() => {
      const message1 = screen.getByText("Message 1");
      const message2 = screen.getByText("Message 2");

      expect(message1).toBeInTheDocument();
      expect(message2).toBeInTheDocument();
    });
  });

  it("deletes a message when delete button is clicked", async () => {
    mock.onGet("http://localhost:5000/messages").reply(200, mockMessages);
    mock.onDelete("http://localhost:5000/messages/1").reply(204);

    render(<Messages />);

    // Wait for messages to load
    await waitFor(() => {
      const deleteButton = screen.getByTestId("delete-button-1");
      fireEvent.click(deleteButton);
    });

    // Wait for messages to update after deletion
    await waitFor(() => {
      expect(screen.queryByText("Message 1")).toBeNull();
    });
  });
});
