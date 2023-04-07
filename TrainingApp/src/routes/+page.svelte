<title>News and sprort</title>

{#if user}
<h2>{ user.language ? translations.get('startWorkout').get(user.language) : 'Начать тренировку'}</h2>
<a class="start" href="/workout" >Начнем</a>
{/if}

<h1 class="RecomendationText">{translations.get('news').get(user.language)} :</h1>
<News/>
<a href="/news">Больше новостей</a>
<script>
    import News from "./news.svelte"
	import { user } from "../staticData"
	import translations from '../translation'

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
