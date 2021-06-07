const axios = require("axios");

const deviseGet = async (req, res) => {
  try {
    let device = "4291D9";
    let id = req.body.id;
    const { data } = await axios.get(
      `https://api.sigfox.com/v2/devices/${device}/messages`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${process.env.DEVICES_AUTH}`,
        },
      }
    );
    //console.log(data);
    res.json(data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = deviseGet;
