const devUrl = "http://localhost:5000"

export const BASE_URL = devUrl

export const AppRoutes = {
    register: BASE_URL + "/api/auth/register",
    login: BASE_URL + "/api/auth/login",
    getMyInfo: BASE_URL + "/api/auth/myInfo"
}   