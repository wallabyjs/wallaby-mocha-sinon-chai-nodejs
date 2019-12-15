module.exports = function() {
  return {
    files: [
      'src/**/*.js', 
      '!src/**/*.spec.js'
    ],

    tests: ['src/**/*.spec.js'],

    setup: wallaby => {
      const mocha = wallaby.testFramework;

      const chai = require('chai');
      const sinon = require('sinon');

      chai.use(require('sinon-chai'));

      // setup sinon hooks
      mocha.suite.beforeEach('sinon before', function() {
        if (null == this.sinon) {
          this.sinon = sinon.createSandbox();
        }
      });
      mocha.suite.afterEach('sinon after', function() {
        if (this.sinon && 'function' === typeof this.sinon.restore) {
          this.sinon.restore();
        }
      });

      global.expect = require('chai').expect;
    },

    testFramework: 'mocha',

    env: {
      type: 'node',
      runner: 'node'
    },

    workers: { recycle: true }
  };
};
