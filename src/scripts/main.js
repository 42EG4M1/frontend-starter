// ----------------------
// * _main
// ----------------------

import Test from './modules/Test';

const target = document.getElementById('js-test');
const test = new Test(target, 'Hello, webpack.');
test.hello();
