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
        await t.expect(basePage.searchBar.exists).ok()
        await tasksPage.deleteAllTasks()
        await t.expect(tasksPage.todayTaskCreated.exists).notOk()
    })

test('User create correctly ten tasks', async t => {
    await tasksPage.createMultipleTask('Title task ', 10)
    await t.expect(await tasksPage.countTasks()).eql(10)
    await t.wait(5000)
    })

test.meta('suite','smoke')('User create correctly a new task with a today date', async t => {
    await tasksPage.createTask('Title task')
    await t.expect(tasksPage.todayTaskCreated.innerText).contains('Title task')
    })

test.meta('suite','smoke')('User create correctly a new task with a tomorrow date', async t => {
    await t.click(basePage.menuInboxButton)
    await tasksPage.deleteAllTasks()
    await tasksPage.createTomorrowTask('Create a future task')
    await t.expect(tasksPage.tomorrowTaskCreatedInbox.exists).ok
    })