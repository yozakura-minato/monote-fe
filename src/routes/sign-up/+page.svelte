<script lang="ts">
	import { goto } from '$app/navigation';
	import { ArrowLeft } from '@lucide/svelte';
	import { superForm } from 'sveltekit-superforms';
	import { valibot } from 'sveltekit-superforms/adapters';
	import { SignUpSchema } from './Schema.js';
	import { toast } from 'svelte-sonner';
	import { t } from 'svelte-i18n';
	import { get } from 'svelte/store';

	let { data } = $props();
	// svelte-ignore state_referenced_locally
	const { form, errors, constraints, enhance } = superForm(data.form, {
		validators: valibot(SignUpSchema),
		validationMethod: 'onsubmit',

		onUpdated({ form }) {
			const translate = get(t);
			const formMessage = form.message;
			if (formMessage) {
				if (formMessage.type === 'success') {
					toast.success(translate(formMessage.text));
					goto('/', { replaceState: true });
				} else if (formMessage.type === 'error') {
					toast.error(translate(formMessage.text));
				}
			}
		}
	});
</script>

<svelte:head>
	<title>Sign Up</title>
	<meta name="description" content="Sign Up of Monote - a useful Personal expense tracking tool" />
</svelte:head>

<div class="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
	<div class="w-full max-w-md">
		<!-- Back Button -->
		<button
			onclick={() => goto('/')}
			class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
		>
			<ArrowLeft size={20} />
			<span class="text-sm">Back to Home</span>
		</button>

		<!-- Card Container -->
		<article class="card-base p-8 md:p-10 space-y-6 shadow-sm">
			<!-- Header -->
			<div class="text-center space-y-2">
				<h1 class="text-primary text-2xl md:text-3xl font-bold">Sign Up</h1>
			</div>

			<!-- Form -->
			<form method="POST" use:enhance class="space-y-4">
				<!-- Full Name Field -->
				<fieldset class="space-y-2">
					<label for="displayName" class="block text-sm font-medium text-foreground">
						Display Name
					</label>
					<div class="relative">
						<input
							type="text"
							id="displayName"
							name="displayName"
							placeholder="John Doe"
							required
							aria-invalid={$errors.displayName ? 'true' : undefined}
							bind:value={$form.displayName}
							{...$constraints.displayName}
							class="input-base pl-10"
							autocomplete="name"
						/>
						{#if $errors.displayName}
							<small class="text-xs text-destructive">{$errors.displayName}</small>
						{/if}
					</div>
				</fieldset>

				<!-- Email Field -->
				<fieldset class="space-y-2">
					<label for="email" class="block text-sm font-medium text-foreground">
						Email Address
					</label>
					<div class="relative">
						<input
							type="email"
							id="email"
							name="email"
							placeholder="your@email.com"
							required
							aria-invalid={$errors.email ? 'true' : undefined}
							bind:value={$form.email}
							{...$constraints.email}
							class="input-base pl-10"
							autocomplete="email"
						/>
						{#if $errors.email}
							<small class="text-xs text-destructive">{$errors.email}</small>
						{/if}
					</div>
				</fieldset>

				<!-- Password Field -->
				<fieldset class="space-y-2">
					<label for="password" class="block text-sm font-medium text-foreground"> Password </label>
					<div class="relative">
						<input
							type="password"
							id="password"
							name="password"
							placeholder="••••••••"
							required
							aria-invalid={$errors.password ? 'true' : undefined}
							bind:value={$form.password}
							{...$constraints.password}
							class="input-base pl-10"
							autocomplete="new-password"
						/>
						{#if $errors.password}
							<small class="text-xs text-destructive">{$errors.password}</small>
						{/if}
					</div>
				</fieldset>

				<!-- Confirm Password Field -->
				<fieldset class="space-y-2">
					<label for="confirmPassword" class="block text-sm font-medium text-foreground">
						Confirm Password
					</label>
					<div class="relative">
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							placeholder="••••••••"
							required
							aria-invalid={$errors.confirmPassword ? 'true' : undefined}
							bind:value={$form.confirmPassword}
							{...$constraints.confirmPassword}
							class="input-base pl-10"
							autocomplete="new-password"
						/>
						{#if $errors.confirmPassword}
							<small class="text-xs text-destructive">{$errors.confirmPassword}</small>
						{/if}
					</div>
				</fieldset>

				<!-- Submit Button -->
				<button type="submit" class="btn-primary w-full py-3 rounded-md font-medium mt-6">
					Sign up
				</button>
			</form>

			<!-- Login Link -->
			<div class="text-center">
				<p class="text-muted-foreground">
					Already have an account?
					<button
						onclick={() => goto('/sign-in')}
						class="text-primary font-medium hover:text-primary/90 transition-colors"
					>
						Sign in
					</button>
				</p>
			</div>
		</article>
	</div>
</div>
