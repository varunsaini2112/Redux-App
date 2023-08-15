import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import styles from "./Count.styles";
import { H1 } from "../../components";
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
				<Pressable onPress={() => dispatch(increment())} style={styles.button}>
					<Text>Increment</Text>
				</Pressable>
				<Pressable onPress={() => dispatch(decrement())} style={styles.button}>
					<Text>Decrement</Text>
				</Pressable>
				<Pressable onPress={() => dispatch(reset())} style={styles.button}>
					<Text>Reset</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default Count;
