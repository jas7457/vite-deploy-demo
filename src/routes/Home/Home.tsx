import styles from './Home.module.scss';
import { Container } from '../../components';
import heroImg from './hero.png';

export function Home() {
	return (
		<>
			<div className={styles.heroWrapper}>
				<Container className={styles.container}>
					<div className={styles.left}>
						<h1 className={styles.brand}>Addlyn LLC</h1>
						<h2 className={styles.subheading}>Natural Inner Beauty</h2>
						<p>
							Provide deluxe hydration for those with dry or age-related skin concerns. They add intense moisture to
							dehydrated or mature skin, alleviating uneven, sun-damaged textures to promote natural radiance.
						</p>
					</div>

					<div className={styles.right}>
						<img className={styles.heroImg} src={heroImg} />
					</div>
				</Container>
			</div>

			<div className={styles.statsWrapper}>
				<Container className={styles.container}>
					<div className={styles.flex}>
						{[
							{ stat: '25,356', children: 'Happy cutomers' },
							{ stat: '6,050', children: 'Followers' },
							{ stat: '6,050', children: 'Followers' },
							{ stat: '6,050', children: 'Followers' },
						].map((stat, index) => (
							<div key={index}>
								<div className={styles.stat}>{stat.stat}</div>
								<div>{stat.children}</div>
							</div>
						))}
					</div>
				</Container>
			</div>

			<div className={styles.bottomWrapper}>
				<Container className={styles.introWrapper}>
					<h2 className={styles.intro}>Why addlyn?</h2>
					<p className={styles.introParagraph}>
						Yourself required no at throughts delicate landlord it be financial dashwood do is whenever it. Farther be
						chapter at visited married in it pressed.
					</p>

					<div className={styles.blob}>
						{[
							{ title: 'Natural', children: 'Yourself required no at thoughts blah' },
							{ title: 'No Side Effect', children: 'Yourself required no at thoughts blah' },
							{ title: '100% Organic', children: 'Yourself required no at thoughts blah' },
						].map((blob, index) => (
							<div key={index} className={styles.blobWrapper}>
								<h3 className={styles.blobTitle}>{blob.title}</h3>
								<div>{blob.children}</div>
							</div>
						))}
					</div>
				</Container>
			</div>
		</>
	);
}
