// This is Metro Bundler which is the default config which is responsible for the execution of the JavaScript into native code. This file is a Metro Bundler configuration file for a React Native project. It is responsible for transforming JavaScript code into native code. Here's a summary of what this file is doing:

// It imports getDefaultConfig and mergeConfig functions from @react-native/metro-config.
// It retrieves the default configuration using getDefaultConfig(__dirname).
// It extracts sourceExts and assetExts from the resolver configuration of the default config.
// It defines a custom configuration object config with:
// A transformer object with a getTransformOptions function that returns transformation options.
// A babelTransformerPath pointing to 'react-native-svg-transformer'.
// A resolver object that filters out 'svg' from assetExts and adds 'svg' to sourceExts.
// It merges the default configuration with the custom configuration using mergeConfig and exports the final configuration.
// This file essentially customizes the Metro Bundler configuration by adding a transformer for SVG files and updating the resolver configuration to handle SVG assets and It will recognize the SVG as Root Source Asset and will make easy to render it. 

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const {
  resolver: { sourceExts, assetExts },
} = getDefaultConfig(__dirname);

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);