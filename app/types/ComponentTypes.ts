import { RootStackParamList } from ".";

type LinkType = {
	value: string;
	href: keyof RootStackParamList;
};

type LinkProps = LinkType & {
	onPress: (screenName: keyof RootStackParamList) => void;
};

export type { LinkType, LinkProps };
