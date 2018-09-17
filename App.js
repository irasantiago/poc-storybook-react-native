import StorybookUI from "./storybook";
import React from "react";
import { createStackNavigator } from "react-navigation";

import HomeContainer from "./src/containers/HomeContainer";
import OrderContainer from "./src/containers/OrderContainer";
import RootContainer from "./src/containers/RootContainer";

const Router = createStackNavigator(
  {
    Root: RootContainer,
    Home: HomeContainer,
    Order: OrderContainer,
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
