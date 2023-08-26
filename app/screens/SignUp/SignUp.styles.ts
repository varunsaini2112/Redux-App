import { StyleSheet } from "react-native";
import { Padding } from "../../config/appStyles";

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: Padding.l
	},
	headingContainer: {
		marginVertical: Padding.xxl,
		paddingVertical: Padding.xxl,
		alignItems: "center"
	},
	centerTextContainer: {
		alignItems: "center",
		marginVertical: Padding.l
	},
	centerText: {
		textDecorationLine: "underline"
	}
});

export default styles;
