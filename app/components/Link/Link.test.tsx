import { fireEvent, render, screen } from "@testing-library/react-native";
import Link from "./Link";

const mockOnPress = jest.fn();

describe("Link Component", () => {
	it("should match snapshots", () => {
		const snapshot = render(<Link value="Dummy link" onPress={mockOnPress} />);

		expect(snapshot).toMatchSnapshot();
	});

	it("onPress should work correctly", () => {
		render(<Link value="Dummy link" onPress={mockOnPress} />);

		fireEvent.press(screen.getByText("Dummy link"));

		expect(mockOnPress).toHaveBeenCalled();
	});
});
