<script lang="ts">
	import { goto } from '$app/navigation';
	import { TrendingUp, ChartPie, Target, ArrowRight } from '@lucide/svelte';
	import { i18n, i18nList } from '$lib/i18n.svelte.js';

	const features = [
		{
			icon: Target,
			title: 'homepage.planning.title',
			description: 'homepage.planning.description'
		},
		{
			icon: TrendingUp,
			title: 'homepage.suggestion.title',
			description: 'homepage.suggestion.description'
		},
		{
			icon: ChartPie,
			title: 'homepage.analytic.title',
			description: 'homepage.analytic.description'
		}
	];
</script>

<svelte:head>
	<title>Monote</title>
	<meta name="description" content={i18n.t('homepage.description')} />
	<meta property="og:title" content="Monote" />
	<meta property="og:description" content={i18n.t('homepage.description')} />
</svelte:head>

<div class="min-h-screen bg-background text-foreground">
	<!-- Navigation -->
	<header class="sticky top-0 z-50 bg-background/95 border-b border-border">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
			<div class="flex items-center gap-2">
				<div class="w-21 h-8 bg-primary rounded-lg flex items-center justify-center">
					<span class="text-primary-foreground font-bold text-lg">Monote</span>
				</div>
			</div>
			<div class="flex items-center gap-4">
				<div class="relative group w-20">
					<button
						class="w-full flex items-center justify-between bg-secondary text-sm px-4 py-2 rounded-md text-foreground transition-colors hover:bg-muted"
					>
						<span id="langBtn" class="flex-1 text-center">{i18n.language}</span>
					</button>
					<div
						class="absolute right-0 mt-2 w-full bg-popover border border-border rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all"
					>
						{#each i18nList as i18nOption}
							<button
								onclick={() => (i18n.locale = i18nOption.locale)}
								class="w-full text-left px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-colors"
								>{i18nOption.language}</button
							>
						{/each}
					</div>
				</div>
				<button
					onclick={() => goto('/sign-in')}
					class="bg-secondary text-sm px-4 py-2 rounded-md text-foreground transition-colors hover:bg-muted"
				>
					{i18n.t('signIn.action')}
				</button>
				<button
					onclick={() => goto('/sign-up')}
					class="bg-primary text-primary-foreground text-sm px-6 py-2 rounded-md shadow-sm transition-colors hover:bg-primary/90"
				>
					{i18n.t('homepage.redirection.action')}
				</button>
			</div>
		</nav>
	</header>

	<!-- Hero Section -->
	<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<section class="py-20 md:py-32 text-center">
			<div class="space-y-6">
				<h1 class="text-4xl md:text-6xl font-bold text-balance leading-tight">
					{i18n.t('homepage.header.normal')}<span class="text-primary">{i18n.t('homepage.header.span')}</span>
				</h1>
				<p class="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
					{i18n.t('homepage.introduction')}
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
					<button
						onclick={() => goto('/sign-up')}
						class="bg-primary text-primary-foreground px-8 py-3 rounded-md flex items-center justify-center gap-2 text-base shadow-sm transition-colors hover:bg-primary/90"
					>
						{i18n.t('homepage.redirection.action')}
						<ArrowRight size={20} />
					</button>
					<button
						class="bg-secondary text-secondary-foreground px-8 py-3 rounded-md text-base border border-border transition-colors hover:bg-secondary/80"
						onclick={() => goto('#features')}
					>
						{i18n.t('homepage.showDetail')}
					</button>
				</div>
			</div>

			<!-- Hero Visual -->
			<div class="mt-16 md:mt-24 relative">
				<div class="bg-card border border-border rounded-lg shadow-lg p-8 md:p-12">
					<div class="grid grid-cols-3 gap-4 md:gap-8">
						<div class="text-center">
							<div class="text-3xl font-bold text-foreground">
								{i18n.t('homepage.budget.money')}
							</div>
							<p class="text-sm text-muted-foreground mt-2">{i18n.t('homepage.budget.label')}</p>
						</div>
						<div class="text-center border-l border-r border-border">
							<div class="text-3xl font-bold text-destructive">
								{i18n.t('homepage.spent.percent')}
							</div>
							<p class="text-sm text-muted-foreground mt-2">{i18n.t('homepage.spent.label')}</p>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-primary">
								{i18n.t('homepage.remaining.money')}
							</div>
							<p class="text-sm text-muted-foreground mt-2">{i18n.t('homepage.remaining.label')}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section class="py-20 md:py-24" id="features">
			<div class="text-center mb-12 md:mb-16">
				<h2 class="text-3xl md:text-4xl font-bold mb-4">{i18n.t('homepage.feature.header')}</h2>
				<p class="text-lg text-muted-foreground">{i18n.t('homepage.feature.subheader')}</p>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				{#each features as feature}
					{@const Icon = feature.icon}
					<article class="bg-card card-base p-8 hover:shadow-md transition-shadow">
						<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
							<Icon class="text-primary" size={24} />
						</div>
						<h3 class="text-xl font-bold mb-2">{i18n.t(feature.title)}</h3>
						<p class="text-muted-foreground">{i18n.t(feature.description)}</p>
					</article>
				{/each}
			</div>
		</section>

		<!-- CTA Section -->
		<section class="py-20 md:py-24 text-center">
			<article class="space-y-6">
				<h2 class="text-3xl md:text-4xl font-bold">{i18n.t('homepage.redirection.title')}</h2>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
					{i18n.t('homepage.redirection.description')}
				</p>
				<div class="pt-4">
					<button
						onclick={() => goto('/sign-up')}
						class="bg-primary text-primary-foreground px-8 py-3 rounded-md text-base shadow-sm transition-colors hover:bg-primary/90"
					>
						{i18n.t('homepage.redirection.action')}
					</button>
				</div>
			</article>
		</section>
	</main>

	<!-- Footer -->
	<footer
		class="border-t border-border bg-card/50 mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm text-muted-foreground"
	>
		<p>
			Monote &copy; {new Date().getFullYear()} by
			<a href="https://github.com/yozakura-minato">Yozakura Minato</a> . All rights reserved.
		</p>
	</footer>
</div>
