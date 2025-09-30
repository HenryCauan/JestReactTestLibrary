import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

describe("Button Component", () => {
  // it("should render with red if disabled for true", () => {
  //   render(<Button disabled={true} >Click me</Button>);

  //   const button = screen.getByRole("button", { name: "Click me" });
  //   expect(button).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
  // });

  it("should call OnClick on click", () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Click me
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Click me' });
    fireEvent.click(button);

    // expect(onClick).toHaveBeenCalled(); => expectativa e que essa funcao tenha sido chamada ao ser clicada com fireEvent
    // tambem podemos esperar uma funcao com parametro especifico por exemplo onClick(10);
    expect(onClick).toHaveBeenCalledWith(10);
  });
});
