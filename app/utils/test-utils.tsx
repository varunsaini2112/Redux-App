import React, { PropsWithChildren, ReactElement } from "react";
import { Provider } from "react-redux";
import { PreloadedState } from "@reduxjs/toolkit";
import { RenderOptions, render } from "@testing-library/react-native";

import { AppStore, RootState, setupStore } from "../redux/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

export function renderWithProviders(
	ui: ReactElement,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({ children }: PropsWithChildren<{}>): ReactElement {
		return <Provider store={store}>{children}</Provider>;
	}
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
