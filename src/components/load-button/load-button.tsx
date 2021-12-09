import React from 'react';

import './load-button.less';

type Props = {
	text: string,
	onLoad: (evt: React.MouseEvent<HTMLButtonElement>) => void,
	disabled: boolean
};

const LoadButton = ({ text, onLoad, disabled }: Props) => {
	return (
		<button onClick={onLoad}
						disabled={disabled}
						className="load-button"
		>
			{text}
		</button>
	);
};

export default LoadButton;