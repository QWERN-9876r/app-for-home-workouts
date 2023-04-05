<img src="http://localhost:5000?src=relax.png" alt="">
<h3>{counter}</h3>
<h1>{ user && user.language === "Engish" ? "Relax" : "Отдых" }</h1>
<script>
    let user = JSON.parse(localStorage.getItem('user')) || null,
     counter = 30
     setInterval( () => counter--, 1000 )
</script>
<style>
    img {
        width: 80vw;
        min-height: 50vh;
    }
    h3 {
        display: flex;
        justify-content: center;
        font-size: 20px;
    }
    h1 {
        font-size: 25px;
        display: flex;
        justify-content: center;
    }
</style>