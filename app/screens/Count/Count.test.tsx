import { describe, it, expect } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react-native";
import Count from "./Count";

describe("App", () => {
	it("renders correctly", () => {
		const snapshot = render(<Count />);

		expect(snapshot).toMatchSnapshot();
	});

	it("Count renders 0 initially", () => {
		render(<Count />);

		expect(screen.getByText("0")).toBeOnTheScreen();
	});

	it("Count should increase on press increment button", () => {
		render(<Count />);

		const incrementButton = screen.getByText("Increment");
		fireEvent.press(incrementButton);

		expect(screen.getByText("1")).toBeOnTheScreen();
	});

	it("Count should decrease on press decrement button", () => {
		render(<Count />);

		const incrementButton = screen.getByText("Decrement");
		fireEvent.press(incrementButton);

		expect(screen.getByText("-1")).toBeOnTheScreen();
	});

	it("Count should increase on press increment button", () => {
		render(<Count />);

		const incrementButton = screen.getByText("Increment");
		const resetButton = screen.getByText("Reset");
		fireEvent.press(incrementButton);
		fireEvent.press(incrementButton);
		fireEvent.press(incrementButton);

		expect(screen.getByText("3")).toBeOnTheScreen();

		fireEvent.press(resetButton);
		expect(screen.getByText("0")).toBeOnTheScreen();
	});
});
