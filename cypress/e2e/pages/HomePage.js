class HomePage{

    elements = {
        homeLink: () => cy.getBySel("sidenav-home"),
        myAccountLink: () => cy.getBySel("sidenav-user-settings"),
        bankAccountLink:() => cy.getBySel("sidenav-bankaccounts"),
        newBtn: () => cy.get('a[href*="transaction/new"]'),  
        signoutLink: () => cy.getBySel("sidenav-signout"),
        createAccountlink:() => cy.getBySel('bankaccount-new'),
 

    }

    newTransaction(payment){


        this.elements.newBtn().click();
        cy.getBySel("user-list-search-input").type(payment.payTo, { force: true })
        cy.intercept("GET", "/users/search*").as("usersSearch");
        cy.getBySel("users-list").first({timeout:2000}).click();
        cy.wait("@usersSearch");
        cy.get('input[id=amount]').type(payment.amount);
        cy.get('input[id=transaction-create-description-input]').type(payment.description);
        cy.contains('Pay', { matchCase: false }).click();

        cy.getBySel("transaction-create-submit-request").click();
        cy.intercept("POST", "/transactions").as("createTransaction");
        //cy.wait('@createTransaction').its('response.statusCode').should('eq', 200)


    }

    returnToTransaction(){
        cy.getBySel("new-transaction-return-to-transactions").click();

    }

    assertAlertBar(){
        cy.getBySel("alert-bar-success")
            .should("be.visible")
            .and("have.text", "Transaction Submitted!");
    }

    newAccount(account){
        this.elements.bankAccountLink().click();
        this.elements.createAccountlink().click();
        cy.get('input[name=bankName]').type(account.bankName)
        cy.get('input[name=routingNumber]').type(account.routingNumber)
        cy.get('input[name=accountNumber]').type(account.accountNumber)
        cy.getBySel("bankaccount-submit").click();
    }

    assertAccountCreated(account){
        cy.getBySel("bankaccount-list-item")
        .should("have.length", 2)
        .eq(1)
        .should("contain",account.bankName);
    }  

    deleteAccount(){
        cy.getBySel("delete").first().click();
        cy.getBySel("list-item").children().contains("Deleted");

    }

}
export const homePage= new HomePage();