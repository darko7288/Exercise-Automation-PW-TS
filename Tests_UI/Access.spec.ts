import { test } from "@playwright/test";
import { AccessPage } from "../UI/Pages/AccessPage";
import * as constants from "../UI/Constants";

test.describe.only("New user registration.", () =>
{
	let accessPage: AccessPage;

	test.beforeEach(async({page}) => 
	{
		accessPage = new AccessPage(page);

		await page.goto(constants.accessPageURL);
	});

	test("Registration with valid credentials.", async() =>
	{
		await accessPage.checkContent();
		await accessPage.inputSignupName(constants.name);
		await accessPage.inputSignupEmail(constants.email);
		await accessPage.signup();
	});

	test("Registration attempt with invalid email.", async() =>
	{
		await accessPage.checkContent();
		await accessPage.inputSignupName(constants.name);
		await accessPage.inputSignupEmail(constants.invalidEmail);
		await accessPage.signup();
	});
});

test.describe("Existing user login.", async() =>
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
		await accessPage.inputLoginEmail(constants.email);
		await accessPage.inputLoginPassword(constants.password);
		await accessPage.login();
	});

	test("Login User with invalid email.", async() =>
	{
	});

	test("Login User with incorrect email.", async() =>
	{
	});

	test("Login User with incorrect password.", async() =>
	{
	});

	test("Login User without credential input.", async() =>
	{
	});
});