import { Selector, t } from 'testcafe'

class basePage {
    constructor(){
        this.avatarMenu = Selector('.user_avatar.big.settings_avatar')
        this.burgerMenu = Selector('button[aria-label="Main.menu"]')
        this.menuTodayButton = Selector('.item_content').withText('Today')
        this.menuInboxButton = Selector('#filter_inbox')
        this.searchBar = Selector('.quick_find__input')
        //Projects
        this.favoriteListItem = Selector('.sidebar_expansion_panel.expansion_panel.expansion_panel--expanded').withText('Favorites').find('[data-type="project_list_item"]')
    }

    async openMenu(){
    await t
    .expect(this.burgerMenu.exists).ok()
    }
}

export default new basePage