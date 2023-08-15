import { render, screen } from "@testing-library/react-native";
import H2 from "./H2";

describe("H2 Component", () => {
	it("should match snapshots", () => {
		const snapshot = render(<H2>Test Heading</H2>);

		expect(snapshot).toMatchSnapshot();
	});

	it("should render heading text", () => {
		render(<H2>Test Heading</H2>);

		expect(screen.getByText("Test Heading")).toBeOnTheScreen();
	});
});
