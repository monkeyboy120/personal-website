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
  class="inline-block text-center animate-typewriter whitespace-nowrap overflow-hidden w-full"
>
  <p class="text-8xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">Welcome to My</p>

  <p
    class="text-8xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text"
    data-rotate="Website, Project, Portfolio, Passion"
    bind:this={target}
  ></p>
</div>
