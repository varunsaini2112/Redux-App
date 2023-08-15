import { fireEvent, screen } from "@testing-library/react-native";

import AppNavigator from "../AppNavigator";
import { renderWithProviders } from "../../utils/test-utils";

describe("AppNavigator", () => {
	it("should render Home screen correctly", () => {
		renderWithProviders(<AppNavigator />);

		expect(screen.getByText("Projects")).toBeOnTheScreen();
	});

	it("should render Count screen on press count button", async () => {
		renderWithProviders(<AppNavigator />);

		fireEvent.press(screen.getByText("Count Program"));

		const count = await screen.findByText("0");

		expect(count).toBeOnTheScreen();
	});
});
