import { fireEvent, render, screen } from "@testing-library/react-native";

import Count from "./Count";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { RouteProp } from "@react-navigation/native";

const navigation = {
	navigate: () => {}
} as StackNavigationProp<RootStackParamList, "Count">;
const route = {} as RouteProp<RootStackParamList, "Count">;

describe("App", () => {
	it("should match snapshots", () => {
		const snapshot = render(<Count navigation={navigation} route={route} />);

		expect(snapshot).toMatchSnapshot();
	});

	it("Count renders 0 initially", () => {
		render(<Count navigation={navigation} route={route} />);

		expect(screen.getByText("0")).toBeOnTheScreen();
	});

	it("Count should increase on press increment button", () => {
		render(<Count navigation={navigation} route={route} />);

		const incrementButton = screen.getByText("Increment");
		fireEvent.press(incrementButton);

		expect(screen.getByText("1")).toBeOnTheScreen();
	});

	it("Count should decrease on press decrement button", () => {
		render(<Count navigation={navigation} route={route} />);

		const incrementButton = screen.getByText("Decrement");
		fireEvent.press(incrementButton);

		expect(screen.getByText("-1")).toBeOnTheScreen();
	});

	it("Count should increase on press increment button", () => {
		render(<Count navigation={navigation} route={route} />);

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
