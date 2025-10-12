import { createDirectus, rest, readItems, createItem, updateItem, deleteItem } from '@directus/sdk';

const directus = createDirectus('https://directuscon.axtlust.de').with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItems, createItem, updateItem, deleteItem },
	};
});