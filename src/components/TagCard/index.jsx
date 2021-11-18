import React from 'react';
import style from './tags.module.less';

const TagCard = props => {
	const { img, name, description, stack, demo, code } = props;
	return (
		<div className={style.tagCard}>
			<div className={style.tagCard}>
				<img src={img} alt={name} className={style.tagImg} />
				<div className={style.pd20px}>
					<div className='textCenter'>
						<div className={style.name}>{name}</div>
					</div>

					<p>
						<a className={style.down} target='_blank' href={demo}>
							live demo
						</a>
						<span className={style.verticalBar}>|</span>
						<a className={style.down} target='_blank' href={code}>
							source code
						</a>
					</p>

					<p>{description}</p>
					<p>{stack}</p>
				</div>
			</div>
		</div>
	);
};

export default TagCard;
