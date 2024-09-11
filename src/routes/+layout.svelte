<script lang="ts">
	import '@fontsource-variable/instrument-sans';
	import '@fontsource-variable/space-grotesk';
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<ModeWatcher></ModeWatcher>
<slot></slot>
