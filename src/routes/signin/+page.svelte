<script lang="ts">
	import { SignIn } from '@auth/sveltekit/components';
	import { providerMap } from '../../providers';
	import { siGithub as github, type SimpleIcon } from 'simple-icons';

	const options = {
		redirectTo: '/dashboard'
	};

	interface IconMap {
		[key: string]: SimpleIcon;
	}
	const icons: IconMap = {
		github
	};
</script>

<div class="flex min-h-full items-center justify-center p-4">
	<div
		class="card text-token flex w-full max-w-md flex-col items-center justify-center gap-6 px-8 py-10 shadow-sm"
	>
		<div class="flex flex-col items-center gap-4">
			<h1 class="text-grotesk text-4xl font-bold">SIGN IN</h1>
			{#each providerMap as provider}
				<SignIn provider={provider.id} signInPage="signin" {options}>
					<span class="variant-outline btn w-full justify-center" slot="submitButton">
						<span class="inline-block h-5 w-5 fill-current">{@html icons[provider.id].svg}</span>
						<span>Sign in with {provider.name}</span>
					</span>
				</SignIn>
			{/each}
		</div>
		<hr class="w-full" />
		<p class="text-center opacity-50">
			Need any help? Email the team at <b
				><a href="mailto:team@zenithhacks.org">team@zenithhacks.org</a></b
			>
		</p>
	</div>
</div>
