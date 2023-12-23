import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	use: 
	{
		headless: true,
		viewport: { width: 1280, height: 720 },
		ignoreHTTPSErrors: true,
	},

	testMatch: /Tests_UI.*.spec.ts/,
};
export default config;