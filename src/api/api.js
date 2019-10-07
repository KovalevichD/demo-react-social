import Axios from "axios";

const instanse = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '11b3587c-edd9-4e89-8b99-017a8bf84804'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 15) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { return response.data })
    },

    followUser(userId) {
        return instanse.post(`follow/${userId}`).then(response => { return response.data })
    },

    unfollowUser(userId) {
        return instanse.delete(`follow/${userId}`).then(response => { return response.data })
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instanse.get('profile/' + userId).then(response => { return response.data })
    },

    getStatus(userId) {
        return instanse.get('profile/status/' + userId).then(response => { return response.data })
    },

    updateStatus(status) {
        return instanse.put('profile/status', { status: status }).then(response => { return response.data })
    },

    updateImage(image) {
        const formData = new FormData();
        formData.append("image", image);
        return instanse.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instanse.put('profile', profile).then(response => { return response.data })
    }
}
export const authAPI = {
    authMe() {
        return instanse.get('auth/me').then(response => { return response.data })
    },

    login(email, password, rememberMe = false) {
        return instanse.post('auth/login', { email: email, password: password, rememberMe: rememberMe }).then(response => { return response.data })
    },

    logout() {
        return instanse.delete('auth/login').then(response => { return response.data })
    }
}