/* eslint-disable no-console */
//log
export default () => {
  if (console && console.log) {
    console.log.apply(console, [...arguments]);
  }
};

export const info = () => {
  if (console && console.info) {
    console.info.apply(console, [...arguments]);
  }
};

export const warn = () => {
  if (console && console.warn) {
    console.warn.apply(console, [...arguments]);
  }
};

export const error = () => {
  if (console && console.error) {
    console.error.apply(console, [...arguments]);
  }
};

export const dir = () => {
  if (console && console.dir) {
    console.dir.apply(console, [...arguments]);
  }
};
/* eslint-enable no-console */
