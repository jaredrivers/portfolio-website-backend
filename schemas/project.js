export default {
	name: "project",
	type: "document",
	title: "Project",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Name",
		},
		{
			name: "description",
			type: "text",
			title: "Description",
		},
		{
			name: "URL",
			type: "object",
			title: "URLs",
			fields: [
				{ name: "frontend", type: "string" },
				{ name: "backend", type: "string" },
				{ name: "site", type: "string" },
			],
		},
		{
			name: "cover",
			type: "image",
			title: "Cover",
		},
		{
			name: "slug",
			type: "slug",
			title: "Slug",
		},
		{
			name: "technologies",
			type: "array",
			of: [{ type: "reference", to: [{ type: "technology" }] }],
		},
		{
			name: "gallery",
			type: "reference",
			to: [{ type: "gallery" }],
		},
	],
};
