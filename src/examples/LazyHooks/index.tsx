import React, { useState, useRef } from 'react';

import { TextField } from '@mui/material';

import Button from '@/components/Button';
import Typography from '@/components/Layout/Typography';
import Divider from '@/components/Layout/Divider';

import LazyHooks from './LazyHooks';

export default () => {
	const [value, setValue] = useState<string | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		setValue(inputRef.current?.value || null);
	};

	return (
		<>
			{/* valueがnullでなければLazyHooksを呼び出す */}
			{value && <LazyHooks value={value} />}
			<Typography variant='h5'>Valueに値が入るまでHookが走らない</Typography>
			<TextField
				label="value"
				variant="outlined"
				size="small" inputRef={inputRef} />
			<Button variant="contained" onClick={handleClick}>値のセット</Button>
			<Divider />
		</>
	);
};
