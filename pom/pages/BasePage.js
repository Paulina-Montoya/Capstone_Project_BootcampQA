import { Selector, t } from 'testcafe'

class basePage {
    constructor(){
        //Left menu main buttons
        this.menuTodayButton = Selector('.item_content').withText('Today')
        this.menuInboxButton = Selector('#filter_inbox')
        //Projects
        this.addProjectButton = Selector('.adder_icon')
        this.favoriteListItem = Selector('.sidebar_expansion_panel.expansion_panel.expansion_panel--expanded').withText('Favorites').find('[data-type="project_list_item"]')
        //Modal add project change to basepage
        this.nameProjectInput = Selector('#edit_project_modal_field_name')
        this.colorProjectSelect = Selector('.color_dropdown_toggle.form_field_control')
        this.colorVioletOption = Selector('.color_dropdown_select__name')
        this.favoriteProjectCheckbox = Selector('input[name="is_favorite"]')
        this.favoriteProjectChecked = Selector('.reactist_switch.reactist_switch--checked')
        this.addProjectModalButton = Selector('.ist_button.ist_button_red')
    }

    async createFavoriteProject(name, color, favorite){
        await t
            .typeText(this.nameProjectInput,name, {paste:true})
            .click(this.colorProjectSelect)
            .click(this.colorVioletOption.withText(color))
        if (favorite == true){
            await t.click(this.favoriteProjectCheckbox)
        }
        await t.click(this.addProjectModalButton)

    }
}

export default new basePage