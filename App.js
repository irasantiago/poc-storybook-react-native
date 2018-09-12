import StorybookUI from "./storybook";
import React from "react";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./src/routes/HomeScreen";
import OrderScreen from "./src/routes/OrderScreen";
import RootScreen from "./src/routes/RootScreen";

const Router = createStackNavigator(
  {
    Root: RootScreen,
    Home: HomeScreen,
    Order: OrderScreen,
    Storybook: StorybookUI
  },
  {
    initialRouteName: "Root"
  }
);

class App extends React.Component {
  render() {
    return <Router />;
  }
}

export default App;
