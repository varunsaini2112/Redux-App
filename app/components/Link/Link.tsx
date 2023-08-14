import { Pressable, Text } from "react-native";

import { fontSizes, fontStyles } from "../../config";
import { LinkProps } from "../../types";

const Link = ({ value, href, onPress }: LinkProps) => {
	return (
		<Pressable onPress={() => onPress(href)}>
			<Text style={[fontStyles.content, { fontSize: fontSizes.xl }]}>
				{value}
			</Text>
		</Pressable>
	);
};

export default Link;
