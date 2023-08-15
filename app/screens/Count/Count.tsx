import { FC, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import styles from "./Count.styles";
import { H1 } from "../../components";
import { RootStackParamList } from "../../types";

const Count: FC<StackScreenProps<RootStackParamList, "Count">> = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount((count) => count + 1);
	const decrement = () => setCount((count) => count - 1);
	const reset = () => setCount(0);

	return (
		<View style={styles.mainContainer}>
			<H1>{count}</H1>
			<View>
				<Pressable onPress={increment} style={styles.button}>
					<Text>Increment</Text>
				</Pressable>
				<Pressable onPress={decrement} style={styles.button}>
					<Text>Decrement</Text>
				</Pressable>
				<Pressable onPress={reset} style={styles.button}>
					<Text>Reset</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default Count;
