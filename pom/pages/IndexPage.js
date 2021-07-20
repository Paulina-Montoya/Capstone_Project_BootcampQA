import { Selector } from 'testcafe'

class indexPage {
    constructor(){
        this.indexLoginButton = Selector ('._2q_cf')
    }
}

export default new indexPage