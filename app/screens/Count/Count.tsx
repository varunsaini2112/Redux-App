import { Pressable, Text, View } from "react-native";
import styles from "./Count.styles";
import { useState } from "react";
import { H1 } from "../../components";

const Count = () => {
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
