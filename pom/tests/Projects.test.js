import { URLS, CREDENTIALS, NUMBERS, CREATE_PROJECT } from '../data/Constants'
import homePage from '../pages/HomePage'
import loginPage from '../pages/LogInPage'
import basePage from '../pages/BasePage'
import projectsPage from '../pages/ProjectsPage'

fixture('Create projects test cases')
    .page `${URLS.HOME_URL}`
    .beforeEach(async t =>{
        await t.click(homePage.homePageLoginButton)
        await t.click(loginPage.keepLoggedInCheckbox)
        await loginPage.loginSuccess(CREDENTIALS.SUCCESS_USER.USERNAME,CREDENTIALS.SUCCESS_USER.PASSWORD)
    })
    .afterEach(async t =>{
        await projectsPage.deleteProject()
        await t.wait(NUMBERS.TIME_TO_WAIT)
    })

test.meta('suite','smoke')('User create correctly a new favorite project', async t => {
    await t.click(basePage.addProjectButton)
    await basePage.createFavoriteProject(CREATE_PROJECT.NAME, CREATE_PROJECT.COLOR, CREATE_PROJECT.FAVORITE)
    await t.click(basePage.favoriteListItem.withText(CREATE_PROJECT.NAME))
    await t.expect(await projectsPage.validateProject(CREATE_PROJECT.NAME, CREATE_PROJECT.COLOR, CREATE_PROJECT.FAVORITE)).ok()
})