<template>
	<div class="listing__container">
		<span class="listing__context"
			><i class="fa-solid fa-ellipsis"></i
		></span>
		<img src="https://via.placeholder.com/75" alt="company logo" />
		<h2>UI / UX Designer</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
			sapiente beatae error esse eos aut fuga, nihil quae dignissimos enim
			libero adipisci culpa quasi deleniti. Asperiores debitis temporibus
			error omnis laborum aperiam nobis saepe, dolorem dignissimos autem
			eaque, commodi, totam ea voluptatibus facere consectetur ducimus nam
			iure! Provident, non eveniet.
		</p>
		<div class="tag__container">
			<span class="listing__tag">Full Time</span>
			<span class="listing__tag">Min. 3 Year</span>
			<span class="listing__tag">Senior Level</span>
		</div>
		<div class="btn__container">
			<button class="btn--primary">Apply Now</button>
			<button class="btn--secondary">Messages</button>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	.listing__container {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		border-radius: 20px;
		/* max-width: 450px; */
		min-width: 300px;

		background-color: var(--white);

		.listing__context {
			position: absolute;
			font-weight: bold;
			right: 1rem;
			padding: 0.5rem;
			border-radius: 5px;
			cursor: pointer;

			&:hover {
				background-color: var(--grey);
			}
		}

		img {
			border-radius: 20px;
			max-width: 75px;
		}

		p {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		.tag__container {
			display: flex;
			gap: 1rem;

			.listing__tag {
				padding: 0.25rem 0.5rem;
				background-color: var(--secondary);
				color: var(--primary-400);
				font-weight: bold;
				font-size: 12px;
				border-radius: 5px;
			}
		}

		.btn__container {
			display: flex;
			justify-content: space-between;
		}
	}

	@media (max-width: 850px) {
		.btn__container {
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
