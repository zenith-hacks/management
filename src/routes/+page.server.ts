import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
    const session = await event.locals.auth();

    // If the user is already signed in, redirect to dashboard
    if (session) {
        throw redirect(303, '/dashboard');
    }
};