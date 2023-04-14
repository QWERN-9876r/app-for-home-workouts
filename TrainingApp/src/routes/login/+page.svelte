<main>
    <section>
        <div class="select">
            <Select {options} {optionNow} {setOptionNow} />
        </div>
        <h1>{translations.get('logIn').get( optionNow.value)}</h1>
        <input type="text" placeholder={translations.get('name').get( optionNow.value)} bind:value={name}>
        <input type="password" placeholder={translations.get('password').get( optionNow.value)} bind:value={password}>
        <div>
            <a href="register">{translations.get('noAccount').get( optionNow.value)}?</a>
            <button on:click={ login }>{translations.get('logIn').get( optionNow.value)} </button>
        </div>

        {#if error}
        <p class="error" >
            {#if typeof error === 'string'}
            {error}
            {:else}
            {translations.get('invalidUsernameOrPassword').get( optionNow.value)}
            {/if}
        </p>
        {/if }
        
    </section>

</main>

<script>
    import { serverUrl, setUser } from '../../staticData'
    import Select from '../../select.svelte'
    import translations from "../../translation"

    const options = [ { value: 'Русский', src: 'Русский.png' },
    { value: 'English', src: 'English.png' }, ],
     setOptionNow = value => optionNow = value
    let name = '',
     password = '',
     error = false
    $: optionNow = setOptionNow(options[0])
    
    const login = () => {
        try {
            fetch(`${serverUrl}/login?username=${name}&password=${password}`).then(
                res => {
                    if ( res.ok ) {
                        error = false
                        return res.json()
                    } else {
                        error = 'Ошибка отправки данных'
                    }
                }
            ).then( value => {
                if ( value[0].name ) {
                    setUser(value[0])
                    location = "/"
                } else {
                    error = true
                }
            } )
            if ( !error && !localStorage.getItem('user') ) error = 'Ошибка отправки данных'
        } catch {
            error = 'Ошибка отправки данных'
        }
        
        
    }
</script>

<style>
    section {
        position: relative;
    }
    div {
        display: flex;
        justify-content: space-between;
    }
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
    .error {
        color: red;
        font-weight: 700;
    }
    a {
        text-decoration: underline;
        color: blue;
        align-self: center;
    }
    .select {
        position: absolute;
        top: 0;
        right: 25px;
    }
</style>