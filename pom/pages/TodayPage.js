import { Selector } from 'testcafe'

class todayPage {
    constructor(){
        this.todayWelcome = Selector('span').withText('Today')
        this.addNewTaskComponent = Selector('.task_list_item__body')
        this.topBarMenu = Selector('#top_bar_inner')
        this.addTaskButton = Selector('.plus_add_button')
        this.titleText = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.sumitTask = Selector('button').withExactText('Add task')
        this.todayTaskCreated = Selector('.task_list_item').withText('Title tests 1')    
    }
}

export default new todayPage