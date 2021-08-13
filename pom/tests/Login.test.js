import { URLS, CREDENTIALS, MESSAGES, NUMBERS } from '../data/Constants'
import homePage from '../pages/HomePage'
import loginPage from '../pages/LogInPage'
import todayPage from '../pages/TodayPage'
import { STANDARD_USER_ROLE } from '../data/Roles'

fixture('Login form test cases')
    .page `${URLS.HOME_URL}`
    .beforeEach(async t =>{
        await t.click(homePage.homePageLoginButton)
        await t.click(loginPage.keepLoggedInCheckbox)
    })
    .afterEach(async t =>{
        await t.wait(NUMBERS.TIME_TO_WAIT)
    })

test.meta('suite','smoke')('User login successfully with an standar role', async t => {
    await t.useRole(STANDARD_USER_ROLE)
    await t.expect(todayPage.todayTitle.exists).ok()
    })

test('User login unsuccess because of wrong email', async t => {
    await loginPage.loginSuccess(null,null)
    await t.expect(loginPage.errorMessage.innerText).contains(MESSAGES.LOGIN.INVALIDEMAIL)
    })

test.meta('suite','smoke')('User login unsuccess because of wrong password', async t => {
    await loginPage.loginSuccess(CREDENTIALS.SUCCESS_USER.USERNAME,CREDENTIALS.INVALID_USER.PASSWORD)   
    await t.expect(loginPage.errorMessage.innerText).eql(MESSAGES.LOGIN.INVALIDPASSWORD)
    })

test('User login unsuccess because of blank password input', async t => {
    await loginPage.loginSuccess(CREDENTIALS.SUCCESS_USER.USERNAME,null)
    await t.expect(loginPage.errorMessage.innerText).eql(MESSAGES.LOGIN.BLANKPASSWORD)
    })