<div class="programBlock" style="background-image: url({src});" >
    <h3 class="programName">{name}</h3>
    <button class="programBtn">Смотреть план</button>
</div>

<script>
    import { onMount } from "svelte"
    import { serverUrl } from "../../staticData"
    import { user } from "../../staticData"

    let name, src
    onMount(() => {
        fetch(`${serverUrl}/program?id=${user.programId}`)
        .then( res => res.json() )
        .then( program => {
            name = program.name
            src = program.src
        } )
    })
    
</script>
<style>
    .programBtn {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    .programBlock {
        position: relative;
        width: 90vw;
        max-width: 400px;
        height: 200px;
        border-radius: 10px;
        background-size: cover;
    }
    .programName {
        color: white;
    }
</style>