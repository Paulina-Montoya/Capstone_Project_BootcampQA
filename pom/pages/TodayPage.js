import { Selector } from 'testcafe'

class todayPage {
    constructor(){
        //Today page
        this.todayTitle = Selector('.simple_content').withText('Today')
    }
}

export default new todayPage