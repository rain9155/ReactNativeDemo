module.exports = {
  dependencies: {
    'react-native-webview': {
      platforms: {
        windows: null, // disable window platform, other platforms will still autolink if provided
      },
    },
    'react-native-screens': {
      platforms: {
        windows: null,
      },
    },
  },
};