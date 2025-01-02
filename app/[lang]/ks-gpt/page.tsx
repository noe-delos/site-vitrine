import { BackgroundGradientAnimation } from "@/components/acernity/background-gradient-animation";
import KsChat from "@/components/sections/ks-chat";
import { getDictionary } from "@/get-dictionary";

export default async function Page({ params }: any) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundGradientAnimation
          gradientBackgroundStart="hsl(255, 100%, 98%)"
          gradientBackgroundEnd="hsl(255, 100%, 95%)"
          firstColor="167, 139, 250" // violet-400 uniquement
          secondColor="167, 139, 250" // violet-400 uniquement
          fourthColor="59, 130, 246" // blue-500 uniquement
          fifthColor="59, 130, 246" // blue-500 uniquement
          pointerColor="167, 139, 250" // violet-400
          size="50%"
          blendingValue="hard-light"
          interactive={false}
          className="opacity-20"
        />
      </div>
      <div className="relative z-10 h-full">
        <KsChat dictionary={dictionary} lang={params.lang} />
      </div>
    </div>
  );
}
