import { Container } from '../../components';

import image1 from './image1.png';
import styles from './Instructions.module.scss';

export function Instructions() {
	return (
		<Container>
			<div className={styles.container}>
				{[
					{
						img: image1,
						instructions: (
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolore dolorum eius minus doloremque
								aspernatur illum quam facilis rem voluptate harum reiciendis labore debitis et exercitationem est
								beatae, mollitia dolor!
							</p>
						),
					},
					{ img: image1, instructions: <p>Some other text</p> },
					{ img: image1, instructions: <p>More text</p> },
				].map((item, index) => (
					<div key={index} className={styles.wrapper}>
						<a href={item.img} target="_blank">
							<img src={item.img} />
						</a>
						<div>{item.instructions}</div>
					</div>
				))}
			</div>
		</Container>
	);
}
