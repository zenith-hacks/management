<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';

	const session = $page.data.session;

	const links = {
		'/about': 'About',
		'/contact': 'Contact'
	};
	const linkClasses = 'transition hover:text-sky-400';
</script>

<header class="flex flex-row items-center gap-4 border-b-[1px] border-gray-600 px-6 py-2">
	<a href="/" class="font-grotesk text-2xl font-bold uppercase">Zenith</a>
	<nav class="flex flex-row gap-4">
		{#each Object.entries(links) as [href, text]}
			<a class={linkClasses} {href}>{text}</a>
		{/each}
	</nav>
	<div class="ml-auto flex flex-row gap-4">
		{#if session}
			<a href="/profile" class={linkClasses}>Profile</a>
			<button on:click={() => signOut()} class="transition hover:text-red-400">Sign out</button>
		{:else}
			<button on:click={() => signIn()}>Sign in</button>
		{/if}
	</div>
</header>
