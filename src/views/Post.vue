<template>
	<form>
		<span>Job Title</span>
		<input type="text" placeholder="UI/UX Designer" />

		<span>Department</span>
		<select name="department">
			<option value="design">Design</option>
			<option value="development">Development</option>
			<option value="marketing">Marketing</option>
			<option value="management">Management</option>
		</select>

		<span>Min Salary</span>
		<input
			type="number"
			oninput="this.value = Math.round(this.value);"
			placeholder="25,000"
		/>

		<span>Max Salary</span>
		<input
			type="number"
			oninput="this.value = Math.round(this.value);"
			placeholder="35,000"
		/>

		<span>Job Description</span>
		<textarea
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing..."
		></textarea>

		<span>Job Postcode</span>
		<input type="text" placeholder="S41 0PW" />

		<span>Expiry date</span>
		<input type="date" />

		<button type="submit" class="btn--primary">Submit</button>
	</form>
</template>

<script setup></script>

<style lang="scss" scoped>
	form {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		width: minmax(320px, 50%);

		input,
		textarea,
		select {
			padding: 0.5rem;
			margin-bottom: 2rem;
		}
	}

	textarea {
		resize: vertical;
	}
</style>
