import { URLS, CREDENTIALS } from '../data/Constants'
import homePage from '../pages/HomePage'
import loginPage from '../pages/LogInPage'
import tasksPage from '../pages/TasksPage'

fixture('Create tasks test cases')
    .page `${URLS.HOME_URL}`
    .beforeEach(async t =>{
        await t.click(homePage.homePageLoginButton)
        await t.click(loginPage.checkboxKeepLoggedin)
        await loginPage.logingSuccess(CREDENTIALS.SUCCESS_USER.USERNAME,CREDENTIALS.SUCCESS_USER.PASSWORD)
    })

test.meta('suite','smoke')('User create correctly a new task with a today date', async t => {
    await t
    .click(tasksPage.addTaskButton)
    .typeText(tasksPage.titleText,'Title today test', {paste:true})
    .click(tasksPage.sumitTask)

    await t.expect(tasksPage.todayTaskCreated.exists).ok
    })