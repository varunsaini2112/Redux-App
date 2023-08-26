import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { act, fireEvent, screen } from "@testing-library/react-native";

import { RootStackParamList } from "../../types";
import { renderWithProviders } from "../../utils/test-utils";
import SignUp from "./SignUp";
import { Alert } from "react-native";

const navigation = {
	navigate: () => {},
	goBack: () => {}
} as StackNavigationProp<RootStackParamList, "SignUp">;
const route = {} as RouteProp<RootStackParamList, "SignUp">;

describe("SignUp", () => {
	it("should match snapshots", () => {
		const snapshot = renderWithProviders(
			<SignUp navigation={navigation} route={route} />
		);

		expect(snapshot).toMatchSnapshot();
	});

	it("should render SignUp Heading", () => {
		renderWithProviders(<SignUp navigation={navigation} route={route} />);

		expect(screen.getByText("SignUp Here")).toBeOnTheScreen();
	});

	it("should show field errors on submit button", async () => {
		renderWithProviders(<SignUp navigation={navigation} route={route} />);

		await act(async () => {
			fireEvent.press(screen.getByText("Submit"));
		});

		expect(screen.getByText("Full Name is required")).toBeOnTheScreen();
		expect(screen.getByText("Email is required")).toBeOnTheScreen();
		expect(screen.getByText("Password is required")).toBeOnTheScreen();
	});

	it("should show short name length error on invalid entry", async () => {
		renderWithProviders(<SignUp navigation={navigation} route={route} />);

		fireEvent.changeText(
			screen.getByPlaceholderText("Enter your full name"),
			"T"
		);
		await act(async () => {
			fireEvent.press(screen.getByText("Submit"));
		});

		expect(screen.getByText("Name is too short")).toBeOnTheScreen();
	});

	it("should show long name length error on invalid entry", async () => {
		renderWithProviders(<SignUp navigation={navigation} route={route} />);

		fireEvent.changeText(
			screen.getByPlaceholderText("Enter your full name"),
			"T".repeat(41)
		);
		await act(async () => {
			fireEvent.press(screen.getByText("Submit"));
		});

		expect(screen.getByText("Name is too long")).toBeOnTheScreen();
	});

	it("should show name pattern error on invalid entry", async () => {
		renderWithProviders(<SignUp navigation={navigation} route={route} />);

		fireEvent.changeText(
			screen.getByPlaceholderText("Enter your full name"),
			"Test@Name"
		);
		await act(async () => {
			fireEvent.press(screen.getByText("Submit"));
		});

		expect(screen.getByText("Please enter a valid name")).toBeOnTheScreen();
	});

	it("should submit successfully and show alert on valid field entry", async () => {
		renderWithProviders(<SignUp navigation={navigation} route={route} />);

		const alertSpy = jest.spyOn(Alert, "alert");

		fireEvent.changeText(
			screen.getByPlaceholderText("Enter your full name"),
			"Test Name"
		);
		fireEvent.changeText(
			screen.getByPlaceholderText("someone@here.xyz"),
			"testField@example.com"
		);
		fireEvent.changeText(
			screen.getByPlaceholderText("Password here..."),
			"Test@12345"
		);
		await act(async () => {
			fireEvent.press(screen.getByText("Submit"));
		});

		screen.debug();
		expect(alertSpy).toHaveBeenCalled();
	});

	it("should render already have account text", () => {
		renderWithProviders(<SignUp navigation={navigation} route={route} />);

		expect(screen.getByText("Already have an account?")).toBeOnTheScreen();
	});

	it("should navigate to signup on press already have account text", () => {
		const navigationSpy = jest.spyOn(navigation, "goBack");
		renderWithProviders(<SignUp navigation={navigation} route={route} />);

		fireEvent.press(screen.getByText("Already have an account?"));

		expect(navigationSpy).toHaveBeenCalled();
	});
});
