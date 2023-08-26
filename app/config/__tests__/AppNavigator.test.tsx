import { fireEvent, screen } from "@testing-library/react-native";

import AppNavigator from "../AppNavigator";
import { renderWithProviders } from "../../utils/test-utils";

describe("AppNavigator", () => {
	it("should render Home screen correctly", () => {
		renderWithProviders(<AppNavigator />);

		expect(screen.getByText("Email")).toBeOnTheScreen();
		expect(screen.getByText("Password")).toBeOnTheScreen();
		expect(screen.getByText("Submit")).toBeOnTheScreen();
	});
});
