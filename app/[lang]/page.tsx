import ContactUs from '@/components/contact-us';
import Description from '@/components/description';
import Expertise from '@/components/expertise';
import Hero from '@/components/hero';
import { AppleCardsCarouselDemo } from '@/components/sections/hero/carousel';
import Technologies from '@/components/technologies';
import { default as TabletTechnologies } from '@/components/technologies-mobile';
import WhyUsPage from '@/components/why-us';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

interface HomePageProps {
	params: {
		lang: Locale;
	};
}

export default async function HomePage(props: HomePageProps) {
	const resolvedParams = await Promise.resolve(props.params);
	const lang = resolvedParams.lang;
	const dictionary = await getDictionary(lang);

	return (
		<div className="bg-gray-50 mt-14 sm:mt-16">
			<Hero dictionary={dictionary} lang={lang} />
			<Description dictionary={dictionary} />
			<AppleCardsCarouselDemo dictionary={dictionary} />
			<WhyUsPage dictionary={dictionary} />
			<Expertise dictionary={dictionary} />
			<div className="md:hidden">
				<></>
			</div>
			<div className="hidden md:block lg:hidden">
				<TabletTechnologies dictionary={dictionary} />
			</div>
			<div className="hidden lg:block">
				<Technologies dictionary={dictionary} />
			</div>
			<ContactUs dictionary={dictionary} />
		</div>
	);
}
