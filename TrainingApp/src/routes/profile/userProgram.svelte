<div class="programBlock" style="background-image: url({src});" >
    <h3 class="programName">{getProgramName()}</h3>
    <button class="programBtn">{translations.get('showPlan').get( user.language || 'Русский' )}</button>
</div>

<script>
    import { onMount } from "svelte"
    import { serverUrl, user } from "../../staticData"
    import translations from "../../translation"
    
    let name, src

    $: getProgramName = () => {
        if ( name )
        return user.language ? name[user.language] : name['Русский']
        
        return ''
    }
    
    onMount(() => {
        fetch(`${serverUrl}/program?id=${user.programId}`)
        .then( res => res.json() )
        .then( program => {
            name = program.name
            console.log(name)
            src = program.src
        } )
    })
    
</script>
<style>
    .programBtn {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    .programBlock {
        position: relative;
        width: 90vw;
        max-width: 400px;
        height: 200px;
        border-radius: 10px;
        background-size: cover;
    }
    .programName {
        color: white;
    }
</style>