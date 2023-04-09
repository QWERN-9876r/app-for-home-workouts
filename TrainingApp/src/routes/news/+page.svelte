<div style="padding-bottom: 70px;">
{#each news as news}
<span style="display: none;">{listUpdate = news.listUpdates}</span>

    <section>
        <h1>{news.title}</h1>
        <div>{news.text}</div>
        <br>
        <ol>
            {#each listUpdate as listUpdate }
                <li>{listUpdate}</li>
            {/each}
        </ol>
        <br>
        <time datetime={news.date.replaceAll('.', '_')} >{news.date}</time>
    </section>
{/each}
</div>

<script>
    import { serverUrl } from '../../staticData'
    import { onMount } from "svelte"
    
    let news = new Array(),
     listUpdate

    onMount(() => {
        fetch(`${serverUrl}/news`)
            .then(res => res.json())
                .then(newNews => news = newNews)
    })

</script>