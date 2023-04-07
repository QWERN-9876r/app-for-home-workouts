<h2>{translations.get('itWas').get(user.language)}:</h2>
{#each preKeys as objectKey}
    <div class="parametr">
        {#if user[objectKey.key]}
        {objectKey.text}: {user[objectKey.key]}
        {:else}
        {objectKey.text}
        <input bind:value={objectKey.value} type="number" min="1" max="3000">
        <button on:click={() => {change(objectKey.key, objectKey.value)}} >
            {translations.get('send').get(user.language)} </button>
        {/if}
    </div>
    
{/each}

<h2>{translations.get('hasBecome').get(user.language)}:</h2>
{#each keys as objectKey}
<div class="parametr">
    {#if user[objectKey.key]}
    {objectKey.text}: {user[objectKey.key]}
    <button on:click={() => {user[objectKey.key] = false}}>
        {translations.get('change').get(user.language)} </button>
    {:else}
    {objectKey.text}
    <input bind:value={objectKey.value} type="number"
      min="1" max="3000">
    <button on:click={() => {change(objectKey.key, objectKey.value)}}>
        {translations.get('send').get(user.language)} </button>
    {/if}
</div>

{/each}
<script>
    import { user, serverUrl, setUser } from "../../staticData"
    import translations from "../../translation"

    const preKeys = [ {key: 'startWeight' , 
    text: translations.get('weight').get(user.language), value: ''},
    { key: 'kolPush-ups', 
    text: translations.get('kolPush-ups').get(user.language), value: '' } ],
     keys = [ {key: 'weight' , 
     text: translations.get('weight').get(user.language), value: ''},
     { key: 'StartKolPush-ups', text: translations.get('kolPush-ups').get(user.language), value: '' }  ],
     change = ( key, value ) => {
        user[key] = value
        fetch( `${serverUrl}/change?username=${user.name}&key=${key}&value=${value}` )
        .then( res => res.json() )
        .then( newUser => {
            setUser(newUser)
        } )
    }
</script>
<style>
    
    input {
        padding: 0.25em;
        font-size: 20px;
        border-radius: 0.5em;
        width: 50vw;
        max-width: 200px;
    }
    .parametr {
        margin-bottom: 5px;
    }
    
</style>