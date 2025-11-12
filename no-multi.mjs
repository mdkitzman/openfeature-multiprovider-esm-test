import { OpenFeature } from "@openfeature/server-sdk";
import { inMemProvider, MY_COOL_FLAG } from "./provider.cjs";
import { matches } from "./matches.cjs";

await OpenFeature.setProviderAndWait(inMemProvider);
const client = OpenFeature.getClient();

const flagValue = await client.getBooleanValue(MY_COOL_FLAG, false);

console.log(`ESM Direct Provider Value (should be true): ${flagValue} ${matches(flagValue, true)}`);