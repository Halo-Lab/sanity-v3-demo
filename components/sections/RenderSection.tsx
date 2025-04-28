import React from "react";
import HeroSection from "../../scenes/Home/components/Hero/Hero";
import BenefitsSection from "../../scenes/Home/components/Benefits/Benefits";
import MobileApp from '../../scenes/Home/components/MobileApp/MobileApp';
import Testimonials from '../../scenes/Home/components/Testimonials/Testimonials';
import PartnersSection from '../../scenes/Home/components/Partners/Partners';
import StatsSection from '../../scenes/Home/components/Stats/Stats';

export default function RenderSection({ section }) {
	switch (section._type) {
		case "heroSection":
			return <HeroSection {...section} />;
		case "benefitsSection":
			return <BenefitsSection {...section} />;
		case "statsSection":
			return <StatsSection {...section} />;
		case "mediaTextSection":
			return <MobileApp {...section} />;
		case "testimonialsSection":
			return <Testimonials {...section} />;
		case "partnersSection":
			return <PartnersSection {...section} />;
		default:
			console.warn(
				`Unknown section type: ${(section as { _type: string })._type}`,
			);
			return null;
	}
}
