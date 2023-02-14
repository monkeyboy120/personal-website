<script>
    let track;
    let innerWidth;
    let popup;

    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
        popup.style.display = "none";
    };

    const handleOnMove = (e) => {
        if (track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained =
                parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.min(Math.max(nextPercentageUnconstrained, -100), 0);

        track.dataset.percentage = nextPercentage;

        track.animate(
            {
                transform: `translate(${nextPercentage}%)`,
            },
            {duration: 1200, fill: "forwards"}
        );

        for (const image of track.children) {
            image.animate(
                {
                    objectPosition: `${100 + nextPercentage}%`,
                },
                {duration: 1200, fill: "forwards"}
            );
        }
    };

</script>

<svelte:window
        bind:innerWidth={innerWidth}
        on:mousedown={handleOnDown}
        on:mousemove={handleOnMove}
        on:mouseup={handleOnUp}
/>

<div class="absolute left-10 top-1/2 rounded-2xl drop-shadow-md bg-gradient-to-r from-indigo-500 to-purple-500 text-2xl p-1"
     bind:this={popup}>
    <p>Click and drag screen to view gallery images</p>
</div>
<div
        class="flex gap-[4vmin] absolute left-1/2 top-1/4 select-none transform -translate-x-0 -translate-y--1/2"
        id="image-track"
        bind:this={track}
        data-mouse-down-at="0"
        data-prev-percentage="0"
>
    <img
            class="w-[40vmin] h-[56vmin] object-cover object-[100%]"
            src="/IMG_4435.JPG"
            draggable="false"
            alt="a"
    />
    <img
            class="w-[40vmin] h-[56vmin] object-cover object-[100%]"
            src="/IMG_5764.jpg"
            draggable="false"
            alt="a"
    />
    <!-- <img
            class="w-[40vmin] h-[56vmin] object-cover object-[100%]"
            src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
            alt="a"
    />
    <img
            class="w-[40vmin] h-[56vmin] object-cover object-[100%]"
            src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
            alt="a"
    />
    <img
            class="w-[40vmin] h-[56vmin] object-cover object-[100%]"
            src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
            alt="a"
    />
    <img
            class="w-[40vmin] h-[56vmin] object-cover object-[100%]"
            src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
            draggable="false"
            alt="a"
    />
    <img
            class="w-[40vmin] h-[56vmin] object-cover object-[100%]"
            src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
            draggable="false"
            alt="a"
    />
    <img
            class="w-[40vmin] h-[56vmin] object-cover object-[100%]"
            src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
            alt="a"
    /> -->
</div>