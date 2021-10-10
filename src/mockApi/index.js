import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios, {delayResponse: 1000});

mock.onPost("/set-repository").networkErrorOnce();

mock.onPost("/set-repository").reply((config) => {
  const {repository} = JSON.parse(config.data);

  return [
    200,
    {repository},
  ];
});

mock.onPost("/get-history").reply((config) => {
  const {cursor = null, count = 10} = JSON.parse(config.data);

  let result = {};

  if (cursor != null) {
    const lastItem = history.find((item) => item.id === cursor);

    result.list = history.slice(lastItem.id, lastItem.id + count);
  } else {
    result.list = history.slice(0, count);
  }

  const length = result.list.length;
  result.cursor = result.list.length < count ? null : result.list[length-1].id;

  return [
    200,
    result,
  ];
});

const history = [
  {
    id: 1,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "success",
  },
  {
    id: 2,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "wait",
  },
  {
    id: 3,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "decline",
  },
  {
    id: 4,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "success",
  },
  {
    id: 5,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "wait",
  },
  {
    id: 6,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "decline",
  },
  {
    id: 7,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "success",
  },
  {
    id: 8,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "wait",
  },
  {
    id: 9,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "decline",
  },
  {
    id: 10,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "decline",
  },
  {
    id: 11,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "success",
  },
  {
    id: 12,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "wait",
  },
  {
    id: 13,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "decline",
  },
  {
    id: 14,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "success",
  },
  {
    id: 15,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "wait",
  },
  {
    id: 16,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "decline",
  },
  {
    id: 17,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "success",
  },
  {
    id: 18,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "wait",
  },
  {
    id: 19,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "decline",
  },
  {
    id: 20,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "decline",
  },
  {
    id: 21,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "decline",
  },
  {
    id: 22,
    number: "1368",
    title: "add documentation for postgres scaler",
    branch: "master",
    hash: "9c9f0b9",
    contributor: "Philip Kirkorov",
    date: "21 янв, 03:06",
    time: "1 ч 20 мин",
    status: "decline",
  },
]