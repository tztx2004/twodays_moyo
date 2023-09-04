import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import MainPage from './main/main';
import Gnb from './gnb';
import Footer from './footer';
import PayDetail from './pay-detail/[id]';

export default function Home() {
	return (
		<>
			<Gnb />
			<MainPage />
			<Footer />
		</>
	);
}
