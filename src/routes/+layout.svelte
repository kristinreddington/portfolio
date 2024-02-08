<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import NavBar from '../components/NavBar.svelte';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	export let menuOpen: boolean = false;

	
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

		<!-- <NavBar bind:ismenuOpen={menuOpen}/>  -->

		<!-- </svelte:fragment> -->
		<!-- Page Route Content -->
		<slot />

	<style>
		@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

		:global(*) {
			font-family: 'Playfair Display', serif;
		}
		
	</style>
</AppShell>
