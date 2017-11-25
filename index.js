/* eslint-disable no-console */
export default function log() {
  if (console && console.log) {
    console.log.apply(console, [...arguments]);
  }
}

export function info() {
  if (console && console.info) {
    console.info.apply(console, [...arguments]);
  }
}

export function warn() {
  if (console && console.warn) {
    console.warn.apply(console, [...arguments]);
  }
}

export function error() {
  if (console && console.error) {
    console.error.apply(console, [...arguments]);
  }
}

export function dir() {
  if (console && console.dir) {
    console.dir.apply(console, [...arguments]);
  }
}
/* eslint-enable no-console */
