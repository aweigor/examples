import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children?: ReactNode;
	isEditable?: boolean;
	rating: number;
	setRating?: (rating: number) => void;
}