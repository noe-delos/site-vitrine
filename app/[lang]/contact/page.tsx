import ContactPage from '@/components/sections/contact';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

interface PageProps {
	params: {
		lang: Locale;
	};
}

export default async function Page(props: PageProps) {
	const resolvedParams = await Promise.resolve(props.params);
	const lang = resolvedParams.lang;
	const dictionary = await getDictionary(lang);

	return <ContactPage dictionary={dictionary} lang={lang} />;
}
