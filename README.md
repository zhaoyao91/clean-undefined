# Clean Undefined

Delete object fields of undefined.

## Installation

```
npm install clean-undefined
```

## Usage

```ecmascript 6
const clean = require('clean-undefined')

const obj1 = {name: 'Bob', age: undefined}
// { name: 'Bob', age: undefined }

const obj2 = clean(obj1)
// { name: 'Bob' }

obj1 === obj2
// true
```

## License

MIT
