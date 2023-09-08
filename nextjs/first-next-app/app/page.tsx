"use client";

import Logo from '@/public/vercel.svg';
import styles from './page.module.css';
import { Metadata } from 'next';
import { Htag, P, Tag } from '@/components';
import { Button } from '@/components/Button/Button';
import { Rating } from '@/components/Rating/Rating';
import { useState } from 'react';

/*
export const metadata: Metadata = {
  title: "MyTitle"
};
*/

/*
export async function generateMetadata(): Promise<Metadata> {
  // ...
  return {
    title: 'ComputedMeta',
    icons: {
      icon: '/icon.ico'
    }
  };
}
*/

export default function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <main className={styles.main}>
      <div>
        <Logo fill="red" width="200" height="200"/>
      </div>
      <Htag tag="h1">Test</Htag>
      <Button appearance='primary' arrow='down'>Button</Button>
      <P>test</P>
      <Tag size='s'>Small</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </main>
  );
}
