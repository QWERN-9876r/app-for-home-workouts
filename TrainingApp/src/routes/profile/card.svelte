
{#if user.programId || rerender }
<UserProgram/>
{:else}

{#if choice}
{#each programs as {name, src, id}}
<OneProgram {name} {src} {id} {setRerender} />
{/each}
{:else}
<button on:click={getPrograms}>Выбрать программу тренировок</button>
{/if}
{/if}
<script>
    import OneProgram from "./oneProgram.svelte"
    import UserProgram from "./userProgram.svelte"
    import { serverUrl } from '../../staticData'
    import { user } from "../../staticData"

    const setRerender = value => rerender = value
    let choice = false,
     programs
    $: rerender = setRerender(false)
    
    function getPrograms() {
        fetch(`${serverUrl}/programs`)
        .then(res => res.json())
        .then(value => {
            programs = value
            choice = true
        })
        
    }
    
</script>