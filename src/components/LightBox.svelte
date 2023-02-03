<script lang="ts">
  let popup: HTMLDivElement;
  function close() {
    popup.style.display = "none";
  }
</script>

<svelte:window on:click={close} />
<div class="w-full h-full bg-slate-600 opacity-50 flex justify-center " bind:this={popup}>
  <p class="text-4xl text-white bg-amber-500 absolute top-1/2 left-4 cursor-vertical-text">Click and drag to view photo gallery</p>
</div>

