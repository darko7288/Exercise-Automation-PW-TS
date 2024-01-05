import { test } from "@playwright/test";
import { NavigationBar } from "../Page_Object_Model/Components/NavigationBar";
import { SubscriptionBar } from "../Page_Object_Model/Components/SubscriptionBar";
import { AccessPage } from "../Page_Object_Model/Pages/AccessPage";
import { AccountCreatedPage } from "../Page_Object_Model/Pages/AccountCreatedPage";
import { HomePage } from "../Page_Object_Model/Pages/HomePage";
import { SignupPage } from "../Page_Object_Model/Pages/SignupPage";
import * as constants from "../Page_Object_Model/Constants";

test.describe.only("Signup functionality.", () =>
{
	let navigationBar: NavigationBar;
	let subscriptionBar: SubscriptionBar;
	let accessPage: AccessPage;
	let accountCreatedPage: AccountCreatedPage;
	let homePage: HomePage;
	let signupPage: SignupPage;

	test.beforeEach(async({page}) => 
	{
		navigationBar = new NavigationBar(page);
		subscriptionBar = new SubscriptionBar(page);
		accessPage = new AccessPage(page);
		accountCreatedPage = new AccountCreatedPage(page);
		homePage = new HomePage(page);
		signupPage = new SignupPage(page);

		await homePage.visit();

		//await navigationBar.checkContent();
		await homePage.checkURL();
		await homePage.checkTitle();
		//await homePage.checkContent();
		//await subscriptionBar.checkContent();
		
		await navigationBar.goToSignup();

		//await navigationBar.checkContent();
		//await accessPage.checkURL();
		//await accessPage.checkTitle();
		//await accessPage.checkContent();
		//await subscriptionBar.checkContent();
	});

	test("Registration attempt with invalid email.", async() =>
	{
		await accessPage.provideSignupName(constants.name);
		await accessPage.provideSignupEmail(constants.invalidEmail);
		await accessPage.signup();

		await accessPage.wait(2000);
		await accessPage.checkURL();
	});

	test("Registration with valid credentials.", async() =>
	{
		await accessPage.provideSignupName(constants.name);
		await accessPage.provideSignupEmail(constants.email);
		await accessPage.signup();

		//await navigationBar.checkContent();
		//await signupPage.checkURL();
		//await signupPage.checkTitle();
		//await signupPage.checkContent();
		//await subscriptionBar.checkContent();

		await signupPage.selectTitle(constants.mrOption);
		await signupPage.providePassword(constants.password);
		await signupPage.provideDayOfBirth("12");
		await signupPage.provideMonthOfBirth("April");
		await signupPage.provideYearOfBirth("1995");
		await signupPage.provideFirstName("Darko");
		await signupPage.provideLastName("Puhalo");
		await signupPage.provideCompany("Teec Nos Pos Trading Post");
		await signupPage.provideAddress("Highways 160 & 64");
		await signupPage.provideAddress2("Four Corners Area");
		await signupPage.provideCountry(constants.usa);
		await signupPage.provideState("Teec Nos Pos");
		await signupPage.provideCity("Arizona");
		await signupPage.provideZipcode("86514");
		await signupPage.provideMobileNumber("225-883");
		await signupPage.createAccount();

		await accessPage.wait(2000);

		//await navigationBar.checkContent();
		await accountCreatedPage.checkURL();
		await accountCreatedPage.checkTitle();
		//await accountCreatedPage.checkContent();
		//await subscriptionBar.checkContent();
	});

	test("Registration attempt with email that is already in use.", async() =>
	{
		await accessPage.provideSignupName(constants.name);
		await accessPage.provideSignupEmail(constants.email);
		await accessPage.signup();

		await accessPage.checkErrorMessage("Email Address already exist!");
	});
});

test.describe("Login functionality.", async() =>
{
	let accessPage: AccessPage;

	test.beforeEach(async({page}) => 
	{
		accessPage = new AccessPage(page);

		await page.goto(constants.accessPageURL);
	});

	test("Login User with valid credentials.", async() =>
	{
		await accessPage.checkContent();
		await accessPage.provideLoginEmail(constants.email);
		await accessPage.provideLoginPassword(constants.password);
		await accessPage.login();
	});

	test("Login User with invalid email.", async() =>
	{
		await accessPage.checkContent();
		await accessPage.provideLoginEmail(constants.invalidEmail);
		await accessPage.provideLoginPassword(constants.password);
		await accessPage.login();
	});

	test("Login User with incorrect email.", async() =>
	{
		await accessPage.checkContent();
		await accessPage.provideLoginEmail(constants.incorrectEmail);
		await accessPage.provideLoginPassword(constants.password);
		await accessPage.login();
	});

	test("Login User with incorrect password.", async() =>
	{
		await accessPage.checkContent();
		await accessPage.provideLoginEmail(constants.email);
		await accessPage.provideLoginPassword(constants.incorrectPassword);
		await accessPage.login();
	});

	test("Login User without credential input.", async() =>
	{
		await accessPage.checkContent();
		await accessPage.login();
	});
});