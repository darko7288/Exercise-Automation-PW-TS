import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./Page";
import * as constants from "../Constants";

export class AccessPage extends AbstractPage
{
	readonly loginBox: Locator;
	readonly loginBanner: Locator;
	readonly loginEmailInput: Locator;
	readonly loginPasswordInput: Locator;
	readonly loginButton: Locator;
	readonly signupBox: Locator;
	readonly signupBanner: Locator;
	readonly signupNameInput: Locator;
	readonly signupEmailInput: Locator;
	readonly signupButton: Locator;
	readonly separator: Locator;

	constructor(page: Page)
	{
		super(page);
		this.loginBox = page.locator(".login-form");
		this.loginBanner = page.getByText("Login to your account");
		this.loginEmailInput = page.getByTestId("login-email");
		this.loginPasswordInput = page.getByTestId("login-password");
		this.loginButton = page.getByTestId("login-button");
		this.signupBox = page.locator(".signup-form");
		this.signupBanner = page.getByText("New User Signup!");
		this.signupNameInput = page.getByTestId("signup-name");
		this.signupEmailInput = page.getByTestId("signup-email");
		this.signupButton = page.getByTestId("signup-button");
		this.separator = page.getByText("OR", { exact: true });
	}

	async visit()
	{
		await this.page.goto(constants.accessPageURL);
	}

	async checkURL()
	{
		await expect(this.page).toHaveURL(constants.accessPageURL);
	}

	async checkTitle()
	{
		await expect(this.page).toHaveTitle(constants.accessPageTitle);
	}

	async checkContent()
	{
		await expect(this.loginBanner).toHaveText(constants.loginBannerText);
		await expect(this.loginEmailInput).toBeVisible();
		expect(await this.loginEmailInput.getAttribute("placeholder")).toBe(constants.loginEmailInputPlaceholder);
		await expect(this.loginPasswordInput).toBeVisible();
		expect(await this.loginPasswordInput.getAttribute("placeholder")).toBe(constants.loginPasswordInputPlaceholder);
		await expect(this.loginButton).toBeVisible();
		await expect(this.loginButton).toHaveText(constants.loginButtonText);

		await expect(this.signupBanner).toHaveText(constants.signupBannerText);
		await expect(this.signupNameInput).toBeVisible();
		expect(await this.signupNameInput.getAttribute("placeholder")).toBe(constants.signupNameInputPlaceholder);
		await expect(this.signupEmailInput).toBeVisible();
		expect(await this.signupEmailInput.getAttribute("placeholder")).toBe(constants.signupEmailInputPlaceholder);
		await expect(this.signupButton).toBeVisible();
		await expect(this.signupButton).toHaveText(constants.signupButtonText);

		await expect(this.separator).toHaveText(constants.separatorText);
	}

	async login()
	{
		await this.loginButton.click();
	}

	async signup()
	{
		await this.signupButton.click();
	}

	async inputLoginEmail(email: string)
	{
		await this.loginEmailInput.fill(email);
	}

	async inputLoginPassword(password: string)
	{
		await this.loginPasswordInput.fill(password);
	}

	async inputSignupName(name: string)
	{
		await this.signupNameInput.fill(name);
	}

	async inputSignupEmail(email: string)
	{
		await this.signupEmailInput.fill(email);
	}
}