import { SvelteKitAuth } from '@auth/sveltekit';
import { providers } from './providers';

export const { handle, signIn } = SvelteKitAuth({
	providers,
	pages: {
		signIn: '/signin'
	}
});
