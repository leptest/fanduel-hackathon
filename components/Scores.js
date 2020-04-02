import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';
import ScoreDot from './ScoreDot';

const styles = StyleSheet.create({
	container: {
		width: 300,
		backgroundColor: '#ddd',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		flexDirection: 'row',
	},
});

const Scores = ({ scores }) => (
	<View style={styles.container}>
		{scores.map((score) => (
			<ScoreDot key={score} score={score} />
		))}
	</View>
);

export default Scores;
