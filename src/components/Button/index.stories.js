import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import CenterView from "../CenterView";
import Button from "./";

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

stories
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <Button onPress={action("clicked-text")}>
      <Text children={text("Button text", "Hello Button")} />
    </Button>
  ))
  .add("with lots of text", () => (
    <Button onPress={action("clicked-text")}>
      <Text
        children={text(
          "Button text",
          "Hello this is a Button and it has a lot of text"
        )}
      />
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onPress={action("clicked-emoji")}>
      <Text children={text("Button text", "😀 😎 👍 💯")} />
    </Button>
  ));
