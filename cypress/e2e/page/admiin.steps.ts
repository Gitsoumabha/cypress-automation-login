import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { adminPage } from "./admin-page";

const adminPage = new adminPage();

Given("Go to the admin menu", () => {
    adminPage.verifyAdmin()
});


