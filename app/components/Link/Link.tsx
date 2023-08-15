import { Pressable, Text } from "react-native";

import { LinkProps } from "../../types";
import { fontSizes, fontStyles } from "../../config/appStyles";

const Link = ({ value, onPress }: LinkProps) => {
	return (
		<Pressable onPress={onPress}>
			<Text style={[fontStyles.content, { fontSize: fontSizes.xl }]}>
				{value}
			</Text>
		</Pressable>
	);
};

export default Link;
