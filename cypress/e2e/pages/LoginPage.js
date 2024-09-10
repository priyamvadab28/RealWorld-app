class LoginPage{

    elements = {
        userNameTextBox: () => cy.get('input[id=username]'),
        passWordTextBox: () => cy.get('input[id=password]'),
        loginBtn: () => cy.get('button[type=submit]'),   
    }

    enterUsername(username){

        this.elements.userNameTextBox().type(username)
    }

    enterPassword(password){

        this.elements.passWordTextBox().type(password)
    }

    clickLoginButton() {
        this.elements.loginBtn().click({force:true});
      }
    
}

export const loginPage= new LoginPage();