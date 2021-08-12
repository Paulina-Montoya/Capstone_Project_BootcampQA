import { URLS, CREDENTIALS, NUMBERS, TITLE_TASK } from '../data/Constants'
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
        await t.click(basePage.menuInboxButton)
        await tasksPage.deleteAllTasks()
        await t.expect(tasksPage.todayTaskCreated.exists).notOk()
    })
    .afterEach(async t =>{
        await t.click(basePage.menuInboxButton)
        await tasksPage.deleteAllTasks()
        await t.wait(NUMBERS.TIME_TO_WAIT)
    })

test('User create correctly ten tasks', async t => {
    await t.click(basePage.menuTodayButton)
    await tasksPage.createMultipleTask(TITLE_TASK.TODAY_TASKS, NUMBERS.TOTAL_TASKS)
    await t.expect(await tasksPage.validateMultipleTasks(TITLE_TASK.TODAY_TASKS, NUMBERS.TOTAL_TASKS)).ok()
    })

test.meta('suite','smoke')('User create correctly a new task with a today date', async t => {
    await t.click(basePage.menuTodayButton)
    await tasksPage.createTask(TITLE_TASK.TODAY_SINGLE_TASK)
    await t.expect(tasksPage.todayTaskCreated.exists).ok()
    })

test.meta('suite','smoke')('User create correctly a new task with a tomorrow date', async t => {
    await tasksPage.createTomorrowTask(TITLE_TASK.TOMORROW_TASK)
    await t.expect(tasksPage.tomorrowTaskCreatedInbox.exists).ok()
    })