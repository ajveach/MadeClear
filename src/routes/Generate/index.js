// Sync route definition
export default (store) => ({
  path : 'new',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Policy = require('./containers/GenerateContainer').default

      /*  Return getComponent   */
      cb(null, Policy)

    /* Webpack named bundle   */
    }, 'generate')
  }
})
