import {add} from "./fxjs/index.js"

const log = console.log;

const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const test = () => console.log('3');
console.log(add(1, 2));

test.wow = () => {
  console.log('wow');
}

test().wow();
