{#if user}
    <div class="profile"><Profile /></div>
    {:else}
    <LoginWindow/>
{/if}
<script>
    import Profile from "./profile.svelte"
    import LoginWindow from "./loginWindow.svelte"
    import { user } from "../../staticData"
</script>

<style>
    .profile{
        padding-bottom: 70px;
    }
</style>