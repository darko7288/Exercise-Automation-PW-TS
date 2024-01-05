import { expect, Locator, Page } from "@playwright/test";
import * as constants from "../Constants";

export class NavigationBar
{
	readonly page: Page;
	readonly homeButton: Locator;
	readonly productsButton: Locator;
	readonly cartButton: Locator;
	readonly signupButton: Locator;
	readonly contactButton: Locator;

	constructor(page: Page)
	{
		this.page = page;
		this.homeButton = page.getByText(constants.homeButtonText);
		this.productsButton = page.getByText(constants.productsButtonText);
		this.cartButton = page.getByText(constants.cartButtonText);
		this.signupButton = page.getByText(constants.signupButtonText);
		this.contactButton = page.getByText(constants.contactButtonText);
	}

	//TO DO: Finish this test step.
	async checkContent()
	{
		await expect(this.homeButton).toBeVisible();
		await expect(this.homeButton).toContainText(constants.homeButtonText);

		await expect(this.productsButton).toBeVisible();
		await expect(this.productsButton).toContainText(constants.productsButtonText);

		await expect(this.cartButton).toBeVisible();
		await expect(this.cartButton).toContainText(constants.cartButtonText);

		await expect(this.signupButton).toBeVisible();
		await expect(this.signupButton).toContainText(constants.signupLoginButtonText);

		await expect(this.contactButton).toBeVisible();
		await expect(this.contactButton).toContainText(constants.contactButtonText);
	}

	async goToHome()
	{
		await this.homeButton.click();
	}

	async goToProducts()
	{
		await this.productsButton.click();
	}

	async goToCart()
	{
		await this.cartButton.click();
	}

	async goToSignup()
	{
		await this.signupButton.click();
	}

	async goToContact()
	{
		await this.contactButton.click();
	}
}