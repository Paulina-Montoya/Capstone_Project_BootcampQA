import { Selector } from 'testcafe'

class projectsPage {
    constructor(){
        this.burgerMenu = Selector('.left_menu_toggle.top_bar_btn').find('.menu_icon')
        this.addProject = Selector('.adder_icon')
        this.nameProjectInput = Selector('#edit_project_modal_field_name')
        this.colorProject = Selector('.color_dropdown_toggle.form_field_control')
        this.colorViolet = Selector('.color_dropdown_select__name').withText('Violet')
        this.buttonAddProject = Selector('.ist_button.ist_button_red')
        this.namePorjectCreated = Selector('span[class="simple_content"]').withText('New project test')
    }
}

export default new projectsPage