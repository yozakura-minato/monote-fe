<script lang="ts">
	import { goto } from '$app/navigation';
	import { TrendingUp, ChartPie, Target, ArrowRight } from '@lucide/svelte';

	const features = [
		{
			icon: Target,
			title: 'Smart Budget Planning',
			description:
				'Create and customize financial plans tailored to your spending goals and income sources.'
		},
		{
			icon: TrendingUp,
			title: 'Allocation Suggestions',
			description:
				'Get intelligent recommendations on how to allocate your money for better financial health.'
		},
		{
			icon: ChartPie,
			title: 'Detailed Analytics',
			description:
				'Track and visualize expenses across categories with comprehensive statistical insights.'
		}
	];
</script>

<svelte:head>
	<title>Monote</title>
	<meta name="description" content="Homepage of Monote - a useful Personal expense tracking tool" />
</svelte:head>

<div class="min-h-screen bg-background text-foreground">
	<!-- Navigation -->
	<header class="sticky top-0 z-50 bg-background/95 border-b border-border">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
			<div class="flex items-center gap-2">
				<div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
					<span class="text-primary-foreground font-bold text-lg">M</span>
				</div>
				<span class="text-xl font-bold">Monote</span>
			</div>
			<div class="flex items-center gap-4">
				<button
					onclick={() => goto('/sign-in')}
					class="bg-secondary text-sm px-4 py-2 rounded-md text-foreground transition-colors hover:bg-muted"
				>
					Sign In
				</button>
				<button
					onclick={() => goto('/sign-up')}
					class="bg-primary text-primary-foreground text-sm px-6 py-2 rounded-md shadow-sm transition-colors hover:bg-primary/90"
				>
					Get Started
				</button>
			</div>
		</nav>
	</header>

	<!-- Hero Section -->
	<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<section class="py-20 md:py-32 text-center">
			<div class="space-y-6">
				<h1 class="text-4xl md:text-6xl font-bold text-balance leading-tight">
					Take Control of Your <span class="text-primary">Financial Health</span>
				</h1>
				<p class="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
					Plan your budget, track expenses, and achieve your savings goals with Monote. Simple,
					powerful, and designed for your financial success.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
					<button
						onclick={() => goto('/sign-up')}
						class="bg-primary text-primary-foreground px-8 py-3 rounded-md flex items-center justify-center gap-2 text-base shadow-sm transition-colors hover:bg-primary/90"
					>
						Start Free <ArrowRight size={20} />
					</button>
					<button
						class="bg-secondary text-secondary-foreground px-8 py-3 rounded-md text-base border border-border transition-colors hover:bg-secondary/80"
					>
						Learn More
					</button>
				</div>
			</div>

			<!-- Hero Visual -->
			<div class="mt-16 md:mt-24 relative">
				<div
					class="absolute inset-0 -z-10 bg-linear-to-b from-primary/10 to-transparent rounded-2xl blur-3xl"
				></div>
				<div class="bg-card border border-border rounded-lg shadow-lg p-8 md:p-12">
					<div class="grid grid-cols-3 gap-4 md:gap-8">
						<div class="text-center">
							<div class="text-3xl font-bold text-foreground">$12,450</div>
							<p class="text-sm text-muted-foreground mt-2">Total Budget</p>
						</div>
						<div class="text-center border-l border-r border-border">
							<div class="text-3xl font-bold text-destructive">68%</div>
							<p class="text-sm text-muted-foreground mt-2">Spent</p>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-primary">$3,984</div>
							<p class="text-sm text-muted-foreground mt-2">Remaining</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section class="py-20 md:py-24">
			<div class="text-center mb-12 md:mb-16">
				<h2 class="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
				<p class="text-lg text-muted-foreground">Everything you need to master your finances</p>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				{#each features as feature}
					{@const Icon = feature.icon}
					<article class="bg-card card-base p-8 hover:shadow-md transition-shadow">
						<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
							<Icon class="text-primary" size={24} />
						</div>
						<h3 class="text-xl font-bold mb-2">{feature.title}</h3>
						<p class="text-muted-foreground">{feature.description}</p>
					</article>
				{/each}
			</div>
		</section>

		<!-- CTA Section -->
		<section class="py-20 md:py-24 text-center">
			<article class="space-y-6">
				<h2 class="text-3xl md:text-4xl font-bold">Ready to Transform Your Finances?</h2>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
					Join thousands of users who have taken control of their financial health with Monote.
				</p>
				<div class="pt-4">
					<button
						onclick={() => goto('/sign-up')}
						class="bg-primary text-primary-foreground px-8 py-3 rounded-md text-base shadow-sm transition-colors hover:bg-primary/90"
					>
						Create Your Free Account
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
