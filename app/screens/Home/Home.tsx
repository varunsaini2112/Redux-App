import { FC } from "react";
import { View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import styles from "./Home.styles";
import { H2, Link } from "../../components";
import { LinkType, RootStackParamList } from "../../types";

const links: LinkType[] = [
	{ value: "Count Program", href: "Count" },
	{ value: "To-Do List", href: "ToDo" }
];

const Home: FC<StackScreenProps<RootStackParamList, "Home">> = (props) => {
	const { navigation } = props;

	const onPressLink = (screenName: keyof RootStackParamList) => {
		navigation.navigate(screenName);
	};

	return (
		<View style={styles.mainContainer}>
			<View style={styles.textContainer}>
				<H2>Projects</H2>
			</View>
			<View style={styles.textContainer}>
				{links.map((link) => {
					const onPress = () => onPressLink(link.href);
					return <Link {...link} key={link.value} onPress={onPress} />;
				})}
			</View>
		</View>
	);
};

export default Home;
