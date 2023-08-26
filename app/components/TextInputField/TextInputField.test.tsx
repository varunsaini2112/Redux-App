import { Pressable, Text } from "react-native";
import { useForm } from "react-hook-form";
import { act, fireEvent, render, screen } from "@testing-library/react-native";

import TextInputField from "./TextInputField";

const TestComponent = ({
	onPressSubmit = () => {}
}: {
	onPressSubmit?: () => void;
}) => {
	const { handleSubmit, control } = useForm<{ ExampleField: string }>();

	return (
		<>
			<TextInputField
				label="Example Field"
				name="ExampleField"
				placeholder="exampleFieldPlaceholder"
				control={control}
				rules={{ required: { value: true, message: "Field is required" } }}
			/>
			<Pressable onPress={handleSubmit(onPressSubmit)}>
				<Text>Press me</Text>
			</Pressable>
		</>
	);
};

describe("TextInputField Component", () => {
	it("should match snapshots", () => {
		const snapshot = render(<TestComponent />);

		expect(snapshot).toMatchSnapshot();
	});

	it("should render label correctly", () => {
		render(<TestComponent />);

		expect(screen.getByText("Example Field")).toBeOnTheScreen();
	});

	it("should render required error text on initially form submit", async () => {
		render(<TestComponent />);

		await act(async () => {
			fireEvent.press(screen.getByText("Press me"));
		});

		expect(screen.getByText("Field is required")).toBeOnTheScreen();
	});

	it("should call onPress on submit form with correctly field entries", async () => {
		const onPressMock = jest.fn();
		render(<TestComponent onPressSubmit={onPressMock} />);

		fireEvent.changeText(
			screen.getByPlaceholderText("exampleFieldPlaceholder"),
			"randomEntry"
		);

		await act(async () => {
			fireEvent.press(screen.getByText("Press me"));
		});

		expect(onPressMock).toHaveBeenCalled();
	});
});
