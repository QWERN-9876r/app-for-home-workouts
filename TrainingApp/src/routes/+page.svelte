<title>News and sprort</title>

{#if user && user.programId}
<h2>{ user.language ? translations.get('startWorkout').get(user && user.language ? user.language : 'Русский') : 'Начать тренировку'}</h2>
<a class="start" href="/workout" >{translations.get('start').get(user && user.language ? user.language : 'Русский')}</a>
{/if}

<h1 class="RecomendationText">{translations.get('news').get(user && user.language ? user.language : 'Русский')} :</h1>
<News/>
<a href="/news">{translations.get('moreNews').get(user && user.language ? user.language : 'Русский')}</a>
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
