<script lang="ts">
    let container: HTMLElement;
    function createCard() {
        container.appendChild(document.createElement('div'));
    }
</script>

<div class="grid columns-1" bind:this={container}>
    <div>

    </div>
</div>