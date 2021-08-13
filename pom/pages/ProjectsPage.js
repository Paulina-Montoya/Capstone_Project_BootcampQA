import { Selector, t } from 'testcafe'

class projectsPage {
    constructor(){
        //Project page
        this.projectOptionsButton = Selector('button[aria-label="Project options menu"]')
        this.editProjectButton = Selector('.icon_menu_item__content').withText('Edit project')
        this.deleteProjectButton = Selector('.icon_menu_item__content').withText('Delete project')
        //Modal edit project
        this.projectNameInput = Selector('#edit_project_modal_field_name')
        this.projectColorDropdown = Selector('.color_dropdown_toggle')
        this.addToFavoritesCheckbox = Selector('.reactist_switch')
        this.cancelButton = Selector('.ist_button').withText('Cancel')
        //Modal delete project
        this.deleteButton = Selector('.ist_button.ist_button_red').withText('Delete')
    }

    async validateProject(name, color, favorite){
        await t
            .click(this.projectOptionsButton)
            .click(this.editProjectButton)
        const projectValues = {
            name: await this.projectNameInput.value,
            color: await this.projectColorDropdown.innerText,
            favorite: await this.addToFavoritesCheckbox.hasClass('reactist_switch--checked')
        }
        if (projectValues.name == name && color == projectValues.color && projectValues.favorite == favorite){
            return favorite
        } else {
            return false
        }
    }

    async deleteProject(){
        await t
            .click(this.cancelButton)
            .click(this.projectOptionsButton)
            .click(this.deleteProjectButton)
            .click(this.deleteButton)
    }
}

export default new projectsPage