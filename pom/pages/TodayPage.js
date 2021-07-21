import { Selector } from 'testcafe'

class todayPage {
    constructor(){
        this.todayWelcome = Selector ('span').withText('Today')
        this.addNewTaskComponent = Selector ('.task_list_item__body')
        this.topBarMenu = Selector ('#top_bar_inner')
    }
}


export default new todayPage