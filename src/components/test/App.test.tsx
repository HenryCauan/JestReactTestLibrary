import { render, screen, fireEvent } from "@testing-library/react";
// render => renderiza o componente
// screen => busca no componente uma informacao especifica
// fireEvent => executa uma acao por exemplo um button
import App from "../../App";
// Exemplo de tipagem em TypeScript para testes

const sum = (x: number, y: number): number => {
  return x + y;
};

describe("App Component", () => {
  it("should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });

  it("should render App message Hello World!", () => {
    render(<App />);

    screen.getByText("Hello World!");
  });

  it("should button change mensagem", () => {
    render(<App />);
    screen.getByText("This Message is to Henry Cauan");

    const button = screen.getByText("Click to change");
    fireEvent.click(button);

    screen.getByText("The Messagem to Alterada"); // retorna Error se nao encontrar o elemento (failed)

    const oldText = screen.queryByText("The Messagem to Alterada"); // Se encontrar ele retorna o elemento, se nao, ele apenas retorna Null e nao Error
    expect(oldText).not.toBeNull(); // not = indica que aquela informacao nao seja a do Method chamado 
  });
});
