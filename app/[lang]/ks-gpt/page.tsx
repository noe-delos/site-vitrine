import KsChat from '@/components/sections/ks-chat';
import { BackgroundGradientAnimation } from '@/components/acernity/background-gradient-animation';
import { getDictionary } from '@/get-dictionary';

export default async function Page({ params }: any) {
	const dictionary = await getDictionary(params.lang);

	return (
		<div className="fixed inset-0 overflow-hidden">
			<div className="absolute inset-0 z-0">
				<BackgroundGradientAnimation
					gradientBackgroundStart="hsl(263, 100%, 95%)"
					gradientBackgroundEnd="hsl(226, 100%, 95%)"
					firstColor="89, 87, 255"
					secondColor="115, 86, 255"
					thirdColor="78, 126, 255"
					fourthColor="105, 170, 255"
					fifthColor="143, 192, 255"
					pointerColor="112, 102, 255"
					size="80%"
					blendingValue="hard-light"
					interactive={false}
				/>
			</div>
			<div className="relative z-10 h-full">
				<KsChat dictionary={dictionary} lang={params.lang} />
			</div>
		</div>
	);
}
