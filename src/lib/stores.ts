import { localStorageStore } from "@skeletonlabs/skeleton";
import { writable, type Writable } from "svelte/store";

type Note = {
    id: string;
    content: string;
    tags: string[];
}

export const noteStore: Writable<Note[]> = localStorageStore('notes', []);
export const pageHeader = writable('');