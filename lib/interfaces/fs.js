/**
* Interface for adaptors that will manage the file system
*
* @interface FS
*/
module.exports = {
  /**
  * Verifies if a file is on the disk
  *
  * @param {String} path
  * @param {existsCb} callback
  */
  exists: function(path, callback) {
    throw new Error('Your FS adaptor has not implemented the \'exists\' ' +
      'method');
  },

  /**
  * Reads a file from disk
  *
  * @param {String} path
  * @param {readCb} callback
  */
  readFile: function(path, callback) {
    throw new Error('Your FS adaptor has not implemented the \'readFile\' ' +
      'method');
  },

  /**
  * Writes the file on disk
  *
  * @param {String} path
  * @param {Buffer} data
  * @param {writeCb) callback
  */
  writeFile: function(path, data, callback) {
    throw new Error('Your FS adaptor has not implemented the \'writeFile\' ' +
      'method');
  }
};

/**
* @callback existsCb
* @param {Boolean} exists
*/

/**
* @callback readCb
* @param error
* @param {Buffer} data
*/

/**
* @callback writeCb
* @param error
*/