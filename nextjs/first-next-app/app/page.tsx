import Image from 'next/image';
import Logo from '@/public/vercel.svg';
import styles from './page.module.css';
import { Metadata } from 'next';
import { Htag } from '@/components';
import { Button } from '@/components/Button/Button';

/*
export const metadata: Metadata = {
  title: "MyTitle"
};
*/

export async function generateMetadata(): Promise<Metadata> {
  // ...
  return {
    title: 'ComputedMeta',
    icons: {
      icon: '/icon.ico'
    }
  };
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Logo fill="red" width="200" height="200"/>
      </div>
      <Htag tag="h1">Test</Htag>
      <Button appearance='primary' arrow='down'>Button</Button>
    </main>
  );
}
