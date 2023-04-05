{#if !user}
<LoginWindow/>

{:else}
{ #each CheckedSettings as {checked, name, engName}}
  <p><span>{name}</span> <Checkbox {checked} {engName} /></p>
{/each }
{ #each listSettings as {name, engName, answers} }
<p><span>{name}</span>
  <select on:change={ ({target}) => { fetch(`${serverUrl}/change?username=${user.name}&key=${engName}&value=${target.value}`)
  .then( res => res.json() )
        .then( user => {
            setUser(user)
        } )
}}>
    {#each answers as answer}
    <option value={answer}>
      {answer}
    </option>
    {/each}
  </select>
</p>
{/each }
{/if}

<script>
  import Checkbox from "./checkbox.svelte"
  import LoginWindow from "../profile/loginWindow.svelte"
  import { serverUrl, user, setUser } from "../../staticData";

    const CheckedSettings = [
      {
        name: 'темная тема ( beta )',
        engName: 'darkTheme',
        checked: user && (Object.keys(user).includes('darkTheme') && user['darkTheme'] === 'true') ?  true : false
      }
    ],
    listSettings = [
      {
        name: 'язык',
        engName: 'language',
        answers: [
          'Русский',
          'English'
        ]
      }
    ]
</script>

<style>
  span {
    font-size: 20px;
    font-weight: 600;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  select {
    width: 100px;
    height: 35px;
    border: 2px solid blue;
    font-weight: 600;
    border-radius: 5px;
    transition: 0.3s;
  }
  select:active {
    border-color: black;
  }
  select:hover {
    border-color: black;
  }
</style>
