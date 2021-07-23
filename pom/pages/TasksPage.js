import { Selector } from 'testcafe'

class tasksPage {
    constructor(){
        this.todayWelcome = Selector('span').withText('Today')
        this.addNewTaskComponent = Selector('.task_list_item__body')
        this.topBarMenu = Selector('#top_bar_inner')
        this.addTaskButton = Selector('.plus_add_button')
        this.titleText = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.sumitTask = Selector('button').withExactText('Add task')
        this.todayTaskCreated = Selector('.task_list_item').withText('Title today test')
        this.tomorrowTaskButton = Selector('.item_due_selector.icon_pill')
        this.tomorrowCalendarButton = Selector('.scheduler-suggestions-item')
        this.menuTopBar = Selector('.left_menu_toggle.top_bar_btn')
        this.menuTopBarInbox = Selector('#filter_inbox')    
    }
}

export default new tasksPage