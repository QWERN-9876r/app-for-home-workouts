<main>
    <section>
        <h1>Регистрация</h1>
        <input type="text" placeholder="имя" bind:value={name} on:input={() => {if ( incorrect() ) { name = '' }}} >
        <input type="password" placeholder="пароль" bind:value={password}>
        <button on:click={ register }>Зарегистрироваться</button>
        {#if error}
            <p>Пользователь с именем {name} уже существует</p>
        {/if }
    </section>
</main>

<script>
    import { serverUrl, setUser } from "../../staticData"

    let name = '',
     password = '',
     error = false

    const incorrect = () => !isNaN(Number(name[0])) || name[0] === '-' || name[0] === '=' || name[0] === '+',
     register = () => {
        fetch(`${serverUrl}/register?username=${name}&password=${password}`).then(
            res => {
                if (res.ok) {
                    error = false
                    return res.json()
                } else {
                    error = true
                }
            }
        ).then( user => {
            if ( user[0] ) {
                error = true
                return
            }
            setUser(user)
            location = "/"
        } )
        
    }
</script>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90vh;
    }
    input {
        border: none;
        border-bottom: 1px rgb(58, 58, 163) solid;
        font-size: 20px;
        padding: 5px;
        outline: none;
        display: block;
    }
    input + input {
        margin-top: 10px;
    }
    
    button {
        background-color: rgb(58, 58, 163);
        border: none;
        border-radius: 0.5em;
        padding: 0.5em;
        font-size: 20px;
        margin-top: 10px;
        float: right;
    }
    p {
        color: red;
        font-weight: 700;
    }
</style>