const { InMemoryProvider } = require("@openfeature/server-sdk");
const MY_COOL_FLAG = 'my-cool-flag';

module.exports = {
  MY_COOL_FLAG,
  inMemProvider: new InMemoryProvider({
    [MY_COOL_FLAG]: {
      variants: {
        'on': true,
      },
      disabled: false,
      defaultVariant: "on"
    },
  })
}