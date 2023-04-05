{#if listUpdate}
        <section>
            <h1>{news.title}</h1>
            <div>{news.text}</div>
            <br>
            <ol>
                {#each listUpdate as list }
                    <li>{list}</li>
                {/each}
            </ol>
            <br>
            <div>{news.date}</div>
        </section>
{:else}
    <Loading/>
{/if}
<script>
    import { onMount } from "svelte"
    import Loading from "./loading.svelte"
    import { serverUrl } from "../staticData";

    let listUpdate

    let news = new Object(null);
    onMount(() => {
        fetch(`${serverUrl}/news`)
            .then(res => res.json())
                .then(val => {
                    news.title = val[0].title
                    news.text = val[0].text
                    news.date = val[0].date
                    listUpdate = val[0].listUpdates
                });
    })
</script>

<style>

</style>