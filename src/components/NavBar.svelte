<script>
	export let ismenuOpen = false;
	let current = 0;
	function toggleMenu() {
		ismenuOpen = !ismenuOpen;
	}
</script>

<div class={ismenuOpen ? 'navbar' : 'closedNavBar'}>
	<!-- -->
	<nav class={ismenuOpen ? 'open' : 'closed'}>
		<div class="nav-wrapper" class:show={ismenuOpen}>
			<ul>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li class="nav-item" on:click={() => (ismenuOpen = false)}>
					<a on:click={() => (current = 0)} class:current={current === 0} href="/">Home</a>
				</li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li class="nav-item" on:click={() => (ismenuOpen = false)}>
					<a on:click={() => (current = 1)} class:current={current === 1} href="/">About</a>
				</li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li class="nav-item" on:click={() => (ismenuOpen = false)}>
					<a on:click={() => (current = 2)} class:current={current === 2} href="/portfolio"
						>Portfolio</a
					>
				</li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li
					class="nav-item"
					on:click={() => (ismenuOpen = false)}
					on:click={() => (current = 3)}
					class:current={current === 3}
				>
					<a href="/">Inspo</a>
				</li>
			</ul>
		</div>
	</nav>

	<button class="burger" type="button" on:click={toggleMenu}>
		<div class="bar bar--1" class:openBar={ismenuOpen} />
		<div class="bar bar--2" class:hideBar={ismenuOpen} />
		<div class="bar bar--3" class:openBar={ismenuOpen} />
		<div class="bar bar--4" class:hideBar={ismenuOpen} />
	</button>
</div>

<style>
	.navbar,
	.closedNavBar {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		position: relative;
		z-index: 2000;
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
		opacity: 0.3;
		z-index: 1000;
	}
	.nav-wrapper {
		margin: 5%;
	}

	/* Trigger fade-in when nav-wrapper is shown */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px); /* Match the initial state */
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.nav-item {
		opacity: 0;
		animation: fadeIn 0.8s ease forwards;
	}
	.nav-item:nth-child(1) {
		animation-delay: 0s;
	}

	.nav-item:nth-child(2) {
		animation-delay: 0.2s;
	}

	.nav-item:nth-child(3) {
		animation-delay: 0.4s;
	}
	.nav-item:nth-child(4) {
		animation-delay: 0.6s;
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 5vh;
		margin-top: 2vh;
		margin-bottom: 4vh;
		list-style: none;
		font-size: 1.3rem;
	}

	.burger {
		height: 30px;
		width: 50px;
		background-color: transparent;
		border: none;
		display: flex;
		flex-direction: column;
		gap: 6px;
		right: 2rem;
		top: 2rem;
		align-items: center;
		justify-content: center;
		position: fixed;
		z-index: 2001;
		cursor: pointer;
	}

	.bar {
		position: absolute;
	}
	/* Hide middle bars */
	.hideBar {
		opacity: 0;
		transform: translateX(-10px);
	}

	/* Animate to X */
	.openBar.bar--1 {
		transform: rotate(45deg);
	}
	.openBar.bar--3 {
		transform: rotate(-45deg);
	}

	.burger > div {
		height: 2px;
		width: 50px;
		background-color: var(--text-main);
		transition: background-color 0.3s ease, transform 0.3s ease;
		position: absolute;
	}
	.burger:hover > div {
		background-color: var(--accent-gold);
	}
	/* Default nav bar placement  */
	.bar--1 {
		transform: translateY(-5px);
	}
	.bar--2 {
		transform: translateY(0);
	}
	.bar--3 {
		transform: translateY(5px);
	}
</style>
