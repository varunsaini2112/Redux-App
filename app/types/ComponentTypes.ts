import { RootStackParamList } from ".";

type LinkType = {
	value: string;
	href: keyof RootStackParamList;
};

type LinkProps = {
	value: string;
	onPress: () => void;
};

export type { LinkType, LinkProps };
