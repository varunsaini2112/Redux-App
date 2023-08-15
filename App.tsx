import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";

import AppNavigator from "./app/config/AppNavigator";
import { setupStore } from "./app/redux/store";

const App = () => {
	return (
		<Provider store={setupStore()}>
			<AppNavigator />
		</Provider>
	);
};

export default App;
