import { URLS, CREDENTIALS } from '../data/Constants'
import homePage from '../pages/HomePage'
import loginPage from '../pages/LogInPage'
import tasksPage from '../pages/TasksPage'
import basePage from '../pages/BasePage'


fixture('Create tasks test cases')
    .page `${URLS.HOME_URL}`
    .beforeEach(async t =>{
        await t.click(homePage.homePageLoginButton)
        await t.click(loginPage.checkboxKeepLoggedin)
        await loginPage.logingSuccess(CREDENTIALS.SUCCESS_USER.USERNAME,CREDENTIALS.SUCCESS_USER.PASSWORD)
    })

    test.meta('suite','smoke')('User create correctly ten tasks', async t => {
        const number= ["1","2","3","4","5","6","7","8","9","10","11"];       

        await tasksPage.createMultipleTask('Title task '+number[0])
        await tasksPage.createMultipleTask('Title task '+number[1])
        await tasksPage.createMultipleTask('Title task '+number[2])
        await tasksPage.createMultipleTask('Title task '+number[3])
        await tasksPage.createMultipleTask('Title task '+number[4])
        await tasksPage.createMultipleTask('Title task '+number[5])
        await tasksPage.createMultipleTask('Title task '+number[6])
        await tasksPage.createMultipleTask('Title task '+number[7])
        await tasksPage.createMultipleTask('Title task '+number[8])
        await tasksPage.createMultipleTask('Title task '+number[9])

        await t.expect(tasksPage.todayTaskCreated.innerText).eql('Title task 10');
        await t.click(tasksPage.deleteTaskButton)
    })


    test('User create correctly a new task with a today date', async t => {
        await t.click(tasksPage.deleteTaskButton)
        await tasksPage.createTask('Title task')
        
        await t.expect(tasksPage.todayTaskCreated.innerText).contains('Title task');
    })

    test('Delete a single task', async t => {
        await tasksPage.delete(tasksPage.deleteTaskButton)

        await t.expect(tasksPage.taskCompleted.innerText).ok
    })

    test.meta('suite','smoke')('User create correctly a new task with a tomorrow date', async t => {
        await tasksPage.createTomorrowTask('Create a future task')
        await t.click(basePage.menuInboxButton)

        await t.expect(tasksPage.tomorrowTaskCreatedInbox.exists).ok
        })