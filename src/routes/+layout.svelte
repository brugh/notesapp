<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import {
		AppBar,
		AppShell,
		Avatar,
		Drawer,
		Modal,
		Toast,
		drawerStore
	} from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import { pageHeader } from '$lib/stores';

	const drawerOpen = (): void => {
		drawerStore.open({ width: 'w-64' });
	};
</script>

<Drawer>
	<div class="flex flex-row">
		<Navigation />
		<button
			on:click={() => drawerStore.close()}
			class="btn-icon btn-icon-sm variant-filled-error w-8 h-8 m-4"
		>
			X
		</button>
	</div>
</Drawer>
<Modal />
<Toast position="tr" />

<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<strong class="text-=xl uppercase">NotesApp</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Avatar initials="HB" width="w-10" background="bg-primary-500" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<svelte:fragment slot="pageHeader">
		<h2 class="text-4xl text-center">{$pageHeader}</h2>
	</svelte:fragment>

	<div class="container p-10 mx-auto">
		<slot />
	</div>

	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
