import { useCallback, useState, ChangeEvent } from 'react';

type ReturnTypes = [
	string,
	(e: React.ChangeEvent<HTMLInputElement>) => void,
	React.Dispatch<React.SetStateAction<string>>
];

const useInput = (initialData: string): ReturnTypes => {
	const [value, setValue] = useState(initialData);
	const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}, []);
	return [value, handler, setValue];
};

export default useInput;
