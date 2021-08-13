import { Selector, t } from 'testcafe'

class loginPage {
    constructor(){
        //Login form
        this.emailInput = Selector ('#email')
        this.passwordInput = Selector ('#password')
        this.loginButton = Selector ('button').withExactText('Log in')
        this.keepLoggedInCheckbox = Selector ('#permanent_login')
        //Error messages
        this.errorMessage = Selector ('.error_msg')
    }

    async loginSuccess(username, password ){

        if (username != null) {
            await t.typeText(this.emailInput, username, {paste:true})
        }
        if (password != null){
            await t.typeText(this.passwordInput, password, {paste:true})
        }
        await t.click(this.loginButton)
    }
}

export default new loginPage