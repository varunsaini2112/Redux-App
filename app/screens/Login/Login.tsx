import { Alert, Pressable, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { SubmitHandler, useForm } from "react-hook-form";

import { RootStackParamList } from "../../types";
import styles from "./Login.styles";
import { Button, H1, TextInputField } from "../../components";
import { baseStyles } from "../../config/appStyles";
import { VALIDATIONS } from "../../constants";

type FormValues = {
	email: string;
	password: string;
};

const Login: React.FC<StackScreenProps<RootStackParamList, "Login">> = ({
	navigation
}) => {
	const { handleSubmit, control } = useForm<FormValues>();

	const onPressSubmit: SubmitHandler<FormValues> = (data) => {
		Alert.alert(JSON.stringify(data));
	};

	const navigateToSignUp = () => {
		navigation.navigate("SignUp");
	};

	return (
		<View style={styles.mainContainer}>
			<View style={styles.headingContainer}>
				<H1>Login</H1>
			</View>
			<View>
				<TextInputField
					name="email"
					label="Email"
					placeholder="someone@here.xyz"
					control={control}
					rules={VALIDATIONS.email}
				/>
				<TextInputField
					name="password"
					label="Password"
					placeholder="Password here..."
					control={control}
					rules={VALIDATIONS.password}
					secureTextEntry={true}
				/>
				<Button onPress={handleSubmit(onPressSubmit)}>
					<Text style={baseStyles.buttonText}>Submit</Text>
				</Button>
			</View>
			<Pressable onPress={navigateToSignUp} style={styles.centerTextContainer}>
				<Text style={styles.centerText}>Don't have an account?</Text>
			</Pressable>
		</View>
	);
};

export default Login;
