import { Selector } from 'testcafe'

class loginPage {
    constructor(){
        this.loginFormTitle = Selector ('.login_signup_form content')
        this.emailInput = ('#email')
        this.passwordInput = ('#password')
        this.loginButton = ('.submit_btn ist_button ist_button_red sel_login')
    }
}

export default new loginPage