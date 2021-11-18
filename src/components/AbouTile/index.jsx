import React from 'react';
import style from './about.module.less';

const AboutTile = props => {
	const { textH1, textH4, textH3 } = props;
	return (
		<div className={style.aboutTile}>
			<div className={`textCenter ${style.mrTp26PX}`}>
				<p className={style.emojis}>{textH1 || ''}</p>
				<h4>{textH4 || ''}</h4>
				<h3>{textH3 || ''}</h3>
			</div>
		</div>
	);
};

export default AboutTile;
