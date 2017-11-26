/* eslint-disable no-console */
//log
export default (...args) => {
  if (console && console.log) {
    console.log.apply(console, [...args]);
  }
};

export const info = (...args) => {
  if (console && console.info) {
    console.info.apply(console, [...args]);
  }
};

export const warn = (...args) => {
  if (console && console.warn) {
    console.warn.apply(console, [...args]);
  }
};

export const error = (...args) => {
  if (console && console.error) {
    console.error.apply(console, [...args]);
  }
};

export const dir = (...args) => {
  if (console && console.dir) {
    console.dir.apply(console, [...args]);
  }
};
/* eslint-enable no-console */