import { Alert, Pressable, Text, View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { StackScreenProps } from "@react-navigation/stack";

import { RootStackParamList } from "../../types";
import styles from "./SignUp.styles";
import { Button, H1, TextInputField } from "../../components";
import { baseStyles } from "../../config/appStyles";
import { VALIDATIONS } from "../../constants";

type FormValues = {
	fullName: string;
	email: string;
	password: string;
};

const SignUp: React.FC<StackScreenProps<RootStackParamList, "SignUp">> = ({
	navigation
}) => {
	const { handleSubmit, control } = useForm<FormValues>();

	const onPressSubmit: SubmitHandler<FormValues> = (data) => {
		Alert.alert(JSON.stringify(data));
	};

	return (
		<View style={styles.mainContainer}>
			<View style={styles.headingContainer}>
				<H1>SignUp Here</H1>
			</View>
			<View>
				<TextInputField
					name="fullName"
					label="Full Name"
					placeholder="Enter your full name"
					control={control}
					rules={VALIDATIONS.fullName}
				/>
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
			<Pressable onPress={navigation.goBack} style={styles.centerTextContainer}>
				<Text style={styles.centerText}>Already have an account?</Text>
			</Pressable>
		</View>
	);
};

export default SignUp;
