import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, text } from "@storybook/addon-knobs";

import SectionMenuItem from "./";
import { menuItemsLocation } from "../data.js";

const stories = storiesOf("SectionMenuItem", module);

stories.addDecorator(withKnobs);

stories.add("with max info", () => {
  return (
    <SectionMenuItem
      description={text("Description", menuItemsLocation[0].description)}
      footer={text("Footer", menuItemsLocation[0].footer)}
      title={text("Title", menuItemsLocation[0].title)}
    />
  );
});

stories.add("with title and description", () => {
  return (
    <SectionMenuItem
      description={text("Description", menuItemsLocation[0].description)}
      title={text("Title", menuItemsLocation[0].title)}
    />
  );
});

stories.add("with title", () => {
  return <SectionMenuItem title={text("Title", menuItemsLocation[0].title)} />;
});

stories.add("with title and footer", () => {
  return (
    <SectionMenuItem
      footer={text("Footer", menuItemsLocation[0].footer)}
      title={text("Title", menuItemsLocation[0].title)}
    />
  );
});
