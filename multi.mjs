import { FirstSuccessfulStrategy, MultiProvider, OpenFeature } from "@openfeature/server-sdk";
import { inMemProvider, MY_COOL_FLAG } from "./provider.cjs";
import { matches } from "./matches.cjs";

const provider = new MultiProvider([{
  provider: inMemProvider
}], new FirstSuccessfulStrategy(), console);

await OpenFeature.setProviderAndWait(provider);
const client = OpenFeature.getClient();

const flagValue = await client.getBooleanValue(MY_COOL_FLAG, false);

console.log(`ESM Multi Provider Value (should be true): ${flagValue} ${matches(flagValue, true)}`);