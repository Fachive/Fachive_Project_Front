export interface ResponseCategoryDTO {
	categoryName: string;
}
interface file {}

export interface PostImageDtoList {
	fileName: string;
	fileURI: string;
}

export interface CardRes {
	title: string;
	body: string;
	views: number;
	myPicks: number;
	targetPrice: number;
	fundedPrice: number;
	responseCategoryDTO: ResponseCategoryDTO;
	postImageDtoList: PostImageDtoList[];
	fashionPickupEntityId: number;
	portfolioEntityId: number;
}
export interface PostInfo {
	category: string;
	body: string;
	title: string;
	hashTag: Array<string>;
	fileImage: string[];
}
