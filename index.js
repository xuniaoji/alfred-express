'use strict';
const alfy = require('alfy');

const YOUR_APP_KEY = process.env.APP_KEY;
// const inputsSF1045668055288 = alfy.input.split(',');
// const number = inputs[0];
// const mobile = inputs[1];
(async () => {
  const data = await alfy.fetch('https://api.binstd.com/express/query', {
    query: {
      appkey: YOUR_APP_KEY,
      type: 'auto',
      number: alfy.input,
      // mobile, 文档说顺丰需要手机号, 实测不需要也可以
    },
  });

  let items;
  if (data.result) {
    items = data.result.list.map((one) => {
      return {
        title: one.time,
        subtitle: one.status,
      };
    });
    const firstLine = data.result.deliverystatus === 3 ? '已签收' : '在路上';
    items.unshift({ title: firstLine, subtitle: data.result.typename });
  } else {
    items = [
      {
        title: data.msg,
      },
    ];
  }

  alfy.output(items);
})();
