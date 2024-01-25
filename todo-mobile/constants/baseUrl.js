import { Platform } from 'react-native';

let baseUrl = '';

{
  Platform.OS === 'android' || 'ios'
    ? (baseUrl = 'http://192.168.1.141:4000/graphql')
    : (baseUrl = 'http://localhost:4000/graphql');
}

export default baseUrl;
