import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object, text } from "@storybook/addon-knobs";

import SelectionMenu from "./";
import { menuItemsLocation } from "./data.js";

const stories = storiesOf("SelectionMenu", module);

stories.addDecorator(withKnobs);

stories.add("with title", () => {
  return <SelectionMenu title={text("Title", "OrderType")} />;
});

stories.add("with title and icon", () => {
  return (
    <SelectionMenu
      icon={text("Icon", "calendar")}
      title={text("Title", "New York, NY")}
      menuItems={object("Menu items", menuItemsLocation)}
    />
  );
});
