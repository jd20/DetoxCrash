import Instabug from 'instabug-reactnative';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const App = () => {
  useEffect(() => {
    Instabug.startWithToken('b10b733b3d60910d6862fd686ae8586c', [
      Instabug.invocationEvent.screenshot,
    ]);
    Instabug.setWelcomeMessageMode(Instabug.welcomeMessageMode.disabled);
  }, []);
  const [identified, setIdentified] = useState(false);

  return (
    <View style={styles.body}>
      <Text style={styles.header}>DetoxCrash</Text>
      <Button
        testID="identifyUser"
        title="Identify User"
        onPress={async () => {
          Instabug.identifyUser('johndoe@gmail.com', 'John Doe');
          setIdentified(true);
        }}
      />
      {identified ? (
        <Text style={styles.label} testID="identified">
          Identified
        </Text>
      ) : (
        <Text style={styles.label}>Not Identified</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 32,
  },
  header: {
    fontSize: 36,
    fontWeight: '600',
    color: 'black',
    marginBottom: 32,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginTop: 32,
  },
});

export default App;
