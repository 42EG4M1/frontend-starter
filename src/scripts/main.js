// ----------------------
// * _main
// ----------------------

import Test from './modules/Test';
import asyncSvgSprite from './modules/asyncSvgSprite';

const target = document.getElementById('js-test');
const test = new Test(target, 'Hello, webpack.');
test.hello();

asyncSvgSprite();
