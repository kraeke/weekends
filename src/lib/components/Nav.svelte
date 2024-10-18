<script>
	import Logo from './Logo.svelte';
</script>

<nav
	class="fixed bottom-0 z-50 grid h-16 w-screen grid-cols-5 border-t border-dashed border-surface-400 bg-surface-500 md:h-screen md:w-24 md:grid-cols-1 md:content-start md:border-b-0 md:border-r md:border-t-0"
>
	<div class="nav-link order-3 md:order-1">
		<div class="h-16 py-4">
			<Logo />
		</div>
	</div>
	<a class="nav-link order-1 md:order-2" href="/">
		<div class="flex flex-col items-center">
			<span class="material-symbols-rounded">home</span>
			<span>Home</span>
		</div>
	</a>
	<a class="nav-link order-2 md:order-3" href="/">
		<div class="flex flex-col items-center">
			<span class="material-symbols-rounded">search</span>
			<span>Search</span>
		</div>
	</a>
	<a class="nav-link order-4 md:order-4" href="/">
		<div class="flex flex-col items-center">
			<span class="material-symbols-rounded">add</span>
			<span>Submit</span>
		</div>
	</a>
	<a class="nav-link order-5 md:order-4" href="/">
		<div class="flex flex-col items-center">
			<span class="material-symbols-rounded">person</span>
			<span>Login</span>
		</div>
	</a>
</nav>

<style lang="less">
	.nav-link {
		@apply flex items-center justify-center border-dashed border-surface-400 bg-surface-500 text-sm uppercase text-surface-400 md:aspect-square md:w-24 md:border-b md:border-r;

		.material-symbols-rounded {
			@apply text-2xl text-secondary-500;
		}
		&:hover {
			@apply bg-surface-700 transition-all duration-500;
		}
	}
</style>
