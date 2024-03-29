import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	timeout: 60000,
	retries: 0,

	use: 
	{
		testIdAttribute: "data-qa",
		headless: true,
		viewport: { width: 2040, height: 1030 },
		actionTimeout: 10000,
		ignoreHTTPSErrors: true,
		screenshot: "off",
		video: "off"
	},

	testMatch: /Tests_UI.*.spec.ts/,
};
export default config;