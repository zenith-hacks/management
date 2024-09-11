<script lang="ts">
	import { SignIn } from '@auth/sveltekit/components';
	import { providerMap } from '../../providers';
</script>

<div>
	<h1 class="text-grotesk text-4xl font-bold">ZENITH 2025</h1>
	<div>
		{#each providerMap as provider}
			<SignIn provider={provider.id} signInPage="signin" className="w-full">
				<div slot="submitButton">
					<span>
						Sign in with {provider.name}
					</span>
				</div>
			</SignIn>
		{/each}
	</div>
</div>
