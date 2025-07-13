<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import NavBar from '../components/NavBar.svelte';
	let menuOpen: boolean;
</script>

<!-- <svelte:document on:click={flip} /> -->
<!-- <div class={menuOpen ? 'openOverlay' : 'closeOverlay'}>
	<br/>
	<NavBar bind:ismenuOpen={menuOpen} />
</div> -->

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,400,600|Tulpen+One&display=swap');

	:root {
		/* colors */
		--body-bg: #D3CBC4;
		--page-bg: #D3CBC4;
		--dark-text: #2a2935;

		/* spacing */
		/* this is what defines the global scale */
		--baseline: 11px;

		/* fonts */
		--book-title: 'Tulpen One', sans-serif;
		--title: 'Cormorant Garamond', serif;
		--body: 'Cormorant Garamond', serif;
		--base-size: var(--baseline) * 1.2;
	}

	* {
		box-sizing: border-box;
	}

	body {
		background-color: var(--body-bg);
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-right: 25vh;
		padding-left: 25vh;
	}
</style>
