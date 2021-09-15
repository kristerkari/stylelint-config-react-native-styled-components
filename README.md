# stylelint-config-react-native-styled-components

[![NPM version](http://img.shields.io/npm/v/stylelint-config-react-native-styled-components.svg)](https://www.npmjs.org/package/stylelint-config-react-native-styled-components)
[![Build Status](https://github.com/kristerkari/stylelint-config-react-native-styled-components/workflows/Tests/badge.svg)](https://github.com/kristerkari/stylelint-config-react-native-styled-components/actions?workflow=Tests)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

Shareable stylelint config for [styled components](https://www.styled-components.com/) when using React Native.

<img src="screenshots/linting.gif" width="742">

## Installation and usage

Install `stylelint-config-react-native-styled-components` (and `stylelint` + `stylelint-react-native`):

```
yarn add \
  stylelint \
  stylelint-react-native \
  stylelint-processor-styled-components \
  stylelint-config-react-native-styled-components --dev
```

or

```
npm install \
  stylelint \
  stylelint-react-native \
  stylelint-processor-styled-components \
  stylelint-config-react-native-styled-components --save-dev
```

Create the `.stylelintrc` config file (or open the existing one) add the stylelint processor and extend `stylelint-config-react-native-styled-components` config.

```json
{
  "processors": ["stylelint-processor-styled-components"],
  "extends": ["stylelint-config-react-native-styled-components"]
}
```

## License

[MIT](/LICENSE)
