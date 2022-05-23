<script setup>
	defineProps({
		filterName: String,
		jobNumber: Number,
	});
</script>

<template>
	<div class="filter">
		<input type="checkbox" name="checkbox" />
		<!-- Input the passed filter and number | FOR PREVIEW ONLY  -->
		<span class="checkbox-text">{{ filterName }}</span>
		<span class="job-number">{{ jobNumber }}</span>
	</div>
</template>

<style lang="scss" scoped>
	.filter {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		input {
			padding: 10px;
		}

		/* Changes colour of jobNumber when checkbkox is selected */
		input:checked ~ .job-number {
			background-color: var(--secondary);
		}

		.job-number {
			font-size: 12px;
			padding: 5px;
			border-radius: 5px;
			background-color: var(--grey);
			margin-left: auto;
			min-width: 28px;

			text-align: center;
		}
	}
</style>
