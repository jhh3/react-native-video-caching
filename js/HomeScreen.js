import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
	Button,
} from 'react-native'

class HomeScreen extends React.Component {
  render() {
    return (
			<View style={styles.container}>
			  <View style={styles.navButton}>
          <Text>Video with no caching</Text>
          <Button
            title="No caching"
            onPress={() => this.props.navigation.navigate('NoCacheVideoScreen')}
          />
			  </View>

			  <View style={styles.navButton}>
          <Text>Video with caching</Text>
          <Button
            title="With caching"
            onPress={() => this.props.navigation.navigate('CacheVideoScreen')}
          />
			  </View>

			  <View style={styles.navButton}>
          <Text>Video with caching and loading indicator</Text>
          <Button
            title="With caching/loading"
            onPress={() => this.props.navigation.navigate('CacheAndLoadingVideoScreen')}
          />
			  </View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
  navButton: {
    paddingTop: 10,
    paddingBottom: 10,
  }
});

export default HomeScreen;
