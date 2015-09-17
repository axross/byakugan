(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var ua = window.navigator.userAgent.toLowerCase();
var vendor = String(window.navigator.vendor).toLowerCase();
var version = String(window.navigator.appVersion).toLowerCase();

var whichBrowserType = function whichBrowserType() {
  if (/^opera\//.test(ua) || /\x20opr\//.test(ua)) {
    return 'opera';
  }
  if (/edge/i.test(ua)) {
    return 'edge';
  }
  if (/msie/i.test(ua) || "ActiveXObject" in window) {
    return 'ie';
  }
  if (/chrome|chromium/i.test(ua) && /google inc/.test(vendor)) {
    return 'chrome';
  }
  if (/safari/i.test(ua) && /apple computer/i.test(vendor)) {
    return 'safari';
  }
  if (/firefox/i.test(ua)) {
    return 'firefox';
  }

  return '(unknown)';
};

var whichBrowserVersion = function whichBrowserVersion() {
  var version = '(unknown)';

  switch (whichBrowserType()) {
    case 'opera':
      version = ua.substring(ua.indexOf('opera') + 6);
      break;
    case 'edge':
      version = ua.substring(ua.indexOf('edge') + 5);
      break;
    case 'chrome':
      version = ua.substring(ua.indexOf('chrome') + 7);
      break;
    case 'safari':
      if (ua.indexOf('version')) {
        version = ua.substring(ua.indexOf('version') + 8);
      } else {
        version = ua.substring(ua.indexOf('safari') + 7);
      }
      break;
    case 'firefox':
      version = ua.substring(ua.indexOf('firefox') + 8);
      break;
  }

  return '' + parseFloat(version.split(';')[0].split(' ')[0], 10);
};

var whichDeviceType = function whichDeviceType() {
  if (/android/i.test(ua) && /mobile/i.test(ua)) {
    return 'androidPhone';
  }
  if (/android/i.test(ua) && !/mobile/i.test(ua)) {
    return 'androidTablet';
  }
  if (/iphone/i.test(ua)) {
    return 'iphone';
  }
  if (/ipad/i.test(ua)) {
    return 'ipad';
  }
  if (/ipod/i.test(ua)) {
    return 'ipod';
  }
  if (/blackberry/i.test(ua) || /BB10/i.test(ua)) {
    return 'blackberry';
  }
  if (/win/i.test(version) && /phone/i.test(ua)) {
    return 'windowsPhone';
  } else if (/win/i.test(version) && /touch/i.test(ua)) {
    return 'windowsTablet';
  }

  return 'desktop';
};

var whichOsType = function whichOsType() {
  if (/android/i.test(ua)) {
    return 'android';
  }
  if (/iphone/i.test(ua) || /ipad/i.test(ua) || /ipod/i.test(ua)) {
    return 'ios';
  }
  if (/mac/i.test(version)) {
    return 'mac';
  }
  if (/win/i.test(version)) {
    return 'windows';
  }
  if (/linux/i.test(version)) {
    return 'linux';
  }

  return '(unknown)';
};

var whichOsVersion = function whichOsVersion() {
  if (/android/i.test(ua) && /mobile/i.test(ua) || /android/i.test(ua) && !/mobile/i.test(ua)) {
    var executed = /android ([0-9]\.[0-9](\.[0-9]))/i.exec(ua);

    if (!executed || !executed[1]) return '(unknown)';

    return executed[1];
  }
  if (/iphone/i.test(ua) || /ipad/i.test(ua) || /ipod/i.test(ua)) {
    var executed = /os ([0-9]_[0-9](_[0-9]*))/i.exec(ua);

    if (!executed || !executed[1]) return '(unknown)';

    return executed[1].replace('_', '.');
  }
  if (/win/i.test(version)) {
    var executed = /windows nt ([0-9][0-9]?\.[0-9])/i.exec(ua);

    if (!executed || !executed[1]) return '(unknown)';

    if (executed[1] === '5.1') return 'XP 32bit';
    if (executed[1] === '5.2') return 'XP 64bit';
    if (executed[1] === '6.0') return 'Vista';
    if (executed[1] === '6.1') return '7';
    if (executed[1] === '6.2') return '8';
    if (executed[1] === '6.3') return '8.1';
    if (executed[1] === '10.0') return '10';
  }

  return '(unknown)';
};

var isTouchDevice = function isTouchDevice() {
  return 'ontouchstart' in window || 'DocumentTouch' in window;
};

exports['default'] = {
  whichBrowserType: whichBrowserType,
  whichBrowserVersion: whichBrowserVersion,
  whichDeviceType: whichDeviceType,
  whichOsType: whichOsType,
  whichOsVersion: whichOsVersion,
  isTouchDevice: isTouchDevice
};
module.exports = exports['default'];

},{}]},{},[1]);
