# Tendencys Ecommerce App

Tendencys ecommerce test application.

## Contents

- [Dependencies](#dependencies)
- [Configuration](#configuration)

## Dependencies

![https://img.shields.io/badge/TypeScript-5.1.3-blue.svg](https://img.shields.io/badge/TypeScript-5.1.3-blue.svg)

![https://img.shields.io/badge/React-18.2.0-red.svg](https://img.shields.io/badge/React-17.0.2-red.svg)

![https://img.shields.io/badge/ReactNative-0.73.6-yellow.svg](https://img.shields.io/badge/ReactNative-0.73.6-yellow.svg)

![https://img.shields.io/badge/gluestackui-1.0.52-green.svg](https://img.shields.io/badge/gluestackui-1.0.52-green.svg)

![https://img.shields.io/badge/Expo-50.0.14-black.svg](https://img.shields.io/badge/Expo-50.0.14-black.svg)

## Configuration

### Environment Variables

Inside the root folder create an `.env` file with the following keys:

|        Key        |      Value       |                       Description                       | Required |
| :---------------: | :--------------: | :-----------------------------------------------------: | :------: |
| REACT_NATIVE_API_TOKEN | - | API bearer token |   True   |

### Running the Local Development Server

Before running the development server we need to install the project dependencies:

```bash
yarn install
```

We can run the development server with the next command:

```bash
yarn ios
yarn android
yarn web
```



