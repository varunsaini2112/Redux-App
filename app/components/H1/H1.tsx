import { ReactNode } from "react";
import { Text } from "react-native";

import { fontStyles } from "../../config";

const H1 = ({ children }: { children: ReactNode }) => {
	return <Text style={fontStyles.h1}>{children}</Text>;
};

export default H1;
