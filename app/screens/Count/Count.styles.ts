import { StyleSheet } from "react-native";
import { colors, padding } from "../../config";

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	button: {
		padding: padding.xl,
		backgroundColor: colors.primary,
		margin: padding.xl,
		borderRadius: padding.xl,
		alignItems: "center"
	}
});

export default styles;
