import { Selector } from 'testcafe'

class inboxPage {
    constructor(){
        this.tomorrowTaskTag = Selector('.date.date_tom').withText('Tomorrow')
    }
}

export default new inboxPage