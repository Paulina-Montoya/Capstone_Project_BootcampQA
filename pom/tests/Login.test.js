import { ClientFunction } from 'testcafe'
import { URLS, CREDENTIALS } from '../data/Constants'
import homePage from '../pages/HomePage'
import loginPage from '../pages/LogInPage'
import { STANDARD_USER_ROLE } from '../data/Roles'

fixture ('Login form test cases')
    .page `${URLS.HOME_URL}`
    .beforeEach(async t =>{
        await t.click(homePage.homePageLoginButton)
        await t.click(loginPage.checkboxKeepLoggedin)
    })

//Role test case
test.meta('suite','smoke')('User login successfully with an standar role', async t => {
    const getLocation = ClientFunction(() => document.location.href)
    await t.useRole(STANDARD_USER_ROLE)
       
    await t.expect(getLocation()).contains(URLS.HOME_URL+'app/today')
    })

test.meta('suite','smoke')('User login unsuccess because of wrong email', async t => {
    await loginPage.logingSuccess(null,null)
    
    await t.expect(loginPage.messageInvalidAddress.exists).ok
    })

test.meta('suite','smoke')('User login unsuccess because of wrong password', async t => {
    await loginPage.logingSuccess(CREDENTIALS.INVALID_USER.PASSWORD,CREDENTIALS.SUCCESS_USER.PASSWORD)
                
    await t.expect(loginPage.messageInvalidEmail.exists).ok
    })

test('User login unsuccess because of blank password input', async t => {
    await loginPage.logingSuccess(CREDENTIALS.SUCCESS_USER.USERNAME,null)
        
    await t.expect(loginPage.messageBlankPassword.exists).ok
    })