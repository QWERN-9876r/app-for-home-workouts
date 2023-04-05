
<img src={exercise.src} alt="">
<h3>{ kol(quantity) }</h3>

<h1>{exercise[user.language || 'Русский']}</h1>

<script>
    export let exercise
    export let quanitityOrTime
    export let quantity
    export let further
    let user = JSON.parse(localStorage.getItem('user')) || null
    const kol = quantity => {
        if ( quanitityOrTime ) { if (user && user.language === 'English') {
            return quantity + ' times'
        }else {
            return quantity + ' раз'
        } }
        else if ( user && user.language === 'English' ) {
            return quantity + ' seconds'
        } else {
            return quantity + ' секунд'
        }
    }
    const finallExercises = () => {
        if ( !quantity ) {
            further()
        }
        clearInterval(intervalId)
    }
    const intervalId = setInterval( () => !quanitityOrTime && quantity  ?quantity-- : finallExercises(), 1000)
</script>

<style>
    img {
        width: 100vw;
        max-height: 80vh;
    }
    h1 {
        display: flex;
        justify-content: center;
    }
    h3 {
        display: flex;
        justify-content: center;
    }
</style>