module.exports = {
  config: {
    name: "slap",
    author: "Toshiro Editz",
    category: "fun",
    role: 0,
    countDown: 5
  },

  onStart: async ({ message }) => {
    try {
      message.reply("⚠️ This command is temporarily disabled due to dependency updates. Please use an image editing tool instead.");
    } catch (e) {
      message.reply("❌ an error try again later");
    }
  }
};

