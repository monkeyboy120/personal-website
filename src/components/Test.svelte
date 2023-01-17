<script>
  let count = 0;
  function increment() {
    count++;
  }
</script>

{#if count > 10}
  <div><button on:click={increment}>You clicked {count} times</button></div>
{:else}
  <div><button on:click={increment}>{count}</button></div>
{/if}

<style>
  div {
    background-color: black;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  button {
    border-radius: 10px;
    height: 100px;
    width: 100px;
    background-color: aqua;
  }

  button:hover {
    background-color: aquamarine;
  }
  button:active {
    background-color: blueviolet;
  }
</style>
