/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {EffectCallback, PropsWithChildren} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect((): ReturnType<EffectCallback> => {
    async function fetchData() {
      try {
        __DEV__ && console.log('try fetchData start');
        const startDate = new Date();

        fetch(
            'https://catfact.ninja/fact',
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
            .then(response => response.json())
            .then(json => {
              const endDate = new Date();
              __DEV__ && console.log('test json: ',json)

              Alert.alert('Response back','Got Response OK', [
                {
                  text: `Time: ${
                    (endDate.getTime() - startDate.getTime()) / 1000
                  }`,
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => {}},
              ]);
            })
            .catch(() => {
              Alert.alert('Error back', 'error', [
                {text: 'OK', onPress: () => {}},
              ]);
            });
      } catch (error) {
        // error fetching data at start  [Error: Error: Sign in unavailable]
        Alert.alert('Error back', 'error', [
          {text: 'OK', onPress: () => {}},
        ]);
      }
    }

    fetchData().catch(() => {
      // error fetching data at start  [Error: TypeError: Cannot read property 'kind' of undefined
      Alert.alert('Error back', 'error', [
        {text: 'OK', onPress: () => {}},
      ]);
    });
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
