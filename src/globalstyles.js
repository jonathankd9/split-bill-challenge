import React from "react";
import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
	safearea: {
		// paddingHorizontal: 10,
		// justifyContent: "center",
		flex: 1,
	},
	container: {
		paddingHorizontal: 10,
		justifyContent: "center",
		flex: 1,
	},
	img: {
		height: 110,
		alignItems: "center",
	},
	image: {
		flex: 1,
		resizeMode: "contain",
	},
	text: {
		fontSize: 18,
		color: "#444444",
		lineHeight: 25,
		fontFamily: "mulish-black",
	},
	bold: {
		fontSize: 18,
		color: "#444444",
		lineHeight: 25,
		textAlign: "left",
		marginBottom: 20,
		fontFamily: "satoshi-bold",
	},
	input: {
		marginTop: 15,
		marginBottom: 15,
		height: 40,
		borderBottomWidth: 1,
		fontSize: 16,
		fontFamily: "dmsans-regular",
	},
	button: {
		backgroundColor: "#1E1E1E",
		padding: 15,
		borderRadius: 8,
		marginTop: 20,
		marginBottom: 20,
	},
	buttontext: {
		fontSize: 16,
		color: "white",
		textAlign: "center",
		fontFamily: "dmsans-bold",
	},
	error: {
		color: "red",
	},
	loader: {
		marginTop: 20,
	},
});

export {styles};
