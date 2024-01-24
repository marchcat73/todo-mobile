import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
  HttpLink,
} from '@apollo/client';
import { polyfill as polyfillEncoding } from 'react-native-polyfill-globals/src/encoding';
import { polyfill as polyfillReadableStream } from 'react-native-polyfill-globals/src/readable-stream';
import { polyfill as polyfillFetch } from 'react-native-polyfill-globals/src/fetch';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { cache } from './cache';
import baseUrl from './assets/common/baseUrl';
import ManageTask from './screens/ManageTask';
import ActiveTasks from './screens/ActiveTasks';
import AllTasks from './screens/AllTasks';
import CompletedTasks from './screens/CompletedTasks';
import InProgressTasks from './screens/InProgressTasks';
import IconButton from './components/UI/IconButton';
import { GlobalStyles } from './constants/styles';

polyfillReadableStream();
polyfillEncoding();
polyfillFetch();

// await before instantiating ApolloClient, else queries might run before the cache is persisted
(async () => {
  await persistCache({
    cache,
    storage: new AsyncStorageWrapper(AsyncStorage),
  });
})();

const httpLink = new HttpLink({
  uri: baseUrl,
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  headers: { 'Apollo-Require-Preflight': 'true' },
  fetchOptions: {
    reactNative: { textStreaming: true },
  },
});

const client = new ApolloClient({
  uri: baseUrl,
  // link: from[httpLink],
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  fetchOptions: {
    reactNative: { textStreaming: true },
  },
});

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const TasksOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add-alarm"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageTask');
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="Active Tasks"
        component={ActiveTasks}
        options={{
          title: 'Active Tasks',
          tabBarLabel: 'Active',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="notifications-active"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="In Progress Tasks"
        component={InProgressTasks}
        options={{
          title: 'In Progress Tasks',
          tabBarLabel: 'In Progress',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Completed Tasks"
        component={CompletedTasks}
        options={{
          title: 'Completed Tasks',
          tabBarLabel: 'Done',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark-done" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="All Tasks"
        component={AllTasks}
        options={{
          title: 'All Tasks',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen
            name="TasksOverview"
            component={TasksOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageTask"
            component={ManageTask}
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
