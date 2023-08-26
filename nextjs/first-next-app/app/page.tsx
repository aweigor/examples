import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';

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
      asdasd
    </main>
  );
}
