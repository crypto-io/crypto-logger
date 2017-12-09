const {log, stopAndPersist, succes, info, fail} = require('./../dist/logger.js');
const test = require('tape');

test('log', tape => {
  tape.plan(1);
  try {
    log('test');
    tape.pass('log')
  } catch (e) {
    tape.false(e)
  }
});

test('succes', tape => {
  tape.plan(1);
  try {

    succes();
    tape.pass('succes')
  } catch (e) {
    tape.false(e)
  }
});

test('info', tape => {
  tape.plan(1);
  try {

    info();
    tape.pass('info')
  } catch (e) {
    tape.false(e)
  }
});

test('fail', tape => {
  tape.plan(1);
  try {

    fail();
    tape.pass('fail')
  } catch (e) {
    tape.false(e)
  }
});
