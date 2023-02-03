<script>
  import { onMount } from "svelte";
  let target;
  function rotateText() {
    const words = target.dataset.rotate.split(",");
    let i = 0;
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
