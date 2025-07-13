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
	<NavBar bind:ismenuOpen={menuOpen} />

	<!-- Full overlay that fades in smoothly -->
	<div class="overlay {menuOpen ? 'show' : ''}">
		<div class="overlay-content">
			<slot />
		</div>
	</div>
	<style>
		:root {
			--bg-dark: #151311;
			--bg-overlay: rgba(40, 37, 35, 0.96);
			--text-main: #F0ECE7;
			--text-muted: #C5BEB7;
			--accent-gold: #BBA77D;
			--accent-sand: #D3CBC4;
			--border-soft: #3B3937;
		}
		body {
			background-color: var(--bg-dark);
			color: var(--text-main);
		}
		a {
			color: var(--text-main);
			text-decoration: none;
			transition: color 0.3s ease;
		}

		a:hover {
			color: var(--accent-gold);
		}
		@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

		:global(*) {
			font-family: 'Playfair Display', serif;
		}
		.overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: rgba(40, 37, 35, 0); /* transparent to start */
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(8px);
			opacity: 0;
			transform: scale(1.02);
			transition: background-color 0.8s ease, opacity 0.6s ease, transform 0.6s ease;
			z-index: 1000;
			pointer-events: none;
		}

		.overlay.show {
			background-color: var(--bg-overlay);
			opacity: 1;
			transform: scale(1);
			pointer-events: all;
		}

		.overlay-content {
			opacity: 0;
			transform: translateY(20px);
			transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
		}

		.overlay.show .overlay-content {
			opacity: 1;
			transform: translateY(0);
		}
	</style>
</AppShell>
