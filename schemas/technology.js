export default {
	name: "technology",
	type: "document",
	title: "Technology",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Name",
		},
		{
			name: "icon",
			type: "image",
			title: "Icon",
		},
		{
			name: "order",
			type: "number",
			validation: (Rule) => Rule.integer(),
		},
		{
			name: "mainPage",
			type: "boolean",
		},
	],
};
