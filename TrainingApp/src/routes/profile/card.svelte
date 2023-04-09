
{#if user.programId || rerender }
<UserProgram/>
{:else}

{#if choice}
{#each programs as {name, src, id}}
<OneProgram {name} {src} {id} {setRerender} />
{/each}
{:else}
<button on:click={getPrograms}>{translations.get('chooseProgram').get(user.language || 'Русский')}</button>
{/if}
{/if}
<script>
    import OneProgram from "./oneProgram.svelte"
    import UserProgram from "./userProgram.svelte"
    import { serverUrl, user } from '../../staticData'
    import translations from "../../translation"

    const setRerender = value => rerender = value
    let choice = false,
     programs
    $: rerender = setRerender(false)
    
    const getPrograms = () => {
        fetch(`${serverUrl}/programs`)
        .then(res => res.json())
        .then(value => {
            programs = value
            choice = true
        })
        
    }
    
</script>