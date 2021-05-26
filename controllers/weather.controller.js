const axios = require("axios");

const weatherGet = async (req, res) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=Quilmes,ar&appid=${process.env.API_W_KEY}`
    );
    //console.log(data);
    res.json(data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = weatherGet;
