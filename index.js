function clean (object) {
  if (typeof object === 'object') {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        if (object[key] === undefined) {
          delete object[key]
        }
      }
    }
  }
  return object
}

module.exports = clean
