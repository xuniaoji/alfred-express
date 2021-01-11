# alfred-express

> [Alfred 4](https://www.alfredapp.com) workflow to get the express package delivery details for npm packages with [npmjs](https://www.npmjs.com/package/alfred-express)

Provide more than 80 express logistics tracking number queries, including Shentong, SF Express, YTO, Yunda, ZTO, Huitong, Guotong, Deppon, Tiantian, EMS, ZZZ Express, Span, UPS, Xinbang and other express companies. Can automatically identify the Courier company.

提供包括申通、顺丰、圆通、韵达、中通、汇通、国通、德邦、天天、EMS、宅急送、跨越、UPS、新邦等快递公司在内的 80 多个快递物流单号查询。可以自动识别快递公司。

<img src="Snipaste1.png" />

## Install

```
$ npm install --global alfred-express
```

_Requires [Node.js](https://nodejs.org) 8+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/)._

## Usage

### 1. get appkey

go to [binstd](https://www.binstd.com/api/express.html), the free account will allow 1000 times api call.

### 2. add appkey in workflow environment variable

![environment_variable](environment_variable.png)

### 3. Do it

In Alfred, type `kd`, <kbd>Enter</kbd>, and the package order number, to get the details about the express package.

## Related

- [alfy](https://github.com/sindresorhus/alfy) - Create Alfred workflows with ease

## Known issues

1. Test failed
   The test failed because of can't get the environment variable when running test, I have raise [the issue](https://github.com/SamVerschueren/alfy-test/issues/10) in alfy-test repo.

## License

MIT ©
