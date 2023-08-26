import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

import REGEX from "./REGEX";

type ValidationField<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<
	RegisterOptions<TFieldValues, TName>,
	"valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

type FormFields = "fullName" | "email" | "password";

const VALIDATIONS: Record<FormFields, ValidationField> = {
	fullName: {
		required: { value: true, message: "Full Name is required" },
		minLength: { value: 2, message: "Name is too short" },
		maxLength: { value: 40, message: "Name is too long" },
		pattern: {
			value: REGEX.NAME,
			message: "Please enter a valid name"
		}
	},
	email: {
		required: { value: true, message: "Email is required" },
		maxLength: { value: 256, message: "Email is too long" },
		pattern: {
			value: REGEX.EMAIL_REGEX,
			message: "Please enter a valid email address"
		}
	},
	password: {
		required: { value: true, message: "Password is required" },
		minLength: { value: 6, message: "Password is too short" },
		maxLength: { value: 50, message: "Password is too long" },
		pattern: {
			value: REGEX.PASSWORD_REGEX,
			message: "Please enter a valid password"
		}
	}
};

export default VALIDATIONS;
