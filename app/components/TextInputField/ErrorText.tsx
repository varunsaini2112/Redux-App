import { Text, View } from "react-native";

import styles from "./TextInputField.styles";

const ErrorText = ({ errorText = "" }: { errorText?: string }) => {
	return (
		<View style={styles.errorContainer}>
			<Text style={styles.errorText}>{errorText}</Text>
		</View>
	);
};

export default ErrorText;
