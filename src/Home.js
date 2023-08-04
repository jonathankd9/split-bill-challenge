import {SafeAreaView, Text, View, Button} from "react-native";
import {styles} from "./globalstyles";

const Home = ({navigation}) => {
	return (
		<SafeAreaView style={styles.safearea}>
			<View style={styles.container}>
				<Text style={styles.text}>Home</Text>
				<Button
					title="Go to SplitBill Screen"
					onPress={() => navigation.navigate("SplitBill", {name: "Jane"})}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Home;
