import { Selector, t } from 'testcafe'

class basePage {
    constructor(){
        this.burgerMenu = Selector('button[aria-label="Main.menu"]')
        this.menuInboxButton = Selector('#filter_inbox')
    }

    async openMenu(){
    await t
    .expect(this.burgerMenu.exists).ok()
    }
}

export default new basePage