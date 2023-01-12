<script>
    let count = 0;
    function increment() {
        count++
    };
</script>

<div><button on:click = {increment}>{count}</button></div>

<style>
    div {
        background-color: antiquewhite;
        display: flex;
        width: 100%;
        height: 100vh;
        justify-items: center;
        align-items: center;
        justify-content: center;
        align-content: center;
    }

    button {
        border-radius: 10px;
        height: 100px;
        width: 100px;
        background-color: aqua;
    }

    button:hover {
        box-shadow: 10px red;
    }

    button:active {
        background-color: blueviolet;
    }
</style>