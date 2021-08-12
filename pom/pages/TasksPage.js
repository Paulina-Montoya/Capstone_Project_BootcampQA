import { Selector, t } from 'testcafe'
import { NUMBERS } from '../data/Constants'

class tasksPage {
    constructor(){
        //Comun elements to create taks
        this.addTaskButton = Selector('.plus_add_button')
        this.titleText = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.taskListItem = Selector('.task_list_item__content__wrapper')
        this.taskTitleListItem = Selector('.markdown_content.task_content')
        this.sumitTask = Selector('.reactist_button.reactist_button--primary')
        this.todayTaskCreated = Selector('.markdown_content.task_content')
        this.cancelCreateTask = Selector('.reactist_button.reactist_button--secondary')
        //Tomorrow test
        this.tomorrowTaskButton =Selector('.item_due_selector.icon_pill')
        this.tomorrowCalendarButton =Selector('.scheduler-suggestions-item').withText('Tomorrow')
        this.tomorrowTaskCreatedInbox =Selector('.date.date_tom').withText('Tomorrow')
        //Delete function
        this.moreMenuButton=Selector('button[data-testid="more_menu"]')
        this.deleteTaskButton=Selector('.menu_item.icon_menu_item.danger_menu')
        this.submitDeletButtonPopoUp=Selector('.ist_button.ist_button_red')
    }
    
    async deleteAllTasks(){
        const totalTasks = await this.todayTaskCreated.count
        const taskNumber = 0
        if ( totalTasks != taskNumber ){
            for (let i = 0; i < totalTasks; i++) {
                await t
                .hover(this.todayTaskCreated)
                .click(this.moreMenuButton)       
                .click(this.deleteTaskButton)
                .click(this.submitDeletButtonPopoUp)    
            }
        }
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

    async countTasks(){
        const countTasksCreated = await this.todayTaskCreated.count
        return countTasksCreated
    }

    async createTask(titleName){
        await t
        .click(this.addTaskButton)
        .typeText(this.titleText,titleName, {paste:true})
        .click(this.sumitTask)
        .click(this.cancelCreateTask)
    }

    async delete(item){
        if (item != null){
            await t.click(this.deleteTaskButton)
        }
    }

    async createTomorrowTask(titleName){
        await t
        .click(this.addTaskButton)
        .click(this.tomorrowTaskButton)
        .click(this.tomorrowCalendarButton)
        .typeText(this.titleText,titleName, {paste:true})
        .click(this.sumitTask)
        .click(this.cancelCreateTask)
    }
}

export default new tasksPage