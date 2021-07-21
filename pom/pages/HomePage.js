import { Selector } from 'testcafe'

class homePage {
    constructor(){
        this.homePageLoginButton = Selector ('a').withText('Log in')
    }
}

export default new homePage