import dotenv from 'dotenv'
dotenv.config() 
 
export const URLS = {
    HOME_URL: process.env.BASE_URL
}

export const CREDENTIALS = {
    SUCCESS_USER:{
        USERNAME:process.env.USER_SUCCESS,
        PASSWORD:process.env.PASSWORD_SUCCESS
    },
    INVALID_USER:{
        USERNAME:'invalid_user_email',
        PASSWORD:'invalid_password'
    }
}

export const MESSAGES = {
    LOGIN:{
        INVALIDEMAIL:'Invalid email address.',
        INVALIDPASSWORD:'Wrong email or password.',
        BLANKPASSWORD:'Blank password.'
    }
}

export const NUMBERS = {
    TIME_TO_WAIT: 5000,
    TOTAL_TASKS: 10
}

export const TITLE_TASK = {
    TODAY_TASKS: 'Lorem ipsum CURRENT MOMENT',
    TODAY_SINGLE_TASK: 'Lorem ipsum CURRENT SINGLE MOMENT',
    TOMORROW_TASK: 'Lorem ipsum FUTURE MOMENT'
}

export const CREATE_PROJECT = {
    NAME: 'Lorem ipsum PROJECT',
    COLOR: 'Violet',
    FAVORITE: true
}

export const CREATE_INVALID_PROJECT = {
    NAME: 'Lorem ipsum',
    COLOR: 'Red',
    FAVORITE: false
}