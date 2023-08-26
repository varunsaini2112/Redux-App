import { StyleSheet } from "react-native";
import { Padding, colors, fontSizes } from "../../config/appStyles";

const styles = StyleSheet.create({
	mainContainer: {
		marginBottom: 16
	},
	labelContainer: {
		marginHorizontal: Padding.s
	},
	labelText: {
		fontSize: fontSizes.m,
		color: colors.text_heading
	},
	textInputField: {
		borderWidth: 0.4,
		padding: 16,
		borderRadius: 16
	},
	errorContainer: {
		alignItems: "flex-end"
	},
	errorText: {
		fontSize: fontSizes.s,
		color: "red"
	}
});

export default styles;
