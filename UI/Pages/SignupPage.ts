import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./Page";
import * as constants from "../Constants";

export class SignupPage extends AbstractPage
{
	readonly accountInformationBanner: Locator;
	readonly titleBanner: Locator;
	readonly title1stOptionLabel: Locator;
	readonly title2ndOptionLabel: Locator;
	readonly mrRadioButton: Locator;
	readonly mrsRatioButton: Locator;
	readonly nameLabel: Locator;
	readonly nameInput: Locator;
	readonly emailLabel: Locator;
	readonly emailInput: Locator;
	readonly passwordLabel: Locator;
	readonly passwordInput: Locator;
	readonly dateOfBirthLabel: Locator;
	readonly dateofBirthDayDropdown: Locator;
	readonly dateofBirthMonthDropdown: Locator;
	readonly dateofBirthYearDropdown: Locator;
	readonly newsletterCheckbox: Locator;
	readonly specialOffersCheckbox: Locator;
	readonly addressInformationBanner: Locator;
	readonly firstNameLabel: Locator;
	readonly firstNameInput: Locator;
	readonly lastNameLabel: Locator;
	readonly lastNameInput: Locator;
	readonly companyLabel: Locator;
	readonly companyInput: Locator;
	readonly addressLabel: Locator;
	readonly addressInput: Locator;
	readonly address2Label: Locator;
	readonly address2Input: Locator;
	readonly countryLabel: Locator;
	readonly countryDropdown: Locator;
	readonly stateLabel: Locator;
	readonly stateInput: Locator;
	readonly cityLabel: Locator;
	readonly cityInput: Locator;
	readonly zipcodeLabel: Locator;
	readonly zipcodeInput: Locator;
	readonly mobileNumberLabel: Locator;
	readonly mobileNumberInput: Locator;
	readonly createAccountButton: Locator;

	constructor(page: Page)
	{
		super(page);
		this.accountInformationBanner = page.getByText(constants.accountInformationBannerText);
		this.titleBanner = page.getByText(constants.titleLabelText);
		this.title1stOptionLabel = page.locator("[for=\"id_gender1\"]");
		this.title2ndOptionLabel = page.locator("[for=\"id_gender2\"]");
		this.mrRadioButton = page.locator("#id_gender1");
		this.mrsRatioButton = page.locator("#id_gender2");
		this.nameLabel = page.getByText(constants.nameLabelText);
		this.nameInput = page.getByTestId("name");
		this.emailLabel = page.getByText(constants.emailLabelText);
		this.emailInput = page.getByTestId("email");
		this.passwordLabel = page.getByText(constants.passwordLabelText);
		this.passwordInput = page.getByTestId("password");
		this.dateOfBirthLabel = page.getByText(constants.dateOfBirthLabelText);
		this.dateofBirthDayDropdown = page.getByTestId("days");
		this.dateofBirthMonthDropdown = page.getByTestId("months");
		this.dateofBirthYearDropdown = page.getByTestId("years");
		this.newsletterCheckbox = page.locator("#newsletter");
		this.specialOffersCheckbox = page.locator("#optin");
		this.addressInformationBanner = page.getByText(constants.addressInformationBannerText);
		this.firstNameLabel = page.getByText(constants.firstNameLabelText);
		this.firstNameInput = page.getByTestId("first_name");
		this.lastNameLabel = page.getByText(constants.lastNameLabelText);
		this.lastNameInput = page.getByTestId("last_name");
		this.companyLabel = page.getByText(constants.companyLabelText);
		this.companyInput = page.getByTestId("company");
		this.addressLabel = page.getByText(constants.addressLabelText);
		this.addressInput = page.getByTestId("address");
		this.address2Label = page.getByText(constants.address2LabelText);
		this.address2Input = page.getByTestId("address2");
		this.countryLabel = page.getByText(constants.countryLabelText);
		this.countryDropdown = page.getByTestId("");
		this.stateLabel = page.getByText(constants.stateLabelText);
		this.stateInput = page.getByTestId("state");
		this.cityLabel = page.getByText(constants.cityLabelText);
		this.cityInput = page.getByTestId("city");
		this.zipcodeLabel = page.getByText(constants.zipcodeLabelText);
		this.zipcodeInput = page.getByTestId("zipcode");
		this.mobileNumberLabel = page.getByText(constants.mobileNumberLabelText);
		this.mobileNumberInput = page.getByTestId("mobile_number");
		this.createAccountButton = page.getByTestId("create-account");
	}

	async visit()
	{
		await this.page.goto(constants.signupPageURL);
	}

	async checkURL()
	{
		await expect(this.page).toHaveURL(constants.signupPageURL);
	}

	async checkTitle()
	{
		await expect(this.page).toHaveTitle(constants.signupPageTitle);
	}

	async checkContent(name: string, email: string)
	{
		await expect(this.accountInformationBanner).toBeVisible();
		await expect(this.accountInformationBanner).toHaveText(constants.accountInformationBannerText.toUpperCase());
		await expect(this.titleBanner).toBeVisible();
		await expect(this.titleBanner).toHaveText(constants.titleLabelText);
		await expect(this.title1stOptionLabel).toBeVisible();
		await expect(this.title1stOptionLabel).toHaveText(constants.title1stOptionLabelText);
		await expect(this.title2ndOptionLabel).toBeVisible();
		await expect(this.title2ndOptionLabel).toHaveText(constants.title2ndOptionLabelText);
		await expect(this.nameLabel).toBeVisible();
		await expect(this.nameLabel).toHaveValue(constants.nameLabelText);
		await expect(this.nameInput).toBeVisible();
		await expect(this.nameInput).toHaveValue(name);
		await expect(this.emailLabel).toBeVisible();
		await expect(this.emailLabel).toHaveValue(constants.nameLabelText);
		await expect(this.emailInput).toBeVisible();
		await expect(this.emailInput).toHaveValue(email);
		await expect(this.passwordLabel).toBeVisible();
		await expect(this.passwordLabel).toHaveValue(constants.passwordLabelText);
		await expect(this.passwordInput).toBeVisible();
		await expect(this.passwordInput).toBeEmpty();
		await expect(this.dateofBirthDayDropdown).toBeVisible();
		await expect(this.dateofBirthDayDropdown).toHaveValue(constants.day);
		await expect(this.dateofBirthMonthDropdown).toBeVisible();
		await expect(this.dateofBirthMonthDropdown).toHaveValue(constants.month);
		await expect(this.dateofBirthYearDropdown).toBeVisible();
		await expect(this.dateofBirthYearDropdown).toHaveValue(constants.year);
		await expect(this.newsletterCheckbox).toBeVisible();
		await expect(this.specialOffersCheckbox).toBeVisible();

		await expect(this.addressInformationBanner).toBeVisible();
		await expect(this.addressInformationBanner).toHaveText(constants.accountInformationBannerText.toUpperCase());
		await expect(this.firstNameLabel).toBeVisible();
		await expect(this.firstNameLabel).toHaveValue(constants.firstNameLabelText);
		await expect(this.firstNameInput).toBeVisible();
		await expect(this.firstNameInput).toBeEmpty();
		await expect(this.lastNameLabel).toBeVisible();
		await expect(this.lastNameLabel).toHaveValue(constants.lastNameLabelText);
		await expect(this.lastNameInput).toBeVisible();
		await expect(this.lastNameInput).toBeEmpty();
		await expect(this.companyLabel).toBeVisible();
		await expect(this.companyLabel).toHaveValue(constants.companyLabelText);
		await expect(this.companyInput).toBeVisible();
		await expect(this.companyInput).toBeEmpty();
		await expect(this.addressLabel).toBeVisible();
		await expect(this.addressLabel).toHaveValue(constants.addressLabelText);
		await expect(this.addressInput).toBeVisible();
		await expect(this.addressInput).toBeEmpty();
		await expect(this.address2Label).toBeVisible();
		await expect(this.address2Label).toHaveValue(constants.address2LabelText);
		await expect(this.address2Input).toBeVisible();
		await expect(this.address2Input).toBeEmpty();
		await expect(this.countryLabel).toBeVisible();
		await expect(this.countryLabel).toHaveValue(constants.address2LabelText);
		await expect(this.countryDropdown).toBeVisible();
		await expect(this.countryDropdown).toHaveValue(constants.india);
		await expect(this.stateLabel).toBeVisible();
		await expect(this.stateLabel).toHaveValue(constants.stateLabelText);
		await expect(this.stateInput).toBeVisible();
		await expect(this.stateInput).toBeEmpty();
		await expect(this.cityLabel).toBeVisible();
		await expect(this.cityLabel).toHaveValue(constants.cityLabelText);
		await expect(this.cityInput).toBeVisible();
		await expect(this.cityInput).toBeEmpty();
		await expect(this.zipcodeLabel).toBeVisible();
		await expect(this.zipcodeLabel).toHaveValue(constants.zipcodeLabelText);
		await expect(this.zipcodeInput).toBeVisible();
		await expect(this.zipcodeInput).toBeEmpty();
		await expect(this.mobileNumberLabel).toBeVisible();
		await expect(this.mobileNumberLabel).toHaveValue(constants.mobileNumberLabelText);
		await expect(this.mobileNumberInput).toBeVisible();
		await expect(this.mobileNumberInput).toBeEmpty();
		await expect(this.createAccountButton).toBeVisible();
		await expect(this.createAccountButton).toBeEnabled();
		await expect(this.createAccountButton).toHaveText(constants.signupButtonText);
	}

	async createAccount()
	{
		await this.createAccountButton.click();
	}

	async provideName(name: string)
	{
		await this.nameInput.fill(name);
	}

	async provideEmail(email: string)
	{
		await this.emailInput.fill(email);
	}

	async providePassword(password: string)
	{
		await this.passwordInput.fill(password);
	}

	async provideDayOfBirth(day: string)
	{
		await this.dateofBirthDayDropdown.selectOption(day);
	}

	async provideMonthOfBirth(month: string)
	{
		await this.dateofBirthMonthDropdown.selectOption(month);
	}

	async provideYearOfBirth(year: string)
	{
		await this.dateofBirthYearDropdown.selectOption(year);
	}

	async setNewsletterFlag(decision: boolean)
	{
		if (decision === true)
		{
			await this.newsletterCheckbox.check();
		}
		else if (decision === false)
		{
			await this.newsletterCheckbox.uncheck();
		}
		else
		{
			throw new Error(`Invalid argument: ${decision}`);
		}
	}

	async setSpecialOffersFlag(decision: boolean)
	{
		if (decision === true)
		{
			await this.specialOffersCheckbox.check();
		}
		else if (decision === false)
		{
			await this.specialOffersCheckbox.uncheck();
		}
		else
		{
			throw new Error(`Invalid argument: ${decision}`);
		}
	}

	async provideFirstName(firstName: string)
	{
		await this.firstNameInput.fill(firstName);
	}

	async provideLastName(lastName: string)
	{
		await this.lastNameInput.fill(lastName);
	}

	async provideAddress(address: string)
	{
		await this.addressInput.fill(address);
	}

	async provideAddress2(address2: string)
	{
		await this.address2Input.fill(address2);
	}

	async provideCountry(country: string)
	{
		await this.countryDropdown.selectOption(country);
	}

	async provideState(state: string)
	{
		await this.stateInput.fill(state);
	}

	async provideCity(city: string)
	{
		await this.cityInput.fill(city);
	}

	async provideZipcode(zipcode: string)
	{
		await this.zipcodeInput.fill(zipcode);
	}

	async provideMobileNumber(mobileNumber: string)
	{
		await this.mobileNumberInput.fill(mobileNumber);
	}
}