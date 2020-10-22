import React from 'react';
import { Text, View, Button } from 'react-native';
import { log } from 'react-native-reanimated';

const SignIn = ({navigation}) => {
	console.log('ana', navigation);
	return (
		<View style={styles.container}>
			<Text>SignIn screen</Text>
			<Button
				title={"Sign in"}
				onPress = {() => {
					navigation.navigate('BottomStackNavigator')
				}}
			/>
		</View>
	)
}
const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
}

export default SignIn;