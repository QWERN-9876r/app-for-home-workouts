<title>News and sprort</title>

{#if user}
<h2>Начать тренировку</h2>
<a class="start" href="/workout" >Начнем</a>
{/if}

<h1 class="RecomendationText">Новости:</h1>
<News/>
<a href="/news">Больше новостей</a>
<script>
    import News from "./news.svelte"
	import { user } from "../staticData"
</script>
<style>
    .start {
        color: rgb(239, 238, 242);
		text-decoration: none;
		background-color: rgb(27, 27, 207);
		border-radius: 0.5em;
		padding: 1em;
		cursor: pointer;
		border: none;
		margin-left: 5px;
    }
</style>