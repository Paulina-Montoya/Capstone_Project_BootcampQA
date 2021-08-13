import { Selector, t } from 'testcafe'

class basePage {
    constructor(){
        //Upper menu
        this.avatarMenu = Selector('.user_avatar.big.settings_avatar')
        //Left menu main buttons
        this.menuTodayButton = Selector('.item_content').withText('Today')
        this.menuInboxButton = Selector('#filter_inbox')
        //Projects
        this.addProjectButton = Selector('.adder_icon')
        this.favoriteListItem = Selector('.sidebar_expansion_panel.expansion_panel.expansion_panel--expanded').withText('Favorites').find('[data-type="project_list_item"]')
    }
}

export default new basePage