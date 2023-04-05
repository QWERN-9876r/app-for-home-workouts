<footer>
    <nav>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a id="img" href="settings"><img src="settings.png" alt="" ></a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a style="margin: 0px 10vw 0px 10vw" id="img" class="home" href="/"><img src="home.png" alt="" ></a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a id="img" href="profile"><img src="profile.png" alt=""></a>
    </nav>
</footer>

<style>
    :global(body) {
		background-color: white;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
    footer {
        display: flex;
        z-index: 2;
        width: 100vw;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        height: 70px;
        left: 0;
        background-color: rgb(81, 100, 207);
    }
    img {
        height: 60px;
        width: 60px;
    }
</style>
<script>
    try {
        let user = JSON.parse(localStorage.getItem('user'))
        if ( user.darkTheme === 'true' ) {
            window.document.body.classList.add('dark-mode')
        }
    } catch {}
    
</script>
<slot></slot>