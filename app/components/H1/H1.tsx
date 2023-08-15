import { PropsWithChildren } from "react";
import { Text } from "react-native";

import { fontStyles } from "../../config/appStyles";

const H1 = ({ children }: PropsWithChildren<{}>) => {
	return <Text style={fontStyles.h1}>{children}</Text>;
};

export default H1;
