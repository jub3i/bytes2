bytes2
======

```
  _______ ___ ___ _______ _______ _______ _______
 |   _   |   Y   |       |   _   |   _   |       |
 |.  1   |   1   |.|   | |.  1___|   1___|___|   |
 |.  _   \\_   _/`-|.  |-|.  __)_|____   |/  ___/
 |:  1    \|:  |   |:  | |:  1   |:  1   |:  1  \
 |::.. .  /|::.|   |::.| |::.. . |::.. . |::.. . |
 `-------' `---'   `---' `-------`-------`-------'
```

Convert bytes to another unit of information.

**Note** Implementation based on [this wikipedia article](https://en.wikipedia.org/wiki/Units_of_information).

**Note** Some related modules:
- [byte-converter](https://www.npmjs.com/package/byte-converter)
- [bytes](https://www.npmjs.com/package/bytes)

Install
-------

```
npm install bytes2
```

Examples
--------

Require the module:
```
var bytes2 = require('bytes2');
```

Convert `1000` bytes to `KB`:
```
var value = bytes2('KB', 1000)
console.log(value) // 1
```

Convert `1000` bytes to `KiB`:
```
var value = bytes2('KiB', 1000)
console.log(value) // 0.9765625
```

Convert `1000` bytes to `KiB`, showing only 2 decimal places:
```
var value = bytes2('KiB', 1000, { decimals: 2 })
console.log(value) // 0.98
```

Convert `1000` bytes to `KiB`, prepending the units:
```
var value = bytes2('KiB', 1000, { prepend: true })
console.log(value) // '0.9765625 KiB'
```

Convert `1000` bytes to `jedecKB`, prepending the units:
```
var value = bytes2('jedecKB', 1000, { prepend: true })
console.log(value) // '0.9765625 KB'
```

Convert `1000` bytes to `KiB`, showing only 3 decimal places, prepending the units and using `'-'` as the seperator:
```
var value = bytes2('KiB', 1000, {
  decimals: 3,
  prepend: true,
  seperator: '-',
})
console.log(value) // '0.977-KiB'
```

bytes2(to, bytes[, opts])
-------------------------

Returns `bytes` in `to` units of information.

Option         | Type         | Default            | Explanation
-------------- | -------------| ------------------ | ------------
to             | `String`     | none               | See table below
bytes          | `Number`     | none               | Integer number of bytes to convert
opts           | `Object`     | see below          | Options object, specify what you need and the defaults will be filled in
opts.decimals  | `Number`     | all decimal places | The number of decimal places to round the result to
opts.prepend   | `String`     | false              | Prepend the units and return a string
opts.seperator | `String`     | ' '                | Specify what seperator to use with the `prepend` option. Only works if used in conjunction with `opts.prepend`.

### Base-10, decimal, SI and metric:

`to`           | Number of bytes
-------------- | ----------------
kB             | 1000
MB             | 1000000 (1000^2)
GB             | 1000000000 (1024^3)
TB             | 1000000000000 (1024^4)
PB             | 1000000000000000 (1024^5)
EB             | 1000000000000000000 (1024^6)

### Base-2, binary and IEC

`to`           | Number of bytes
-------------- | ----------------
KiB            | 1024
MiB            | 1048576 (1024^2)
GiB            | 1073741824 (1024^3)
TiB            | 1099511627776 (1024^4)
PiB            | 1125899906842624 (1024^5)
EiB            | 1152921504606847000 (1024^6)

### JEDEC

**Note** JEDEC options works basically the same as the base-2 ones, except
that if you use the `prepend` option, it will, for example, correctly add
'KB' and not 'KiB'.

`to`           | Number of bytes
-------------- | ----------------
jedecKB        | 1024
jedecMB        | 1048576 (1024^2)
jedecGB        | 1073741824 (1024^3)

Testing
-------

Using Mocha:

```
npm install
npm test
```

Contributing
------------

Just send a PR, or create an issue if you are not sure.

Areas ripe for contribution:
- performance
- bugs

License
-------

MIT
