import { URLS, CREDENTIALS } from '../data/Constants'
import homePage from '../pages/HomePage'
import loginPage from '../pages/LogInPage'
import todayPage from '../pages/TodayPage'

fixture('Create tasks test cases')
    .page `${URLS.HOME_URL}`
    .beforeEach(async t =>{
        await t.click(homePage.homePageLoginButton)
        await t.click(loginPage.checkboxKeepLoggedin)
        await loginPage.logingSuccess(CREDENTIALS.SUCCESS_USER.USERNAME,CREDENTIALS.SUCCESS_USER.PASSWORD)
    })

test('User create correctly a new task with a today date', async t => {
    await t
    .click(todayPage.addTaskButton)
    .typeText(todayPage.titleText,'Title tests 1', {paste:true})
    .click(todayPage.sumitTask)

    await t.expect(todayPage.todayTaskCreated.exists).ok
    })