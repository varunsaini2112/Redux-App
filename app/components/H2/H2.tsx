import { ReactNode } from "react";
import { Text } from "react-native";

import { fontStyles } from "../../config/appStyles";

const H2 = ({ children }: { children: ReactNode }) => {
	return <Text style={fontStyles.h2}>{children}</Text>;
};

export default H2;
