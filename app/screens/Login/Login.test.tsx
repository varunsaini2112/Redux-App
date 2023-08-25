import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert } from "react-native";

import { RootStackParamList } from "../../types";
import { renderWithProviders } from "../../utils/test-utils";
import Login from "./Login";
import { act, fireEvent, screen } from "@testing-library/react-native";

const navigation = {
	navigate: () => {}
} as StackNavigationProp<RootStackParamList, "Login">;
const route = {} as RouteProp<RootStackParamList, "Login">;

describe("Login", () => {
	it("should match snapshots", () => {
		const snapshot = renderWithProviders(
			<Login navigation={navigation} route={route} />
		);

		expect(snapshot).toMatchSnapshot();
	});

	it("should render Login Heading", () => {
		renderWithProviders(<Login navigation={navigation} route={route} />);

		expect(screen.getByText("Login")).toBeOnTheScreen();
	});

	it("should show field errors on submit button", async () => {
		renderWithProviders(<Login navigation={navigation} route={route} />);

		await act(async () => {
			fireEvent.press(screen.getByText("Submit"));
		});

		expect(screen.getByText("Email is required")).toBeOnTheScreen();
		expect(screen.getByText("Password is required")).toBeOnTheScreen();
	});

	it("should show email length error on too long entry", async () => {
		renderWithProviders(<Login navigation={navigation} route={route} />);

		const testEmailString = "a".repeat(257);

		fireEvent.changeText(
			screen.getByPlaceholderText("someone@here.xyz"),
			testEmailString
		);
		await act(async () => {
			fireEvent.press(screen.getByText("Submit"));
		});

		expect(screen.getByText("Email is too long")).toBeOnTheScreen();
	});

	it("should show email pattern error on invalid email entry", async () => {
		renderWithProviders(<Login navigation={navigation} route={route} />);

		fireEvent.changeText(
			screen.getByPlaceholderText("someone@here.xyz"),
			"testEmailString"
		);
		await act(async () => {
			fireEvent.press(screen.getByText("Submit"));
		});

		expect(
			screen.getByText("Please enter a valid email address")
		).toBeOnTheScreen();
	});

	it("should show password length error on too small entry", async () => {
		renderWithProviders(<Login navigation={navigation} route={route} />);

		fireEvent.changeText(
			screen.getByPlaceholderText("Password here..."),
			"pass"
		);
		await act(async () => {
			fireEvent.press(screen.getByText("Submit"));
		});

		expect(screen.getByText("Password is too short")).toBeOnTheScreen();
	});

	it("should show password length error on too long entry", async () => {
		renderWithProviders(<Login navigation={navigation} route={route} />);

		fireEvent.changeText(
			screen.getByPlaceholderText("Password here..."),
			"pass".repeat(15)
		);
		await act(async () => {
			fireEvent.press(screen.getByText("Submit"));
		});

		expect(screen.getByText("Password is too long")).toBeOnTheScreen();
	});

	it("should show password pattern error on invalid entry", async () => {
		renderWithProviders(<Login navigation={navigation} route={route} />);

		fireEvent.changeText(
			screen.getByPlaceholderText("Password here..."),
			"password"
		);
		await act(async () => {
			fireEvent.press(screen.getByText("Submit"));
		});

		expect(screen.getByText("Please enter a valid password")).toBeOnTheScreen();
	});

	it("should submit successfully and show alert on valid field entry", async () => {
		renderWithProviders(<Login navigation={navigation} route={route} />);

		const alertSpy = jest.spyOn(Alert, "alert");

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

		expect(alertSpy).toHaveBeenCalled();
	});
});
