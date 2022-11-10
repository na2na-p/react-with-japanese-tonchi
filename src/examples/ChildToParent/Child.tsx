import React, { Dispatch, SetStateAction, ChangeEvent } from 'react';

import { TextField } from '@mui/material';

type ChildProps = {
	setName: Dispatch<SetStateAction<string>>
}

export default ({ setName }: ChildProps) => {
	const textFieldOnChange = (
		e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setName(e.target.value);
	};

	return (
		<>
			<TextField
				label="名前"
				variant="outlined"
				size="small"
				onChange={textFieldOnChange}
			/>
		</>
	);
};
