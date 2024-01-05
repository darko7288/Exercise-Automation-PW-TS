// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";
import * as constants from "../Constants";

export class AccountCreatedPage extends AbstractPage
{
	readonly titleBanner: Locator;
	readonly continueButton: Locator;

	constructor(page: Page)
	{
		super(page);
		this.titleBanner = page.getByTestId("account-created");
		this.continueButton = page.getByTestId("continue-button");
	}

	async visit()
	{
		await this.page.goto(constants.accountCreatedPageURL);
	}

	async checkURL()
	{
		await expect(this.page).toHaveURL(constants.accountCreatedPageURL);
	}

	async checkTitle()
	{
		await expect(this.page).toHaveTitle(constants.accountCreatedPageTitle);
	}
}