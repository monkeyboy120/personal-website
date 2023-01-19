<script>
  let track;
  let mouseDownAt = 0;
  let prevPercentage = 0;
  let percentage = 0;

  const handleOnDown = (e) => {
    mouseDownAt = e.clientX;
  };

  const handleOnUp = () => {
    mouseDownAt = 0;
    prevPercentage = percentage;
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX,
      maxDelta = window.innerWidth / 2;

    percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentageUnconstrained = prevPercentage + percentage;
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };
</script>

<svelte:window
  on:mousedown={handleOnDown}
  on:mouseup={handleOnUp}
  on:mousemove={handleOnMove}
/>
<div
  class="flex gap-16 absolute left-1/2 top-1/2 translate-y--1/2 translate-x-0 select-none"
  id="image-track"
  bind:this={track}
>
  <img
    class="width-[40vmin] height-[56vmin] object-cover object-center"
    src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    draggable="false"
    alt="a"
    id="image"
  />
  <img
    class="width-[40vmin] height-[56vmin] object-cover object-center"
    src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
    draggable="false"
    alt="a"
    id="image"
  />
  <img
    class="width-[40vmin] height-[56vmin] object-cover object-center"
    src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    draggable="false"
    alt="a"
    id="image"
  />
  <img
    class="width-[40vmin] height-[56vmin] object-cover object-center"
    src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    draggable="false"
    alt="a"
    id="image"
  />
  <img
    class="width-[40vmin] height-[56vmin] object-cover object-center"
    src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    draggable="false"
    alt="a"
    id="image"
  />
  <img
    class="width-[40vmin] height-[56vmin] object-cover object-center"
    src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
    draggable="false"
    alt="a"
    id="image"
  />
  <img
    class="width-[40vmin] height-[56vmin] object-cover object-center"
    src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
    draggable="false"
    alt="a"
    id="image"
  />
  <img
    class="width-[40vmin] height-[56vmin] object-cover object-center"
    src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    draggable="false"
    alt="a"
    id="image"
  />
</div>
