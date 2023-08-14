import { StyleSheet } from "react-native";

const colors = {
	primary: "#D80064",
	text_heading: "#132631",
	text_content: "#999999"
};

const fontSizes = {
	xs: 10,
	s: 12,
	m: 14,
	l: 16,
	xl: 20,
	xxl: 24
};

const padding = {
	xs: 4,
	s: 8,
	m: 12,
	l: 16,
	xl: 20,
	xxl: 24
};

const fontStyles = StyleSheet.create({
	h1: {
		fontSize: fontSizes.xxl,
		fontWeight: "600",
		color: colors.text_heading
	},
	h2: {
		fontSize: fontSizes.xl,
		fontWeight: "600",
		color: colors.text_heading
	},
	content: {
		fontSize: fontSizes.m,
		fontWeight: "500",
		color: colors.text_content
	}
});

export { fontStyles, fontSizes, padding, colors };
