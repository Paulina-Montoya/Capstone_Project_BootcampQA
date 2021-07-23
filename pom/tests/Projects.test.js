import { URLS, CREDENTIALS } from '../data/Constants'
import homePage from '../pages/HomePage'
import loginPage from '../pages/LogInPage'
import projectsPage from '../pages/ProjectsPage'

fixture('Create projects test cases')
    .page `${URLS.HOME_URL}`
    .beforeEach(async t =>{
        await t.click(homePage.homePageLoginButton)
        await t.click(loginPage.checkboxKeepLoggedin)
        await loginPage.logingSuccess(CREDENTIALS.SUCCESS_USER.USERNAME,CREDENTIALS.SUCCESS_USER.PASSWORD)
    })

test.meta('suite','smoke')('User create correctly a new project', async t => {
    await t
    .expect(projectsPage.burgerMenu.exists).ok()
    .click(projectsPage.addProject)
    .typeText(projectsPage.nameProjectInput,'New project test', {paste:true})
    .click(projectsPage.colorProject)
    .click(projectsPage.colorViolet)
    .click(projectsPage.buttonAddProject)

    await t.expect(projectsPage.namePorjectCreated.exists).ok
    })