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

const Padding = {
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

const baseStyles = StyleSheet.create({
	button: {
		marginVertical: Padding.s,
		padding: Padding.l,
		backgroundColor: colors.primary,
		borderRadius: Padding.l,
		alignItems: "center"
	},
	buttonText: {
		fontSize: fontSizes.xl,
		color: "#FFFFFF"
	}
});

export { fontStyles, fontSizes, Padding, colors, baseStyles };
