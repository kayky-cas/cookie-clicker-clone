let isDebugable = true;

const changeDebugStatus = (status = undefined) => {
  if (!status || typeof status !== 'boolean') {
    isDebugable = !isDebugable;
  } else {
    isDebugable = status;
  }

  return isDebugable;
};

const log = (log = '', style = '') => {
  if (!isDebugable) return;

  let prefix = '%c';

  if (typeof log !== 'string') {
    prefix = '';
  }

  console.log(prefix + log, style);
};

export { changeDebugStatus, log };
