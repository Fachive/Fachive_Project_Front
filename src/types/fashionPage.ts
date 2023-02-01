export interface ResponseCategoryDTO {
	categoryName: string;
}

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
