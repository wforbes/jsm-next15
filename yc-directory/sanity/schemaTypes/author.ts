import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

export const author = defineType({
	name: "author",
	title: "Author",
	icon: UserIcon,
	type: "document",
	fields: [
		defineField({
			name: "id",
			type: "number",
		}),
		defineField({
			name: "name",
			type: "string",
		}),
		defineField({
			name: "username",
			type: "string",
		}),
		defineField({
			name: "email",
			type: "string",
		}),
		defineField({
			name: "image",
			type: "url",
		}),
		defineField({
			name: "bio",
			type: "text",
		})
	],
	preview: {
		select: {
			title: 'name'
		}
	}
})