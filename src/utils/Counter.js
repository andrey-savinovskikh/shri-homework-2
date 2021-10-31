import {Counter} from 'metrics';
import {detect} from 'detect-browser';

const browser = detect();

const counter = new Counter();
counter.init('25b6fb6d-fab1-457a-9297-99f01407c63f', String(Math.random()).substr(2, 12), 'app');

counter.setAdditionalParams({
  browser: browser ? browser.name : "other",
  os: browser ? browser.os : "other"
});

export default counter;