import { Selector } from 'testcafe'

class todayPage {
    constructor(){
        this.userAvatar = Selector ('.user_avatar big settings_avatar')
    }
}

export default new todayPage