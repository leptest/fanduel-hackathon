import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';

const styles = StyleSheet.create({
	dot: {
		height: 30,
		width: 30,
		borderRadius: 50,
	},
});

const ScoreDot = ({ score }) => {
	return (
		<View
			style={[
				styles.dot,
				{ backgroundColor: score ? 'green' : 'red' },
			]}
		/>
	);
};

export default ScoreDot;
