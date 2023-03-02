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
	s3ImageUriList: string[];
	responseCategoryDTO: ResponseCategoryDTO;
	postImageDtoList: PostImageDtoList[];
	fashionPickupEntityId: number;
	fundingEntityId?: number;
	portfolioEntityId: number;
}
export interface PostInfo {
	postType: string;
	category: string;
	body: string;
	title: string;
	hashTag: Array<string>;
	fileImage: File[];
}
