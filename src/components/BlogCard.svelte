<script lang="ts">
    let container: HTMLElement;
    function createCard() {
        container.appendChild(document.createElement('div'));
        container.children[container.children.length - 1].innerHTML = `
            <div class="card">
                <h2>Card Title</h2>
                <p>Card Content</p>
            </div>
        `;
    }
</script>

<div class="grid columns-1" bind:this={container}>
    <button on:click={createCard}>Add Card</button>
</div>