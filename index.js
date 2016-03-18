import debug from 'debug';

export default class BetLogger {
  constructor (seed) {
    this.seed = seed;
    return this.factory();
  }

  factory () {
    if (debug) {
      return debug(this.seed);
    }
    return this.log.bind(this);
  }

  log (...args) {
    if (localStorage && localStorage.debug) {
      console.log(this.seed, ...args);
    }
  }
};
