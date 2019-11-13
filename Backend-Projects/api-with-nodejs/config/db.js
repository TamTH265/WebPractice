require('dotenv').config();

module.exports = {
  url: `mongodb+srv://madlife:${process.env.DB_PASS}@notable-5yfgd.mongodb.net/test?retryWrites=true&w=majority`
}
