import { ClientFunction } from 'testcafe'
import { URLS, CREDENTIALS } from '../data/Constants'
import homePage from '../pages/HomePage.js'
import loginPage from '../pages/LogInPage.js'


fixture ('Login form test cases')
    .page `${URLS.INDEX_URL}`
   
.beforeEach(async t =>{
    await t.click(homePage.homePageLoginButton)
    await t.click(loginPage.checkboxKeepLoggedin)
})

test('User login successfully', async t => {
    const getLocation = ClientFunction(() => document.location.href)
    await loginPage.logingSuccess(CREDENTIALS.SUCCESS_USER.USERNAME,CREDENTIALS.SUCCESS_USER.PASSWORD)
   
    await t.expect(getLocation()).contains(URLS.INDEX_URL_TODAY)
    })

test('User login unsuccess with both null values', async t => {
    await loginPage.logingSuccess(null,null)
    
    await t.expect(loginPage.messageInvalidAddress.exists).ok
    })

test('User login unsuccess because of blank password input', async t => {
    await loginPage.logingSuccess(CREDENTIALS.SUCCESS_USER.USERNAME,null)
        
    await t.expect(loginPage.messageBlankPassword.exists).ok
    })

test('User login unsuccess because of wrong email', async t => {
    await loginPage.logingSuccess(CREDENTIALS.INVALID_USER.PASSWORD,CREDENTIALS.SUCCESS_USER.PASSWORD)
            
    await t.expect(loginPage.messageInvalidEmail.exists).ok
    })