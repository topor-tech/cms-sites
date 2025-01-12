import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Сайт с расписание хакатонов" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <p>
            Тут скоро будет список хакатонов и ссылки на них
          </p>
        </main>
        <footer className={styles.footer}>
            <a href="/other">
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Где еще искать хакатоны →
          </a>
        </footer>
      </div>
    </>
  );
}
