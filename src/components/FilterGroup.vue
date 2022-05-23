<template>
	<div class="filter__container">
		<div class="filter-controls">
			<h4>{{ title }}</h4>
			<!-- A chevron that rotates on change as well as acting as a button for the filter dropdown -->
			<i
				@click="toggleFilter"
				class="fa-solid fa-chevron-down"
				:class="{ rotate: isExpanded }"
			></i>
		</div>
		<div class="filters" :class="{ expanded: isExpanded }">
			<div v-for="details in filterDetails">
				<Filter
					:filterName="details.filterName"
					:jobNumber="details.jobNumber"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Filter from "./Filter.vue";

	import { ref } from "vue";

	const isExpanded = ref(true);

	const toggleFilter = () => {
		isExpanded.value = !isExpanded.value;
	};

	defineProps({
		title: String,
		filterDetails: Array,
	});
</script>

<style lang="scss" scoped>
	.filter-controls {
		display: flex;
		align-items: center;
		justify-content: space-between;

		i {
			transition: 200ms;
		}

		.rotate {
			transform: rotate(-180deg);
		}
	}

	.filters {
		flex-direction: column;
		gap: 0.5rem;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
		display: none;
		opacity: 0;
		transition: 200ms;
	}

	.expanded {
		display: flex;
		opacity: 1;
	}
</style>
