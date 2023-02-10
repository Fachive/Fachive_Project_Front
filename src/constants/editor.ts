import {
	accessory,
	accessoryClick,
	all,
	allClick,
	dress,
	dressClick,
	onepiece,
	onepieceClick,
	outter,
	outterClick,
	pants,
	pantsClick,
	skirt,
	skirtClick,
	suit,
	suitClick,
	tshirts,
	tshirtsClick,
} from '../assets';

export const category: Array<string[]> = [
	['fashion', '패션픽업', '10px 0px 0px 10px'],
	['portfolio', '포트폴리오', '0px 10px 10px 0px'],
];

export const CATEGORY: (any | string)[] = [
	[all, allClick, '전체', 'all'],
	[tshirts, tshirtsClick, '상의', 'tshirts'],
	[outter, outterClick, '아우터', 'outter'],
	[pants, pantsClick, '바지', 'pants'],
	[onepiece, onepieceClick, '원피스', 'onepiece'],
	[skirt, skirtClick, '스커트', 'skirt'],
	[accessory, accessoryClick, '액세서리', 'accessory'],
	[suit, suitClick, '정장', 'suit'],
	[dress, dressClick, '드레스', 'dress'],
];
