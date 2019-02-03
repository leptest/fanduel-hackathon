import React, { Component } from 'react';
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

class Scores extends Component {
	render() {
		const { scores } = this.props;

		return (
			<View style={styles.container}>
				{scores.map((score, index) => {
					return (
						<ScoreDot key={index} score={score} />
					);
				})}
			</View>
		);
	}
}

export default Scores;
