<script setup>
	import Listing from "../components/Listing.vue";
	import FilterGroup from "../components/FilterGroup.vue";

	const filters = [
		{
			title: "Type of Employment",
			filterDetails: [
				{
					filterName: "Full Time Jobs",
					jobNumber: 56,
				},
				{
					filterName: "Part Time Jobs",
					jobNumber: 20,
				},
				{
					filterName: "Remote Jobs",
					jobNumber: 60,
				},
				{
					filterName: "Internships",
					jobNumber: 12,
				},
				{
					filterName: "Contract",
					jobNumber: 16,
				},
				{
					filterName: "Training Jobs",
					jobNumber: 4,
				},
			],
		},
		{
			title: "Seniority Level",
			filterDetails: [
				{
					filterName: "Student Level",
					jobNumber: 56,
				},
				{
					filterName: "Entry Level",
					jobNumber: 20,
				},
				{
					filterName: "Mid Level",
					jobNumber: 60,
				},
				{
					filterName: "Senior Level",
					jobNumber: 12,
				},
				{
					filterName: "Directors",
					jobNumber: 16,
				},
				{
					filterName: "VP or Above",
					jobNumber: 4,
				},
			],
		},
		{
			title: "Salary Range",
			filterDetails: [
				{
					filterName: "$700 - $1000",
					jobNumber: 56,
				},
				{
					filterName: "$1000 - $1200",
					jobNumber: 20,
				},
				{
					filterName: "$1200 - $1400",
					jobNumber: 60,
				},
				{
					filterName: "$1500 - $1800",
					jobNumber: 12,
				},
				{
					filterName: "$2000 - $3000",
					jobNumber: 16,
				},
			],
		},
	];
</script>

<template>
	<aside>
		<div class="text-field">
			<span>Job Title</span>
			<input type="text" />
		</div>
		<div class="text-field">
			<span>Postcode</span>
			<input type="text" />
		</div>
		<div v-for="filterGroup in filters">
			<FilterGroup
				:title="filterGroup.title"
				:filterDetails="filterGroup.filterDetails"
			/>
		</div>
	</aside>

	<main>
		<div class="listing-controls">
			<h2>Showing 46 Jobs</h2>

			<div>
				<label for="sort">Sort By:</label>
				<select name="sort">
					<option value="newest">Newest Post</option>
					<option value="oldest">Oldest Post</option>
					<option value="highest">Highest Salary</option>
					<option value="lowest">Lowest Salary</option>
				</select>
			</div>
		</div>
		<div class="listings">
			<Listing />
			<Listing />
			<Listing />
			<Listing />
			<Listing />
			<Listing />
			<Listing />
		</div>
	</main>
</template>

<style lang="scss" scoped>
	aside {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.filter__container {
		width: 300px;

		&:not(:first-child) {
			margin-top: 2rem;
		}
	}

	main {
		width: 100%;
		padding: 0 2rem;

		.listings {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
			gap: 2rem;
		}

		.listing-controls {
			display: flex;
			justify-content: space-between;
			margin-bottom: 1rem;

			& div:nth-child(2) {
				display: flex;
				align-items: center;

				label {
					margin-right: 0.5rem;
				}

				select {
					background: none;
					outline: none;
					border: none;
					font-size: 16px;
					font-weight: bold;
				}
			}
		}
	}

	.text-field {
		input {
			width: 100%;
		}
	}

	@media (max-width: 850px) {
		aside {
			display: none;
			position: absolute;
		}

		main {
			padding: 0;

			.listings {
				grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
			}

			.listing-controls {
				flex-direction: column;
			}
		}
	}
</style>
