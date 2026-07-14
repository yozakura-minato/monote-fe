import { pipe, object, string, trim, minLength, maxLength, toLowerCase, email, check, forward, partialCheck } from 'valibot';
import type { InferOutput } from 'valibot';

export const SignInSchema = pipe(
    object({
        email: pipe(
            string(),
            trim(),
            toLowerCase(),
            email('user.email.isInvalid')
        ),
        password: pipe(
            string(),
            trim()
        )
    })
);

export type SignInInput = InferOutput<typeof SignInSchema>;