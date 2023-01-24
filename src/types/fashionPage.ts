export interface CardRes {
	body: string;
	dueDate: Date;
	fundedPrice: number;
	fundingEntityId: number;
	percentage: number;
	postImageDto: {
		fileName: string;
		fileURI: string;
	};
	tags: any;
	targetPrice: number;
	title: string;
	displayName: string;
	pickup: number;

	views: number;
}
