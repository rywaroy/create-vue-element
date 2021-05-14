function cloneArray(target) {
  const cloneTarget = [];
  for (let i = 0; i < target.length; i++) {
    cloneTarget[i] = cloneDeep(target[i]); // eslint-disable-line
  }
  return cloneTarget;
}

function cloneObject(target) {
  const cloneTarget = {};
  Object.keys(target).forEach((key) => {
    cloneTarget[key] = cloneDeep(target[key]); // eslint-disable-line
  });
  return cloneTarget;
}

function cloneDate(target) {
  return new Date(target.getTime());
}

function cloneRegExp(target) {
  return new RegExp(target);
}

export default function cloneDeep(target) {
  const type = Object.prototype.toString.call(target);
  let cloneTarget;

  switch (type) {
    case '[object Object]':
      cloneTarget = cloneObject(target);
      break;
    case '[object Array]':
      cloneTarget = cloneArray(target);
      break;
    case '[object Date]':
      cloneTarget = cloneDate(target);
      break;
    case '[object RegExp]':
      cloneTarget = cloneRegExp(target);
      break;
    default:
      cloneTarget = target;
      break;
  }

  return cloneTarget;
}
