// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";
import * as constants from "../Constants";

export class HomePage extends AbstractPage
{
	constructor(page: Page)
	{
		super(page);
	}

	async visit()
	{
		await this.page.goto(constants.homePageURL);
	}

	async checkURL()
	{
		await expect(this.page).toHaveURL(constants.homePageURL);
	}

	async checkTitle()
	{
		await expect(this.page).toHaveTitle(constants.homePageTitle);
	}
}