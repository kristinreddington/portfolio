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
		--body-bg: #fafafa;
		--page-bg: #f5f5f5;
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
	.openOverlay {
		/* background-color: rgba(28, 28, 28, 0.95); */
		background-color: rgb(223, 215, 201);
		animation: .5s ease-in 1s 2 reverse both paused slidein;
		transition: background-color .6s ease-in 0.3s;
		opacity: 1;
		height: 100vh;
		width: 100%;
		/* display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative; */
		z-index: 1000;
	}
	.closeOverlay {
		/* background-color: var(--body-bg); */
		/* height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-right: 25vh;
		padding-left: 25vh; */
	}
	.aspect {
		z-index: -1;
	}
	.cover {
		@media screen (max-width: 600px) {
			width: calc(9px * 60);
		}
		width: calc(var(--baseline) * 60);
		height: calc(var(--baseline) * 42.6);
		box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
	}

	.book {
		width: 100%;
		height: 100%;
		display: flex;
		perspective: 1200px;

		&__page {
			position: relative;
			width: 50%;
			height: 100%;
			display: flex;
			transform: rotateY(0deg);
			transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
			transform-origin: 0% 0%;
			background-color: var(--page-bg);
			background-image: linear-gradient(
				90deg,
				rgba(227, 227, 227, 1) 0%,
				rgba(247, 247, 247, 0) 18%
			);

			&:nth-of-type(1) {
				background-image: linear-gradient(
					-90deg,
					rgba(227, 227, 227, 1) 0%,
					rgba(247, 247, 247, 0) 18%
				);
			}

			&--1 {
				cursor: pointer;
				overflow: hidden;

				/* img {
					width: 100%;
					max-width: 100%;
					height: auto;
				} */
			}

			&--2 {
				position: absolute;
				right: 0;
				pointer-events: none;
				transform-style: preserve-3d;
				background-color: var(--page-bg);
				background-image: linear-gradient(
					90deg,
					rgba(227, 227, 227, 1) 0%,
					rgba(247, 247, 247, 0) 18%
				);
			}

			&--4 {
				cursor: pointer;
				padding: 0 calc(var(--baseline) * 3);
			}

			&-front {
				position: absolute;
				width: 100%;
				height: 100%;
				transform: rotateY(0deg) translateZ(1px);
			}

			&-back {
				position: absolute;
				width: 100%;
				height: 100%;
				padding: 0 calc(var(--baseline) * 1.8);
				transform: rotateY(180deg) translateZ(1px);
			}

			.page__content {
				@media screen (max-width: 600px) {
					padding: 9px;
				}
				padding: var(--baseline);
				height: 100%;
				position: relative;
				text-align: center;

				&-book-title {
					font-family: var(--book-title);
					font-size: calc(var(--base-size) * 3);
					font-weight: bold;
					text-transform: uppercase;
					letter-spacing: 3px;
					color: var(--dark-text);
					margin-top: calc(var(--baseline) * 5);
					margin-bottom: calc(var(--baseline) * 2);
				}

				&-author {
					font-family: var(--title);
					font-size: calc(var(--base-size) * 1.2);
					font-weight: 100;
					text-transform: uppercase;
					color: var(--dark-text);
					border-top: 1px solid var(--dark-text);
					border-bottom: 1px solid var(--dark-text);
					display: inline-block;
					padding: calc(var(--baseline) / 2) calc(var(--baseline) / 5);
					margin-bottom: calc(var(--baseline) * 6);
				}

				&-credits {
					font-family: var(--title);
					text-transform: uppercase;
					font-size: calc(var(--base-size) * 0.8);
					margin-bottom: calc(var(--baseline) * 2);
					letter-spacing: 1px;

					span {
						display: block;
						font-size: calc(var(--base-size) * 1.2);
						letter-spacing: 0;
					}
				}

				&-copyright {
					position: absolute;
					width: calc(100% - (var(--baseline) * 2));
					bottom: calc(var(--baseline) * 2);
					font-family: var(--title);
					font-size: calc(var(--base-size) * 0.8);
					text-transform: uppercase;
				}

				&-title {
					font-family: var(--title);
					font-size: calc(var(--base-size) * 1);
					text-transform: uppercase;
					letter-spacing: 1px;
					margin-top: calc(var(--baseline) * 5);
					margin-bottom: calc(var(--baseline) * 3);
				}

				&-table {
					width: 100%;
					margin-top: calc(var(--baseline) * 2);

					td {
						font-family: var(--title);
						font-size: calc(var(--base-size) * 1);
						padding-bottom: calc(var(--baseline) * 1.5);
						text-transform: uppercase;
					}
				}

				&-blockquote {
					margin-bottom: calc(var(--baseline) * 2);
				}

				&-blockquote-text {
					font-family: var(--title);
					font-size: calc(var(--base-size) * 0.67);
					font-style: italic;
					text-align: justify;
					line-height: 105%;
				}

				&-blockquote-reference {
					font-family: var(--title);
					font-size: calc(var(--base-size) * 0.7);
					margin-top: calc(var(--baseline) * 0.3);
					float: right;
					text-transform: uppercase;
				}

				&-text {
					font-family: var(--title);
					font-size: calc(var(--base-size) * 0.67);
					text-align: justify;
					text-indent: var(--baseline);
				}
			}
			.page__number {
				position: absolute;
				bottom: var(--baseline);
				width: calc(100% - (var(--baseline) * 2));
				font-family: var(--title);
				font-size: calc(var(--base-size) * 0.67);
				text-align: center;
			}
		}

		 input[type='radio'] {
			display: none;

			&:checked + .book__page {
				transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
				transform: rotateY(-180deg);
			}
		}
	}
</style>
