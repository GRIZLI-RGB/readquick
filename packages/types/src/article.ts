export interface aArticleContent {
	blocks: {
		type: "heading" | "paragraph" | "image";
		text?: string;
		url?: string;
	}[];
}
