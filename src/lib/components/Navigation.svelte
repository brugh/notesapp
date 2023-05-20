<script lang="ts">
	import { drawerStore } from "@skeletonlabs/skeleton";

    const drawerClose = (): void => {
        drawerStore.close();
    }
</script>

<nav class='list-nav p-4 grow'>
	<ul>
		<li><a href="/" on:click={drawerClose}>Notes</a></li>
		<li><a href="/?test=1" on:click={drawerClose}>Notes 1</a></li>
		<li><a href="/?test=2" on:click={drawerClose}>Notes 2</a></li>
		<li><a href="/?test=3" on:click={drawerClose}>Notes 3</a></li>
	</ul>
</nav>
