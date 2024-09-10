<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main class="px-2 py-4">
	<div class="flex flex-col items-center justify-center gap-12">
		<h1 class="mt-4 text-center text-6xl font-bold">Uploads made<br />simple</h1>
		<button on:click={() => signIn()}>Sign in</button>
	</div>
</main>
