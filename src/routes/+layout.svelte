<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import NavBar from '../components/NavBar.svelte';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	let menuOpen: boolean;

	
</script>

<!-- App Shell -->
<AppShell>
	
	<!-- <svelte:fragment slot="header"> -->
		<!-- <img src="/images/SplendorofMarbleCover.jpeg" alt="" /> -->
		<!-- App Bar -->
		<!-- <AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
			</svelte:fragment>
		</AppBar> -->

		<div class={menuOpen ? 'openOverlay' : 'closeOverlay'}>
			<br/>
			<NavBar bind:ismenuOpen={menuOpen} />
		<slot />

		</div>

		<!-- </svelte:fragment> -->
		<!-- Page Route Content -->

	<style>
		@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

		:global(*) {
			font-family: 'Playfair Display', serif;
		}
		.openOverlay {
		/* background-color: rgba(28, 28, 28, 0.95); */
		background-color: rgb(223, 215, 201);
		animation: .5s ease-in 1s 2 reverse both paused slidein;
		transition: background-color .6s ease-in 0.3s;
		height: 100vh;
		width: 100%;
		/* display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative; */
		z-index: 1000;
	}
		
	</style>
</AppShell>
