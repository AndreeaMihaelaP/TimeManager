import React from 'react';
import { Text, View } from 'react-native';

const Profile = () => {
	return (
		<View style={styles.container}>
			<Text>Profile screen</Text>
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

export default Profile;