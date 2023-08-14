import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Count, Home } from "../screens";
import { RootStackParamList } from "../types";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Count" component={Count} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
