import { Text, View } from "react-native";

import styles from "./TextInputField.styles";

const Label = ({ label }: { label: string }) => {
	return (
		<View style={styles.labelContainer}>
			<Text style={styles.labelText}>{label}</Text>
		</View>
	);
};

export default Label;
