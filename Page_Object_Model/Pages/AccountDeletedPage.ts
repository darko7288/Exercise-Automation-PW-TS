// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";
import * as constants from "../Constants";

export class AccountDeletedPage extends AbstractPage
{
	readonly titleBanner: Locator;
	readonly continueButton: Locator;

	constructor(page: Page)
	{
		super(page);
		this.titleBanner = page.getByTestId("account-deleted");
		this.continueButton = page.getByTestId("continue-button");
	}

	async visit()
	{
		await this.page.goto(constants.accountDeletedPageURL);
	}

	async checkURL()
	{
		await expect(this.page).toHaveURL(constants.accountDeletedPageURL);
	}

	async checkTitle()
	{
		await expect(this.page).toHaveTitle(constants.accountDeletedPageTitle);
	}
}