import { Selector, t } from 'testcafe'
import { MESSAGES } from '../data/Constants'

class loginPage {
    constructor(){
        this.loginFormTitle = Selector ('.login_signup_form content')
        this.emailInput = Selector ('#email')
        this.passwordInput = Selector ('#password')
        this.loginButton = Selector ('button').withExactText('Log in')
        this.messageInvalidAddress = Selector ('span').withExactText(MESSAGES.LOGIN.INVALIDEMAIL)
        this.messageInvalidEmail = Selector ('span').withExactText(MESSAGES.LOGIN.INVALIDPASSWORD)
        this.messageBlankPassword = Selector ('span').withExactText(MESSAGES.LOGIN.BLANKPASSWORD)
        this.checkboxKeepLoggedin = Selector ('#permanent_login')
    }

    async logingSuccess(username, password ){

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