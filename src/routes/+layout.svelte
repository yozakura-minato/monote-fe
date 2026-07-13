<script lang="ts">
	import './layout.css';
	import { Toaster } from 'svelte-sonner';
	const { children } = $props();
</script>

<Toaster richColors position="top-center" />

{@render children()}
