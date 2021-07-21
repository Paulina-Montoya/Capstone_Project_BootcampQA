import dotenv from 'dotenv'
dotenv.config() 
 
export const URLS = {
    INDEX_URL: process.env.BASE_URL,
    INDEX_URL_TODAY: 'https://todoist.com/app/today'
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