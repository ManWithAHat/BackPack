import { app,GoogleAuth } from './firebase';
import { StyleSheet, Text, View } from 'react-native';

export default function Main() {

    {GoogleAuth()}

  return (
    <View style={styles.container}>
        <Text>Hi</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
