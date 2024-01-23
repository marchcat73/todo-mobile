import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';
import { ApolloClient, ApolloProvider, from, HttpLink } from '@apollo/client';
import { polyfill as polyfillEncoding } from 'react-native-polyfill-globals/src/encoding';
import { polyfill as polyfillReadableStream } from 'react-native-polyfill-globals/src/readable-stream';
import { polyfill as polyfillFetch } from 'react-native-polyfill-globals/src/fetch';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { cache } from './cache';
import baseUrl from './assets/common/baseUrl';
import ManageTask from './screens/ManageTask';
import ActiveTasks from './screens/ActiveTasks';
import AllTasks from './screens/AllTasks';
import CompletedTasks from './screens/CompletedTasks';
import InProgressTasks from './screens/InProgressTasks';

// polyfillReadableStream();
// polyfillEncoding();
// polyfillFetch();

// await before instantiating ApolloClient, else queries might run before the cache is persisted
// (async () => {
//   await persistCache({
//     cache,
//     storage: new AsyncStorageWrapper(AsyncStorage),
//   });
// })();

// const httpLink = new HttpLink({
//   uri: baseUrl,
//   credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
//   headers: { 'Apollo-Require-Preflight': 'true' },
//   fetchOptions: {
//     reactNative: { textStreaming: true },
//   },
// });

// const client = new ApolloClient({
//   uri: baseUrl,
//   cache,
//   defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
// });

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const TasksOverview = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="ActiveTasks" component={ActiveTasks} />
      <BottomTabs.Screen name="CompletedTasks" component={CompletedTasks} />
      <BottomTabs.Screen name="InProgressTasks" component={InProgressTasks} />
      <BottomTabs.Screen name="AllTasks" component={AllTasks} />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TasksOverview" component={TasksOverview} />
          <Stack.Screen name="ManageTask" component={ManageTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
