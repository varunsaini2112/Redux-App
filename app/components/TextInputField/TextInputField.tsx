import { TextInput, TextInputProps, View } from "react-native";
import {
	FieldPath,
	FieldValues,
	PathValue,
	UseControllerProps,
	useController
} from "react-hook-form";

import Label from "./Label";
import ErrorText from "./ErrorText";
import styles from "./TextInputField.styles";

type TextInputFieldProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
	Omit<TextInputProps, "onChange" | "onBlur" | "value" | "ref"> & {
		label?: string;
	};

const TextInputField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	props: TextInputFieldProps<TFieldValues, TName>
) => {
	const { label, name, control, rules, ...textInputProps } = props;
	const {
		field,
		formState: { errors }
	} = useController({
		control,
		name,
		defaultValue: "" as PathValue<TFieldValues, TName>,
		rules
	});

	const { value, onChange, onBlur, ref } = field;

	return (
		<View style={styles.mainContainer}>
			{label && <Label label={label} />}
			<TextInput
				ref={ref}
				value={value}
				onBlur={onBlur}
				onChangeText={onChange}
				style={styles.textInputField}
				{...textInputProps}
			/>
			<ErrorText errorText={errors[name]?.message as string} />
		</View>
	);
};

export default TextInputField;
