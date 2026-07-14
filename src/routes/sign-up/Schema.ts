import { pipe, object, string, trim, minLength, maxLength, toLowerCase, email, check, forward, partialCheck } from 'valibot';
import type { InferOutput } from 'valibot';
import isStrongPassword from '$lib/utils/password-streight-validatior.js';

export const SignUpSchema = pipe(
    object({
        displayName: pipe(
            string(),
            trim(),
            minLength(1, 'user.displayName.isNull'),
            maxLength(50, 'user.displayName.hasInvalidSize')
        ),
        email: pipe(
            string(),
            trim(),
            toLowerCase(),
            email('user.email.isInvalid')
        ),
        password: pipe(
            string(),
            trim(),
            minLength(8, 'user.password.hasInvalidSize'),
            maxLength(64, 'user.password.hasInvalidSize'),
            check(isStrongPassword, 'user.password.isWeak')
        ),
        confirmPassword: pipe(
            string(),
            trim()
        )
    }),
    forward(
        partialCheck([['password'], ['confirmPassword']],
            (input) => input.password.trim() === "" || input.password.trim() === input.confirmPassword.trim(),
            'user.confirmPassword.doesNotMatch'
        ), ['confirmPassword']
    )
);

export type SignUpInput = InferOutput<typeof SignUpSchema>;