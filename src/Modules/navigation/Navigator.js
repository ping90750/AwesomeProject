import {
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../Home/HomeScreen";
import HistoryScreen from "../History/HistoryScreen";
import SettingsScreen from "../Setting/SettingsScreen";
import OtherScreen from "../Other/OtherScreen";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
});

const HistoryStack = createStackNavigator({
  History: {
    screen: HistoryScreen
  }
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen
  }
});
const OtherStack = createStackNavigator({
  Other: {
    screen: OtherScreen
  }
});

const AppTabNavigator = createBottomTabNavigator(
  {
    tabBarHome: {
      screen: HomeStack,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    tabBarOther: {
      screen: OtherStack,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    tabBarHistory: {
      screen: HistoryStack,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    tabBarSettings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    backBehavior: "none",
    animationEnabled: false,
    swipeEnabled: false,
    headerMode: "none"
  }
);

const AppNavigator = createSwitchNavigator(
  {
    App: AppTabNavigator,
    Home: HomeStack
  },
  { initialRouteName: "App" }
);

export default AppNavigator;
