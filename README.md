# poc-storybook-react-native

Sample React Native app for testing Storybook workflow.

## Getting started

1. Install dependencies: `yarn install`
2. Run storybook: `yarn storybook`
3. Run the app: `yarn start`

To view and/or play around with storybook addons, like knobs, visit `http://localhost:7007` on your web browser.

## Summary

[`react-native-storybook-loader`](https://github.com/elderfo/react-native-storybook-loader) is being used to override the default folder and file patterns established by [`@storybook/react-native`](https://github.com/storybooks/storybook/tree/master/app/react-native). In this repo, it helps isolate components into their own folders with their respective tests, stories and styles.

## References

- https://pusher.com/tutorials/storybook-react-native