const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "trash",
    author: "Toshiro Editz",
    category: "fun",
    role: 0,
    countDown: 5
  },

  onStart: async ({ event, message }) => {
    try {
      message.reply("⚠️ This command is temporarily disabled due to dependency updates. Please use an image editing tool instead.");
    } catch (e) {
      message.reply("❌ an error try again later");
    }
  }
};

