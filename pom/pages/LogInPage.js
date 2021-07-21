import { Selector, t } from 'testcafe'

class loginPage {
    constructor(){
        this.loginFormTitle = Selector ('.login_signup_form content')
        this.emailInput = Selector ('#email')
        this.passwordInput = Selector ('#password')
        this.loginButton = Selector ('button').withText('Log in')
        this.messageInvalidAddress = Selector ('span').withText('Invalid email address.')
        this.messageInvalidEmail = Selector ('span').withText('Wrong email or password.')
        this.messageBlankPassword = Selector ('span').withText('Blank password.')
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