import { Role } from 'testcafe'
import { URLS, CREDENTIALS } from './Constants'
import loginPage from '../pages/LogInPage'

export const STANDARD_USER_ROLE = Role(URLS.HOME_URL+'users/showlogin', async t => {
    await loginPage.loginSuccess(CREDENTIALS.SUCCESS_USER.USERNAME,CREDENTIALS.SUCCESS_USER.PASSWORD)
}, { preserveUrl: true })