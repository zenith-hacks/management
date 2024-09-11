<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main class="px-2 py-4">
	<div class="flex flex-col items-center justify-center gap-12">
		<h1 class="mt-4 text-center font-grotesk text-6xl font-bold">
			Your one-stop<br />shop for Zenith
		</h1>
		<div class="flex flex-row gap-2">
			<button on:click={() => signIn()} class="variant-filled-primary btn">Sign up</button>
			<button on:click={() => signIn()} class="variant-outline btn">Sign in</button>
		</div>
	</div>
</main>
