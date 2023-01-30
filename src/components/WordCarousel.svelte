<script lang="ts">
  let target: HTMLElement;
  function TextRotate({ target, data}) {
    const text = target.data.rotate;
    const rotate = target.data.rotate;
    let index = 0;

    setInterval(() => {
      target.textContent = text + rotate[index];
      index = (index + 1) % rotate.length;
    }, 2000);
  }

</script>
<div class="inline-block text-center animate-typewriter whitespace-nowrap overflow-hidden">
<p class="text-8xl text-gray-600">
  Welcome to My
</p>

<p class="text-8xl" data-rotate='["Website", "Project", "Portfolio", "Passion"]' bind:this={target}>
  
</p>
</div>
