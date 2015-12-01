/*
 * private variable storing the scale
 */

// see: https://en.wikipedia.org/wiki/Units_of_information
var scale = {
  // base-10, decimal, SI and metric
  kB: 1000,
  MB: 1000000,
  GB: 1000000000,
  TB: 1000000000000,
  PB: 1000000000000000,
  EB: 1000000000000000000,

  // base-2, binary and IEC
  KiB: 1024,
  MiB: 1048576,
  GiB: 1073741824,
  TiB: 1099511627776,
  PiB: 1125899906842624,
  EiB: 1152921504606847000,

  // JEDEC

  jedecKB: 1024, /* KB in JEDEC */
  jedecMB: 1048576, /* MB in JEDEC */
  jedecGB: 1073741824, /* GB in JEDEC */
}

/*
 * main function used to convert bytes
 */

function bytes2(to, bytes, opts) {
  opts = opts || {}
  opts.decimals = opts.decimals || false
  opts.prepend = opts.prepend || false
  opts.seperator = opts.seperator || ' '

  var result = bytes / scale[to]

  if (opts.decimals) {
    result = result.toFixed(opts.decimals)
  }

  if (opts.prepend) {
    result = result + opts.seperator
    switch (to) {
      case 'jedecKB':
        result += 'KB'
        break;
      case 'jedecMB':
        result += 'MB'
        break;
      case 'jedecGB':
        result += 'GB'
        break;
      default:
        result += to
        break;
    }
  }

  return result
}

/*
 * module exports
 */

module.exports = bytes2
module.exports.scale = scale
