import { Selector } from 'testcafe'

class todayPage {
    constructor(){
        this.todayWelcome = Selector ('span').withText('Today')
        this.addNewTaskComponent = Selector ('.task_list_item__body')
        this.topBarMenu = Selector ('#top_bar_inner')
        this.addTaskButton = Selector ('.plus_add_button')
        this.titleText = Selector ('div[class="task_editor__content_field no-focus-marker"]')
        this.sumitTask = Selector ('button').withExactText('Add task')
        this.todayTaskCreated = Selector ('div').withExactText('Title tests 1')    
        //this.todayTaskCreated = Selector ('div[class="markdown_content task_content"]').withExactText('Title tests 1098')
    }
}

export default new todayPage