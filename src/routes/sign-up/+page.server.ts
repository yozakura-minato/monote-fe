import { fail, superValidate, message, type SuperValidated } from 'sveltekit-superforms';
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

        if (!form.valid) {
            return fail(400, { form });
        }

        try {
            const response = await fetch('http://localhost:8080/api/sign-up', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form.data)
            });

            if (!response.ok) {
                const errorData = await response
                    .json()
                    .catch(() => ({ error: 'general.badRequest' }));

                return message(
                    form,
                    { type: 'error', text: errorData.error ?? 'general.badRequest' },
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