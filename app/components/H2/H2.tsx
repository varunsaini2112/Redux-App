import { PropsWithChildren } from "react";
import { Text } from "react-native";

import { fontStyles } from "../../config/appStyles";

const H2: React.FC<PropsWithChildren<{}>> = ({ children }) => {
	return <Text style={fontStyles.h2}>{children}</Text>;
};

export default H2;
