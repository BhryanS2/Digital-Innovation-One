import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app with a button, quote and a button", async () => {
	render(<App />);
	const button = screen.getByRole("button");
	const image = screen.getByRole("img");
	const quote = await screen.findByText("Quote to - Speaker");
	expect(button).toBeInTheDocument();
	expect(image).toBeInTheDocument();
	expect(quote).toBeInTheDocument();
});
