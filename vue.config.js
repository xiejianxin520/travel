const home = require('./data/home.json');
const city = require('./data/city.json');
const detail = require('./data/detail.json');


module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    open: false,
    host: 'localhost',
    port: 8080,
    https: false,
    before(app) {
      // http: //localhost:8090/index
      app.get('/home', (req, res) => {
        res.json(home);
      });
      app.get('/city', (req, res) => {
        res.json(city);
      });
      app.get('/detail', (req, res) => {
        res.json(detail);
      });
    }
  }
}