
<script>
  let count = 0;
  const increment = () => {
    count += 1;
    console.log(count);
  };
</script>

<svelte:window on:click={increment} />
<p>{count}</p>