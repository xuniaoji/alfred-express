'use strict';
const alfy = require('alfy');
// const inputsSF1045668055288 = alfy.input.split(',');
// const number = inputs[0];
// const mobile = inputs[1];
(async () => {
  const data = await alfy.fetch('https://api.binstd.com/express/query', {
    query: {
      appkey: '9840c89040f56003',
      type: 'auto',
      number: alfy.input,
      // mobile,
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
    items.unshift({ title: data.result.typename, subtitle: firstLine });
  } else {
    items = [
      {
        title: data.msg,
      },
    ];
  }

  alfy.output(items);
})();
