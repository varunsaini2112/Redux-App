import { FC } from "react";
import { Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import styles from "./Count.styles";
import { Button, H1 } from "../../components";
import { RootStackParamList } from "../../types";
import {
	decrement,
	increment,
	reset
} from "../../redux/sliceReducers/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";

const Count: FC<StackScreenProps<RootStackParamList, "Count">> = () => {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<View style={styles.mainContainer}>
			<H1>{count}</H1>
			<View>
				<Button onPress={() => dispatch(increment())}>
					<Text>Increment</Text>
				</Button>
				<Button onPress={() => dispatch(decrement())}>
					<Text>Decrement</Text>
				</Button>
				<Button onPress={() => dispatch(reset())}>
					<Text>Reset</Text>
				</Button>
			</View>
		</View>
	);
};

export default Count;
