import { ForwardRefExoticComponent, RefAttributes, forwardRef } from "react";
import {
	Pressable,
	PressableProps,
	StyleProp,
	View,
	ViewStyle
} from "react-native";
import { baseStyles } from "../../config/appStyles";

const Button: ForwardRefExoticComponent<PressableProps & RefAttributes<View>> =
	forwardRef((props, ref) => {
		const { style, ...rest } = props;

		return (
			<Pressable
				ref={ref}
				style={({ pressed }) => [
					{ opacity: pressed ? 0.6 : 1 },
					baseStyles.button,
					style as StyleProp<ViewStyle>
				]}
				{...rest}
			/>
		);
	});

export default Button;
