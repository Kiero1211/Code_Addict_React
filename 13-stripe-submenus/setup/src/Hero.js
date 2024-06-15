import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
	const { closeSubmenu } = useGlobalContext();

	return (
		<section className="hero">
			<div className="hero-center">
				<article className="hero-info">
					<h1>Payments infrastructure for the internet</h1>
					<p>
						Join the millions of companies of all sizes that use Stripe to accept payments online and in
						person, embed financial services, power custom revenue models, and build a more profitable
						business.
					</p>
          <button className="btn">Start now</button>
				</article>
				<article className="hero-images">
					<img
						src={phoneImg}
						alt="phone decoration"
						className="phone-img"
					/>
				</article>
			</div>
		</section>
	);
};

export default Hero;
