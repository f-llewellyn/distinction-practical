<script setup>
	import Header from "./components/Header.vue";
</script>

<template>
	<Header />
	<div class="app"><router-view /></div>
</template>

<style lang="scss">
	:root {
		--primary-400: #0061ff;
		--primary-300: #5391f3;

		--secondary: #dbebfa;

		--grey: #ccc;

		--bg: #f5f5f5;
		--white: #fff;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: "Poppins", sans-serif;
	}

	body {
		background-color: var(--bg);
	}

	.app {
		display: flex;
		margin: 1rem;
	}

	button,
	.btn {
		background: none;
		border: none;
		outline: none;
		font-size: 16px;
		padding: 0.5rem 2.5rem;
		border-radius: 10px;
		cursor: pointer;
		transition: 200ms;
	}

	.btn--primary {
		background-color: var(--primary-400);
		color: var(--white);

		&:hover {
			background-color: var(--primary-300);
		}
	}

	.btn--secondary {
		background-color: var(--grey);

		&:hover {
			background-color: var(--secondary);
		}
	}

	input,
	textarea,
	select {
		background-color: var(--white);
		border: var(--grey) 3px solid;
		border-radius: 5px;
		font-size: 16px;
		padding: 0.25rem;
		display: block;
	}
</style>

