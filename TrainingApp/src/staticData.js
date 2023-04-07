export const serverUrl = 'http://localhost:5000'
let person
try {
    if ( localStorage ) {
        person = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    } else {
        person = null
    }
} catch {
    person = null
}

if ( person ) delete person.password
export let user = person
export const setUser = value => {
    user = value
    delete user.password
    if ( localStorage.length ) localStorage.setItem('user', JSON.stringify(value))
}
