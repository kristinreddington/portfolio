<script>
    export let ismenuOpen = false;
    let current = 0;
    function toggleMenu() {
        ismenuOpen = !ismenuOpen;
    }

</script>

<div class="{ismenuOpen ? 'navbar' : 'closedNavBar'}" >
    <!-- -->
    <nav class="{ismenuOpen ? 'open' : 'closed'}">
        <ul>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <li class="home" on:click={() => (ismenuOpen = false)}><a on:click={() => (current = 0)} class:current={current === 0} href="/">Home</a></li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <li class="ul--about" on:click={() => (ismenuOpen = false)}><a on:click={() => (current = 1)} class:current={current === 1} href="/">About</a></li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <li class="ul--portfolio" on:click={() => (ismenuOpen = false)}><a on:click={() => (current = 2)} class:current={current === 2} href="/portfolio">Portfolio</a></li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <li class="ul--inspo" on:click={() => (ismenuOpen = false)} on:click={() => (current = 3)} class:current={current === 3}><a href="/">Inspo</a></li>
        </ul>
    </nav>
    
    <button class="burger" type="button" on:click={toggleMenu}>
        <div class="bar--1" />
        {#if !ismenuOpen  }
        <div class="bar--2" />
        <div class="bar--3" />
        <div class="bar--4" />
        {/if}
    </button>
</div>

<style>
    .navbar {
        /* background-color: rgba(28, 28, 28, 0.95);  */
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        /* animation: 3s ease-in 1s 2 reverse both paused slidein; */
        /* transition: background-color 0.5s ease-in 0.3s; */
    }
    .closedNavBar {
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    nav.closed {
        display: none;
    }
    nav.open {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        margin: auto;
        /* background-color: rgba(28, 28, 28, 0.95); 
        animation: 3s ease-in 1s 2 reverse both paused slidein;
        transition: background-color 0.5s ease-in 0.3s; */
        opacity: 0.3;
        z-index: 1000;
    }
    ul {
        /* animation: 3s ease-in 1s 2 reverse both paused slidein; */
        /* transition: background-color 0.5s ease-in 0.3s; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 5vh;
        margin-top: 2vh;
        margin-bottom: 4vh;
        list-style: none;
        font-size: 1.1rem;
        
       
    }
    li {
        /* color: rgb(118, 118, 118); */
        &.home {
             /* This timing applies on the way OUT */
             transition: 0.25s;
  transition-timing-function: ease-out;
  
  transform: translateY(0);
  opacity: 1;

            /* animation: 3s ease-in 4s 2 slidein; */
            /* transition: background-color 0.5s ease-in 0.3s; */
        }
    }
    .burger {
        height: 28px;
        aspect-ratio: 1;
        border: 0px solid var(--on-primary);
        background-color: transparent;
        border-radius: 5px;
        margin-left: 6vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .current {
        position: relative;
    }
    .current::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: (blue);
    }

    .burger > div {
        height: 2px;
        width: 50px;
        background-color: #bdb8bb;
        position: absolute;
    }

    .bar--1 {
        transform: translateY(-5px);
    }
    .bar--3 {
        transform: translateY(5px);
    }
</style>