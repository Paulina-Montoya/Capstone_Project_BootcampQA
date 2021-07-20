import { URLS, CREDENTIALS } from '../data/Constants'
import indexPage from '../pages/IndexPage.js'
import loginPage from '../pages/LogInPage.js'
import todayPage from '../pages/TodayPage.js'


fixture ('Login form test cases')
    .page `${URLS.INDEX_URL}`
   
.beforeEach(async t =>{
    await t.click(indexPage.indexLoginButton)
})

test('User login successfully', async t => {
    await t
        .typeText(loginPage.emailInput, CREDENTIALS.USER_SUCCESS.USERNAME)
        .typeText(loginPage.passwordInput, CREDENTIALS.USER_SUCCESS.PASSWORD)
        .click(loginPage.loginButton)
        .expect(todayPage.userAvatar.exists).ok
    })

test('User login unsuccessfully', async t => {
    await t
        .typeText(loginPage.emailInput, CREDENTIALS.USER_INVALID.USERNAME)
        .typeText(loginPage.passwordInput, CREDENTIALS.USER_INVALID.PASSWORD)
        .click(loginPage.loginButton)
        .expect(todayPage.userAvatar.exists).ok
    })