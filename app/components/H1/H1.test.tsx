import { render, screen } from "@testing-library/react-native";
import H1 from "./H1";

describe("H1 Component", () => {
	it("should match snapshots", () => {
		const snapshot = render(<H1>Test Heading</H1>);

		expect(snapshot).toMatchSnapshot();
	});

	it("should render heading text", () => {
		render(<H1>Test Heading</H1>);

		expect(screen.getByText("Test Heading")).toBeOnTheScreen();
	});
});
