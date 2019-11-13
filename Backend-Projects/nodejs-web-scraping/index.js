const request = require('request');
const cheerio = require('cheerio');

request('https://www.webfx.com/blog/web-design/code-demo-sites/',
  (err, res, html) => {
    if (!err && res.statusCode == 200) {
      const $ = cheerio.load(html);
    }
  })