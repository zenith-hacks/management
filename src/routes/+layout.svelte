<script lang="ts">
	import '@fontsource-variable/instrument-sans';
	import '@fontsource-variable/space-grotesk';
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/header/Header.svelte';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<ModeWatcher></ModeWatcher>
<div class="font-sans">
	<Header />
	<main>
		<slot></slot>
	</main>
</div>