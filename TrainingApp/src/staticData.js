export const serverUrl = 'http://localhost:5000'
export let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
if ( user ) delete user.password
export const setUser = value => {
    user = value
    delete user.password
    localStorage.setItem('user', JSON.stringify(value))
}