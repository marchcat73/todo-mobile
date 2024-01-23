import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';
import { ApolloClient, ApolloProvider, from, HttpLink } from '@apollo/client';
import { polyfill as polyfillEncoding } from 'react-native-polyfill-globals/src/encoding';
import { polyfill as polyfillReadableStream } from 'react-native-polyfill-globals/src/readable-stream';
import { polyfill as polyfillFetch } from 'react-native-polyfill-globals/src/fetch';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { cache } from './cache';
import baseUrl from './assets/common/baseUrl';
import TodoList from './components/TodoList';

// polyfillReadableStream();
// polyfillEncoding();
// polyfillFetch();

// await before instantiating ApolloClient, else queries might run before the cache is persisted
(async () => {
  await persistCache({
    cache,
    storage: new AsyncStorageWrapper(AsyncStorage),
  });
})();

// const httpLink = new HttpLink({
//   uri: baseUrl,
//   credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
//   headers: { 'Apollo-Require-Preflight': 'true' },
//   fetchOptions: {
//     reactNative: { textStreaming: true },
//   },
// });

const client = new ApolloClient({
  uri: baseUrl,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <TodoList />
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
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
