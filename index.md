
# react-native-spinkit-web

This package is a replacement for [`react-native-spinkit`](https://github.com/maxs15/react-native-spinkit) when targeting the web.
### Targeting the Web

Add the following to your webpack configuration:

``` javascript
module.exports = {
  ..., /* the existing configuration */

  resolve: {
    alias: {
      'react-native-spinkit': 'react-native-spinkit-web'
    }
  }
};
```
