import { expect, Locator, Page } from "@playwright/test";
import * as constants from "../Constants";

export class SubscriptionBar
{
	constructor(page: Page)
	{
		this.page = page;
	}
}