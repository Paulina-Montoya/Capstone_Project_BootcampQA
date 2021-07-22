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