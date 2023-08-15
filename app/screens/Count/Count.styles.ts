import { StyleSheet } from "react-native";
import { Padding, colors } from "../../config/appStyles";

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	button: {
		padding: Padding.xl,
		backgroundColor: colors.primary,
		margin: Padding.xl,
		borderRadius: Padding.xl,
		alignItems: "center"
	}
});

export default styles;
