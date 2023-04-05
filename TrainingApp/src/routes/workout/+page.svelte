{#if isRelax}
<Relax/>

{:else}
{#if exercises.length && plan.length}
<section>
    
    <header> 
        <Header {i} quanity={plan[0].length} />
    </header>

    <main>
        <Main exercise={exercises[plan[0][i].id]} quanitityOrTime={plan[0][i].quantity}
         quantity={plan[0][i].quantity || plan[0][i].times} {further} />
    </main>

    {#if plan[0].length - 1 > i }
    {#if plan[0][i].quantity}
    <button on:click={ further }> >> </button>
    {/if}
    {:else}
    <button on:click={ () => { location = '/' } }>Завершить</button>
    {/if}
    

</section>
{:else}
<Loading/>
{/if}
{/if}

<script>
    import Header from "./header.svelte"
    import Main from "./Main.svelte"
    import Loading from "../loading.svelte"
    import Relax from "../relax.svelte"
    import { serverUrl, user } from "../../staticData"

    let plan = new Array(),
     exercises = new Array(),
     i = 0,
     isRelax = false
    const further = () => {
        isRelax = true
        setTimeout(() => {
            isRelax = false
            i++
        }, 30000)
    }

    fetch( `${serverUrl}/startTraining?id=${user.programId}`)
    .then( res => res.json() )
    .then( training => {
        [ plan, exercises ] = training
    } )

    

</script>
<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    header {
        margin-bottom: 15vh;
    }
    button {
        font-size: 35px;
        padding: 10px;
        border-radius: 10px;
    }
    
</style>