import { fireEvent, render, screen } from "@testing-library/react-native";
import AppNavigator from "../AppNavigator";

describe("AppNavigator", () => {
	it("should render Home screen correctly", () => {
		render(<AppNavigator />);

		expect(screen.getByText("Projects")).toBeOnTheScreen();
	});

	it("should render Count screen on press count button", async () => {
		render(<AppNavigator />);

		fireEvent.press(screen.getByText("Count Program"));

		const count = await screen.findByText("0");

		expect(count).toBeOnTheScreen();
	});
});
