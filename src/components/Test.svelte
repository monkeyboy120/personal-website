
<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
    console.log(count);
  };
</script>

<svelte:window on:click={increment} />
<p>{count}</p>