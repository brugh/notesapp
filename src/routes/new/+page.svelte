<script lang="ts">
	import { goto } from '$app/navigation';
	import { noteStore, pageHeader } from '$lib/stores';
	import { InputChip, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

    $pageHeader = "New note";

	let tags: string[] = [];
	let content: string;

	const t: ToastSettings = {
		message: 'note created successfully!',
		background: 'variant-filled-success'
	};

	const createNote = (): void => {
		noteStore.update((notes) => [
			...notes,
			{
				id: crypto.randomUUID(),
				content,
				tags
			}
		]);
		content = '';
		tags = [];
        toastStore.trigger(t);
        goto('/');
	};
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<form class="card p-4 flex flex-col gap-3">
		<h2>New note</h2>
		<textarea
			bind:value={content}
			class="textarea"
			rows="4"
			placeholder="Enter some long form content."
		/>
		<InputChip bind:value={tags} name="tags" placeholder="Tags..." />
		<button type="button" on:click={createNote} class="btn variant-ghost-primary self-end"
			>Create note</button
		>
	</form>
</div>
