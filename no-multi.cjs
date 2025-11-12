const { OpenFeature } = require("@openfeature/server-sdk");
const { inMemProvider, MY_COOL_FLAG } = require("./provider.cjs");
const { matches } = require("./matches.cjs");

const main = async () => {
  await OpenFeature.setProviderAndWait(inMemProvider);
  const client = OpenFeature.getClient();

  const flagValue = await client.getBooleanValue(MY_COOL_FLAG, false);

  console.log(`CJS Direct Provider value (should be true): ${flagValue} ${matches(flagValue, true)}`);
}

main();
