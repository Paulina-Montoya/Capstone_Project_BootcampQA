import { Selector,t } from 'testcafe'

class inboxPage {
    constructor(){
        //Inbox create tasks
        this.titleTextInput = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.tomorrowTaskTag = Selector('.date.date_tom').withText('Tomorrow')
        this.scheduleButton = Selector('.item_due_selector.icon_pill')
        this.tomorrowCalendarButton = Selector('.scheduler-suggestions-item').withText('Tomorrow')
        this.addTaskButton = Selector('.plus_add_button')
        this.taskTitleListItem = Selector('.markdown_content.task_content')
        //Modal create task
        this.titleTextInput = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.addTaskModalButton = Selector('.reactist_button.reactist_button--primary')
        this.cancelTaskModalButton = Selector('.reactist_button.reactist_button--secondary')
        //Delete tasks
        this.moreMenuButton = Selector('button[data-testid="more_menu"]')
        this.deleteTaskButton = Selector('.menu_item.icon_menu_item.danger_menu')
        this.submitDeletModalButton = Selector('.ist_button.ist_button_red')
    }

    async deleteAllTasks(){
        const totalTasks = await this.taskTitleListItem.count
        const taskNumber = 0
        if ( totalTasks != taskNumber ){
            for (let i = 0; i < totalTasks; i++) {
                await t
                .hover(this.taskTitleListItem)
                .click(this.moreMenuButton)       
                .click(this.deleteTaskButton)
                .click(this.submitDeletModalButton)    
            }
        }
    }

    async createTask(titleName){
        await t
        .click(this.addTaskButton)
        .typeText(this.titleTextInput,titleName, {paste:true})
        .click(this.addTaskModalButton)
        .click(this.cancelTaskModalButton)
    }

    async createMultipleTask(titleName, numberOfTasks){
        for (let i = 0; i < numberOfTasks; i++) {
            await this.createTask(titleName+i)
        }        
    }

    async validateMultipleTasks(titleName, numberOfTasks){
        for (let i = 0; i < numberOfTasks; i++) {
            await t.expect(this.taskTitleListItem.nth(i).innerText).contains(titleName + i)
        }
        return true
    }

    async createTomorrowTask(titleName){
        await t
        .click(this.addTaskButton)
        .click(this.scheduleButton)
        .click(this.tomorrowCalendarButton)
        .typeText(this.titleTextInput,titleName, {paste:true})
        .click(this.addTaskModalButton)
        .click(this.cancelTaskModalButton)
    }
}

export default new inboxPage