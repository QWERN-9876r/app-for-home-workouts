{#if listUpdate}
        <section>
            <h1>{news.title}</h1>
            <div>{news.text}</div>
            <br>
            <ol>
                {#each listUpdate as listItem }
                    <li>{listItem}</li>
                {/each}
            </ol>
            <br>
            <time datetime={news.date.replaceAll('.', '_')} >{news.date}</time>
        </section>
{:else}
    <Loading/>
{/if}
<script>
    import { onMount } from "svelte"
    import Loading from "./loading.svelte"
    import { serverUrl } from "../staticData";

    let listUpdate,
     news = new Object(null)
     
    onMount(() => {
        fetch(`${serverUrl}/news`)
            .then(res => res.json())
                .then(NewNews => {
                    news = NewNews[0]
                    listUpdate = NewNews[0].listUpdates
                })
    })
</script>

<style>

</style>