import React from 'react';
import {
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 300,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
});

const Player = ({ player, onClick }) => {
	const {
		name,
		image,
		fppg,
	} = player;

	return (
		<TouchableOpacity
			onPress={onClick}
			style={styles.container}
		>
			<Image source={{ uri: image }} style={{ width: 150, height: 210 }} />
			<Text>{name}</Text>
			<Text>{fppg}</Text>
		</TouchableOpacity>
	);
};

export default Player;
