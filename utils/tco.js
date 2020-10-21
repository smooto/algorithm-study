/*
source: @tjjfvi via stack overflow
https://stackoverflow.com/questions/37224520/are-functions-in-javascript-tail-call-optimized/62376811#62376811
*/

class Tco {
  constructor(func) {
    this.func = func;
  }
  execute() {
    let value = this;
    while (value instanceof Tco)
      value = value.func();
    return value;
  }
}

const tco = (f) => new Tco(f);

module.exports = { tco }
