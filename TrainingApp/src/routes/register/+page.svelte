<main>
    <section>
        <div class="select">
            <Select {options} {optionNow} {setOptionNow} />
        </div>
        <h1> { optionNow.value === 'Русский' ? 'Регистрация' : translations.get('register').get( optionNow.value )} </h1>
        <input type="text" placeholder={translations.get('name').get( optionNow.value)} bind:value={name} on:input={() => {if ( incorrect() ) { name = '' }}} >
        <input type="password" placeholder={translations.get('password').get( optionNow.value)} bind:value={password}>
        <button on:click={ register }>{translations.get('register').get( optionNow.value)}</button>
        {#if error}
            <p>{translations.get('AUserWithThisNameAlreadyExists').get( optionNow.value)}</p>
        {/if }
    </section>
</main>

<script>
    import { serverUrl, setUser } from "../../staticData"
    import Select from "../../select.svelte"
    import translations from "../../translation"

    const options = [ { value: 'Русский', src: 'Русский.png' },
    { value: 'English', src: 'English.png' }, ],
     setOptionNow = value => optionNow = value
    let name = '',
     password = '',
     error = false
    $: optionNow = setOptionNow(options[0])

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
    section {
        position: relative;
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
    p {
        color: red;
        font-weight: 700;
    }
    .select {
        position: absolute;
        top: 0;
        right: 25px;
    }
</style>