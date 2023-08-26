import { fireEvent, render, screen } from "@testing-library/react-native";
import { Text } from "react-native";

import Button from "./Button";

describe("Button Component", () => {
	it("should match snapshots", () => {
		const snapshot = render(
			<Button>
				<Text>Press me</Text>
			</Button>
		);

		expect(snapshot).toMatchSnapshot();
	});

	it("should render text", () => {
		render(
			<Button>
				<Text>Press me</Text>
			</Button>
		);

		expect(screen.getByText("Press me")).toBeOnTheScreen();
	});

	it("onPress should work on button tap", () => {
		const onPressMock = jest.fn();
		render(
			<Button onPress={onPressMock}>
				<Text>Press me</Text>
			</Button>
		);

		fireEvent.press(screen.getByText("Press me"));

		expect(onPressMock).toHaveBeenCalled();
	});

	it("button style should change onPressed state", () => {
		render(
			<Button testOnly_pressed={true} testID="pressable-button">
				<Text>Press me</Text>
			</Button>
		);

		const button = screen.getByTestId("pressable-button");

		expect(button).toHaveStyle({ opacity: 0.6 });
	});
});
