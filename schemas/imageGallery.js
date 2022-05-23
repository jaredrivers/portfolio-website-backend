export default {
	name: "gallery",
	type: "document",
	title: "Gallery",
	fields: [
		{ name: "name", type: "string" },
		{
			name: "images",
			type: "array",
			title: "Images",
			of: [{ type: "image" }],
			options: {
				sortable: true,
			},
		},
	],
};
