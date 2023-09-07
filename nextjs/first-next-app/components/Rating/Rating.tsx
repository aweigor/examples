import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useState } from 'react';
import { RatingProps } from './Rating.props';

export const Rating = ({ isEditable = false, rating, setRating, className, ...props  }: RatingProps) => {
	
	const  [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5)).fill(<></>);

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<StarIcon
					className={cn(styles.star, {
						[styles.fill]: i < currentRating
					})}
				/>
			);
		});
		setRatingArray[updatedArray];

	};
	return (
		<div {...props}>
			{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
		</div>
	);
};