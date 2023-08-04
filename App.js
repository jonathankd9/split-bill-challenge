import React, {useState} from "react";
// import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Home from "./src/Home";
import SplitBill from "./src/SplitBill";
import Statistics from "./src/Statistics";

const getFonts = () => {
	return Font.loadAsync({
		"mulish-light": require("./assets/fonts/Mulish-Light.ttf"),
		"mulish-medium": require("./assets/fonts/Mulish-Medium.ttf"),
		"mulish-bold": require("./assets/fonts/Mulish-Bold.ttf"),
		"mulish-semibold": require("./assets/fonts/Mulish-SemiBold.ttf"),
		"mulish-black": require("./assets/fonts/Mulish-Black.ttf"),
	});
};

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if (!fontsLoaded) {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => setFontsLoaded(true)}
				onError={console.warn}
			/>
		);
	}
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{title: "Welcome"}}
				/>
				<Stack.Screen
					name="SplitBill"
					component={SplitBill}
					options={{title: "Split Bill"}}
				/>
				<Stack.Screen
					name="Statistics"
					component={Statistics}
					options={{title: "Statistics"}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center",
	},
});
