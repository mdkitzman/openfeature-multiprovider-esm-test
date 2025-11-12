const { FirstSuccessfulStrategy, MultiProvider, OpenFeature } = require("@openfeature/server-sdk");
const { inMemProvider, MY_COOL_FLAG } = require("./provider.cjs");
const { matches } = require("./matches.cjs");

const main = async () => {
  const provider = new MultiProvider([{
    provider: inMemProvider
  }], new FirstSuccessfulStrategy(), console);

  await OpenFeature.setProviderAndWait(provider);
  const client = OpenFeature.getClient();

  const flagValue = await client.getBooleanValue(MY_COOL_FLAG, false);

  console.log(`CJS Multi Provider value (should be true): ${flagValue} ${matches(flagValue, true)}`);
}

main();
