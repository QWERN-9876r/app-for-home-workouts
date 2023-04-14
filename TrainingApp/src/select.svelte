<button class="select" on:click={ShowOptions} style={ showOptions ? '' : `background-image: url(${optionNow.src})`}></button>
{ #if showOptions }
{ #if options.length > 3}
<div  class="options">
    {#each options as {src, value}}
    <button on:click={() => { setOptionNow({value, src}); ShowOptions() }}> <div class="icon" style="background-image: url({src})" alt="" > </button>
    {/each}
</div>
{/if}
{/if}

<script>
    export let options
    export let optionNow
    export let setOptionNow

    let showOptions = false,
     index = 0

    const ShowOptions = () => {
        if ( options.length > 3 ) {
            showOptions = !showOptions
        } else {
            
            if ( index < options.length - 1 ) {
                index++
            } else {
                index = 0
            }
            
            setOptionNow(options[index])
        }
    }
</script>

<style>
    .select {
        cursor: pointer;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        border: 1px solid grey;
        position: absolute;
        background-size: cover;
        background-position: center;
    }
    .icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
    }
    .options {
        display: flex;
        flex-direction: column;
        position: absolute;
        align-items: center;
        justify-content: space-between;
    }
    button {
        background: none;
        padding: 0;

    }
</style>