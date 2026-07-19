import { fail, superValidate, message } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { SignInSchema } from './Schema.js';
import type { Actions, PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
    const form = await superValidate(valibot(SignInSchema));
    return { form };
};

export const actions: Actions = {
    default: async ({ request, fetch }) => {
        const form = await superValidate(request, valibot(SignInSchema));

        if (!form.valid) return fail(400, { form });

        try {
            const response = await fetch('http://localhost:8080/api/sign-in', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form.data)
            });
            const responseBody = await response.json().catch(() => null);
            
            if (!response.ok) {
                return message(
                    form,
                    { type: 'error', text: responseBody?.error ?? 'general.badRequest' },
                    { status: response.status as any }
                );
            }

            console.log(responseBody?.data.accessToken);
            console.log(responseBody?.data.refreshToken);
            
            return message(
                form,
                { type: 'success', text: 'signIn.success' }
            );

        } catch (err) {
            return message(
                form,
                { type: 'error', text: 'general.internalServerError' },
                { status: 500 }
            );
        }
    }
};