import { fail, superValidate, message } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { SignUpSchema } from './Schema.js';
import type { Actions, PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
    const form = await superValidate(valibot(SignUpSchema));
    return { form };
};

export const actions: Actions = {
    default: async ({ request, fetch }) => {
        const form = await superValidate(request, valibot(SignUpSchema));

        if (!form.valid) return fail(400, { form });

        try {
            const response = await fetch('http://localhost:8080/api/sign-up', {
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

            return message(
                form,
                { type: 'success', text: 'signUp.success' }
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