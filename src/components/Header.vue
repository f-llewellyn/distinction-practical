<template>
	<header>
		<span>
			<h1>Careers Microsite</h1>
		</span>
		<nav>
			<ul>
				<li><router-link to="/">Search Jobs</router-link></li>
				<li><router-link to="/post">Post A job</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
	header {
		background-color: var(--white);
		padding: 0.5rem 1rem;

		display: flex;
		align-items: center;

		span {
			color: var(--primary-400);
		}

		ul {
			list-style: none;
			display: flex;
			align-items: center;
			gap: 1rem;
			margin-left: 1rem;

			a {
				text-decoration: none;
				color: #000;
			}
		}
	}

	.router-link-exact-active {
		color: var(--primary-400);
	}

	@media (max-width: 850px) {
		header {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
