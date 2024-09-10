

import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from '../../e2e/pages/LoginPage';
import { homePage } from '../../e2e/pages/HomePage';
import { faker } from '@faker-js/faker';


Given(`Login page is open`, () => {

     cy.visit('http://localhost:3000/signin')


    //  cy.visit("https://coforma.io/careers",

    //   {
    //          headers: {
    //             'accept': 'application/json, text/plain, */*',
    //              'user-agent': 'axios/0.27.2'
    //          },
    //      //failOnStatusCode: false,
    //    });
    });


    Then(`Login to bank`, () => {

        loginPage.enterUsername("Reyes.Osinski")
        loginPage.enterPassword("s3cret")
        loginPage.elements.loginBtn().should('be.enabled')
        loginPage.clickLoginButton()

    });


Then(`create new transcation and assert transaction is submitted`, () => {
    const payment = {
        payTo: "Ted",
        amount: "75",
        description: "Dinner",
      };
    homePage.newTransaction(payment);
    homePage.returnToTransaction();
    homePage.assertAlertBar();

});

Then(`create new account`, () => {

    const account = {
        bankName: "Priya Bhardwaj",
        accountNumber: "75123456790",
        routingNumber: "996645387"
      };

      homePage.newAccount(account);
});

Then(`Logout`, () => {
homePage.elements.signoutLink().click();
});

