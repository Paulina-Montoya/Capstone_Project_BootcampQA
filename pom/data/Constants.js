import dotenv from 'dotenv'
dotenv.config() 
 
export const URLS = {
    INDEX_URL: process.env.BASE_URL
}

export const CREDENTIALS = {
    USER_SUCCESS:{
        USERNAME:process.env.USER_SUCCESS,
        PASSWORD:process.env.PASSWORD_SUCCESS
    },
    USER_INVALID:{
        USERNAME:'invalid_user_email',
        PASSWORD:'invalid_password'
    }
}