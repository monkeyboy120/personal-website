<script lang="ts">
    let container: HTMLElement;
    function createCard() {
        container.appendChild(document.createElement('div'));
        let card: HTMLDivElement = document.createElement('div');
        card.innerText = 'Hello World';
        card.style.textColor = 'red';
        function createCard() {
            container.appendChild(card);
        }
    }
</script>

<div class="grid columns-1" bind:this={container}>
    <button on:click={createCard}>Add Card</button>
</div>