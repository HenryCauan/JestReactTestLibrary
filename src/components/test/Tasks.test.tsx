import { findByText, fireEvent, render, screen } from "@testing-library/react";
import { setupWorker, rest } from "msw";
import Tasks from "../Tasks";

describe("Tasks Component", () => {
  const worker = setupWorker(
    rest.get(
      "https://jsonplaceholder.typicode.com/todos",
      async (res, req, ctx) => {
        return res(
          ctx.json([
            {
              userId: 1,
              id: 1,
              title: "delectus aut autem",
              completed: false,
            },
          ])
        );
      }
    )
  );
  beforeAll(() => {
    worker.start();
  });

  it("should fetch and show tasks on button click", async () => {
    render(<Tasks />);
    const button = screen.getByText(/get tasks from api/i);

    fireEvent.click(button);

    await screen.findByText('delectus aut autem');
  });
});
