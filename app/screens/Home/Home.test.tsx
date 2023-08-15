import { fireEvent, render, screen } from "@testing-library/react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import Home from "./Home";
import { RootStackParamList } from "../../types";

const navigation = {
	navigate: () => {}
} as StackNavigationProp<RootStackParamList, "Home">;
const route = {} as RouteProp<RootStackParamList, "Home">;

describe("Home", () => {
	it("should match snapshots", () => {
		const snapshot = render(<Home navigation={navigation} route={route} />);

		expect(snapshot).toMatchSnapshot();
	});

	it("should render projects links", () => {
		const spy = jest.spyOn(navigation, "navigate");
		render(<Home navigation={navigation} route={route} />);

		const toDoLink = screen.getByText("Count Program");
		fireEvent.press(toDoLink);

		expect(spy).toHaveBeenCalledWith("Count");
	});
});
