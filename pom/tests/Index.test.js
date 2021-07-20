import { URLS } from '../data/Constants'
import indexPage from '../pages/IndexPage.js'
import loginPage from '../pages/LogInPage.js'


fixture ('Index page test')
    .page `${URLS.INDEX_URL}`

test('The user goes from the index page to the login form', async t => {
    await t 
        .click(indexPage.indexLoginButton)
        .expect(loginPage.loginFormTitle.exists).ok
})