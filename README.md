# Tendencys Ecommerce App

Tendencys ecommerce test application.

## Contents

- [Dependencies](#dependencies)
- [Configuration](#configuration)

## Dependencies

![https://img.shields.io/badge/TypeScript-5.1.3-blue.svg](https://img.shields.io/badge/TypeScript-5.1.3-blue.svg)

![https://img.shields.io/badge/React-18.2.0-red.svg](https://img.shields.io/badge/React-17.0.2-red.svg)

![https://img.shields.io/badge/ReactNative-0.73.6-yellow.svg](https://img.shields.io/badge/ReactNative-0.73.6-yellow.svg)

![https://img.shields.io/badge/gluestack-ui-1.0.52-green.svg](https://img.shields.io/badge/gluestack-ui-1.0.52-green.svg)

![https://img.shields.io/badge/Expo-50.0.14-black.svg](https://img.shields.io/badge/Expo-50.0.14-black.svg)

## Configuration

### Environment Variables

Inside the root folder create an `.env` file with the following keys:

|        Key        |      Value       |                       Description                       | Required |
| :---------------: | :--------------: | :-----------------------------------------------------: | :------: |
| REACT_APP_API_URL | http://127.0.0.1 | Api url that provides us with the necessary information |   True   |

### Running the Local Development Server

Before running the development server we need to install the project dependencies:

```bash
yarn install
```

We can run the development server with the next command:

```bash
yarn start
```

The command above will run a development server at [` http://127.0.0.1:3000/`](http://127.0.0.1:3000/)

### Project Production Build

To create the project production build we can use the following command:

```bash
yarn build
```

Once the project build is done, it's ready to publish in any deployment service.

## Appendices

### VSCODE settings file

To have all the development environment automated we have a [settings.json](./.vscode/settings.json) file with the following configuration:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.rulers": [80],
  "eslint.packageManager": "yarn",
  "eslint.validate": ["js", "jsx", "ts", "tsx"],
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": false
}
```
