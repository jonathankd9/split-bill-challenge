import {StyleSheet, Text, View, Button} from "react-native";

const SplitBill = ({navigation}) => {
	return (
		<View>
			<Text>SplitBill</Text>
			<Button
				title="Go to Statistics Screen"
				onPress={() => navigation.navigate("Statistics", {name: "Jane"})}
			/>
		</View>
	);
};

export default SplitBill;
