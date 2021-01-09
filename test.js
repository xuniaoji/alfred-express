import test from 'ava';
import alfyTest from 'alfy-test';

test('main', async (outputs) => {
  const alfy = alfyTest();

  const result = await alfy('YT5169043866581');

  outputs.deepEqual(result[0], {
    title: '圆通速递',
    subtitle: '已签收',
  });

  outputs.deepEqual(result[1], {
    title: '2021-01-05 09:19:20',
    subtitle:
      '客户签收人: 驿站代收 已签收  感谢使用圆通速递，期待再次为您服务 如有疑问请联系：18521160802，投诉电话：15802991660',
  });
});

test('顺丰现在也不需要手机号', async (outputs) => {
  const alfy = alfyTest();

  const result = await alfy('SF1045668055288');

  outputs.deepEqual(result[0], {
    title: '顺丰速运',
    subtitle: '已签收',
  });
});
