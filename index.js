"use strict";
const alfy = require("alfy");
// const inputsSF1045668055288 = alfy.input.split(',');
// const number = inputs[0];
// const mobile = inputs[1];
const data = await alfy.fetch("https://api.binstd.com/express/query", {
  query: {
    appkey: "9840c89040f56003",
    type: "auto",
    number: alfy.input,
    // mobile, 
  },
});

const items = data.result.list.map((one) => {
  return {
    title: one.time,
    subtitle: one.status,
  };
});

const isDelivered = data.result.list.some((one) => one.status.includes('已签收'));
const firstLine = isDelivered? '已签收' : '在路上';

items.unshift({ title: data.result.typename, subtitle: firstLine });

alfy.output(items);
