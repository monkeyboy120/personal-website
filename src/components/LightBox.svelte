<script lang="ts">
  let popup: HTMLDivElement;
  function close() {
    popup.style.display = "none";
  }
</script>

<svelte:window on:click={close} />
<div class="w-full h-full bg-slate-600 opacity-50 flex justify-center align-middle" bind:this={popup}>
  <p class="text-4xl text-white absolute top-[5rem] left-1/2">Click and drag to view photo gallery</p>
</div>
