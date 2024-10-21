<script>
	import Logo from './Logo.svelte';
</script>

<nav class="fixed bottom-0 z-50 flex h-20 w-screen p-2 md:h-screen md:w-24">
	<div
		class="grid w-full grid-cols-5 bg-surface-900 md:h-full md:w-24 md:grid-cols-1 md:content-start"
	>
		<div class="nav-link order-3 md:order-1 md:rounded-t-full">
			<div class="h-16 py-4">
				<Logo />
			</div>
		</div>
		<a class="nav-link order-1 md:order-2" href="/">
			<div class="flex flex-col items-center">
				<span class="material-symbols-rounded">home</span>
			</div>
		</a>
		<a class="nav-link order-2 md:order-3" href="/">
			<div class="flex flex-col items-center">
				<span class="material-symbols-rounded">search</span>
			</div>
		</a>
		<a class="nav-link order-4 md:order-4" href="/">
			<div class="flex flex-col items-center">
				<span class="material-symbols-rounded">add</span>
			</div>
		</a>
		<a class="nav-link order-5 md:order-4" href="/">
			<div class="flex flex-col items-center">
				<span class="material-symbols-rounded">person</span>
			</div>
		</a>
	</div>
</nav>

<style lang="less">
	.nav-link {
		@apply flex items-center justify-center rounded-full bg-surface-900 px-4 text-sm uppercase text-surface-400 md:aspect-square md:w-20;

		.material-symbols-rounded {
			@apply block text-3xl text-secondary-500 md:text-2xl;
		}
		&:hover {
			@apply bg-surface-500 transition-all duration-500;
		}
	}
</style>
