import { Selector, t } from 'testcafe'
import { NUMBERS } from '../data/Constants'


class projectsPage {
    constructor(){
        //Menu projects
        this.burgerMenu = Selector('.left_menu_toggle.top_bar_btn').find('.menu_icon')
        this.addProject = Selector('.adder_icon')
        this.nameProjectInput = Selector('#edit_project_modal_field_name')
        this.colorProject = Selector('.color_dropdown_toggle.form_field_control')
        this.colorViolet = Selector('.color_dropdown_select__name')
        this.buttonAddProject = Selector('.ist_button.ist_button_red')
        this.namePorjectCreated = Selector('span[class="simple_content"]').withText('New project test')
        this.favoriteProjectCheckbox = Selector('input[name="is_favorite"]')
        this.favoriteProjectChecked = Selector('.reactist_switch.reactist_switch--checked')
        //Menu favorite projects
        this.projectOptionsMenuButton = Selector('button[aria-label="More project actions"]')
        this.editProjectButton = Selector('.icon_menu_item__content').withText('Edit project')
        //Modal edit project
        this.projectNameInput = Selector('#edit_project_modal_field_name')
        this.projectColorDropdown = Selector('.color_dropdown_toggle')
        this.addToFavoritesCheckbox = Selector('.reactist_switch')
    }
    
    async createProject(name, color, favorite){
        const favoriteValue = this.favoriteProjectChecked
        await t
        .expect(this.burgerMenu.exists).ok()
        .click(this.addProject)
        .typeText(this.nameProjectInput,name, {paste:true})
        .click(this.colorProject)
        .click(this.colorViolet.withText(color))
        .click(this.favoriteProjectCheckbox)
        if (favoriteValue){
            await t.click(this.buttonAddProject)
            return favorite
        }
    }

    async validateProject(name, color, favorite=false){
        const favoriteFlag = favorite
        await t
            .click(this.projectOptionsMenuButton)
            .click(this.editProjectButton)
            .wait(NUMBERS.TIME_TO_WAIT)
        const projectValues = {
            name: await this.projectNameInput.value,
            color: await this.projectColorDropdown.innerText,
            favorite: await this.addToFavoritesCheckbox.hasClass('reactist_switch--checked')
        }
        if (projectValues.name == name && color == projectValues.color && projectValues.favorite == favorite){
            return true
        } else {
            return false
        }
    }
}

export default new projectsPage