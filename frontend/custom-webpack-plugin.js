class NodeSchemePlugin {
    apply(compiler) {
      compiler.hooks.normalModuleFactory.tap('NodeSchemePlugin', (factory) => {
        factory.hooks.beforeResolve.tapAsync('NodeSchemePlugin', (data, callback) => {
          if (data.request.startsWith('node:')) {
            data.request = require.resolve(data.request.slice(5));
          }
          callback();
        });
      });
    }
  }
  
  module.exports = NodeSchemePlugin;
  