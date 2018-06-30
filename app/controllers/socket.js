'use strict';
/**
 * Socket' controller.
 * @namespace SocketController
 */

/**
 * Server Event
 * @namespace SocketController
 * @module ServerEvent
 * @requires events
 * @yield Init an event emitter
 */

let EventEmitter  = require('events').EventEmitter;
let ServerEvent	  = new EventEmitter();
console.log('Socket ready');
module.exports = ServerEvent;