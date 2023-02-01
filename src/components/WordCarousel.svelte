<script lang="ts">
  import { onMount } from "svelte";
  let target: HTMLElement;
  function rotateText() {
    const words: string[] = target.dataset.rotate.split(",");
    let i: number = 0;
    setInterval(() => {
      target.innerText = words[i];
      i = (i + 1) % words.length;
    }, 2000);
  }
  onMount(rotateText);
</script>

<div
  class="inline-block text-center animate-typewriter whitespace-nowrap overflow-hidden"
>
  <p class="text-8xl">Welcome to My</p>

  <p
    class="text-8xl"
    data-rotate="Website, Project, Portfolio, Passion"
    bind:this={target}
  ></p>
</div>
