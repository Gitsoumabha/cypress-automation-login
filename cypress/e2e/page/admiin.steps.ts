import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { adminPage } from "./admin-page";
import { LoginPage } from "./login-page";

const AdminPage = new adminPage();
const loginPage = new LoginPage();

Given("I visit the login page", () => {
    loginPage.launchApp();
  });

When("I used the valid credentials", () => {
    loginPage.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'));
  });

Then("Go to the admin menu", () => {
    AdminPage.verifyAdmin();
});


