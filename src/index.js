import ora from 'ora';

const spinner = ora().start();
let running = false
let c = 'cyan';
let t = 'Loading';

export const log = (text, color) => {
  const c = color || 'cyan';
  const t = text || 'Loading';
  spinner.color = c;
  spinner.text = t;
  if (!running) {
    setTimeout(() => {
    	spinner.color = c;
    	spinner.text = t;
    }, 1000);
    running = true;
  }
  return
}
export const stopAndPersist = options => {
  ora().stopAndPersist(options);
  log.running = false;
};
export const succes = options => {
  spinner.succeed(options);
  log.running = false;
};
export const info = options => {
  spinner.info(options);
  log.running = false;
};
export const fail = options => {
  spinner.fail(options);
  log.running = false;
};

// module.exports = {log, stopAndPersist, succes, info, fail};
