import { Text, TextInput, TextInputProps, View } from "react-native";
import {
	FieldPath,
	FieldValues,
	PathValue,
	UseControllerProps,
	useController
} from "react-hook-form";
import { Padding, colors, fontSizes } from "../../config/appStyles";

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
		<View style={{ borderWidth: 0, marginBottom: 16 }}>
			{label && (
				<View style={{ marginHorizontal: Padding.s }}>
					<Text style={{ fontSize: fontSizes.m, color: colors.text_heading }}>
						{label}
					</Text>
				</View>
			)}
			<TextInput
				ref={ref}
				value={value}
				onBlur={onBlur}
				onChangeText={onChange}
				style={{ borderWidth: 0.4, padding: 16, borderRadius: 16 }}
				{...textInputProps}
			/>
			<View style={{ alignItems: "flex-end" }}>
				<Text style={{ fontSize: fontSizes.s, color: "red" }}>
					{(errors[name]?.message as string) ?? ""}
				</Text>
			</View>
		</View>
	);
};

export default TextInputField;
