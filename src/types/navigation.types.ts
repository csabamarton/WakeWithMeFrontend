import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  CreateAlarm: undefined;
  Profile: undefined;
};

export type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};
