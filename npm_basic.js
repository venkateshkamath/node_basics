const _ = require("lodash");

const items = [1, [2, 3, [4]]];
console.log(_.flattenDeep(items));
