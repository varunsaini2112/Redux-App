import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

import REGEX from "./REGEX";

type ValidationField<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<
	RegisterOptions<TFieldValues, TName>,
	"valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

type FormFields = "email" | "password";

const VALIDATIONS: Record<FormFields, ValidationField> = {
	email: {
		required: { value: true, message: "Email is required" },
		maxLength: { value: 256, message: "Too Long" },
		pattern: {
			value: REGEX.EMAIL_REGEX,
			message: "Please enter a valid email address"
		}
	},
	password: {
		required: { value: true, message: "Password is required" },
		minLength: { value: 6, message: "Too Short" },
		maxLength: { value: 50, message: "Too Long" },
		pattern: {
			value: REGEX.PASSWORD_REGEX,
			message: "Please enter a valid password"
		}
	}
};

export default VALIDATIONS;
