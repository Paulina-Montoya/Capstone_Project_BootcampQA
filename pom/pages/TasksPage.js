import { Selector, t } from 'testcafe'

class tasksPage {
    constructor(){
        this.addTaskButton = Selector('.plus_add_button')
        this.titleText = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.sumitTask =Selector('.reactist_button.reactist_button--primary')
        this.todayTaskCreated = Selector('.markdown_content.task_content')
        this.tomorrowTaskButton = Selector('.item_due_selector.icon_pill')
        this.tomorrowCalendarButton = Selector('.scheduler-suggestions-item').withText('Tomorrow')
        this.deleteTaskButton =Selector('.task_checkbox.priority_1')
        this.taskCompleted =Selector('.text_holder').withText('1 task completed')
        this.tomorrowTaskCreatedInbox =Selector('.date date_tom').withText('Tomorrow')
    }

    async createMultipleTask(titleName){
        await this.createTask(titleName)
        await this.delete(this.deleteTaskButton)
    }

   async createTask(titleName){
        await t
        .click(this.addTaskButton)
        .typeText(this.titleText,titleName, {paste:true})
        .click(this.sumitTask)
        .setNativeDialogHandler(() => true)
        .click(this.sumitTask)
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
        .setNativeDialogHandler(() => true)
        .click(this.sumitTask)
    }
}

export default new tasksPage