"use client";

import { ShineBorder } from "@/components/acernity/border";
import { FollowerPointerCard } from "@/components/acernity/following-pointer";
import Press from "@/components/socials";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const LeftSection: React.FC<{ dictionary: any; lang: string }> = ({
  dictionary,
  lang,
}) => {
  const router = useRouter();
  const [isIOS, setIsIOS] = React.useState(false);

  React.useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);
  }, []);

  const iosStyles = isIOS
    ? {
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        WebkitPerspective: 1000,
        perspective: 1000,
      }
    : {};

  return (
    <div className="flex-1 space-y-8 sm:px-8 lg:pr-8 text-center lg:text-left mt-10 lg:mt-0 pb-10 pl-0">
      {/* Mobile gradient cloud */}
      <div className="absolute top-0 right-0 md:hidden opacity-20">
        <div className="size-48 bg-gradient-to-bl from-purple-400 via-blue-400 to-transparent rounded-bl-full blur-xl" />
        <div className="absolute -top-8 right-12 size-32 bg-gradient-to-tr from-blue-500/30 to-transparent rounded-full blur-lg" />
        <div className="absolute top-12 -right-4 size-24 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-xl" />
      </div>

      <h1
        className={cn(
          "text-[2.8rem] md:text-[2.5rem] pt-10 sm:pt-0 font-extrabold sm:text-3xl md:text-5xl lg:text-[3.7rem] md:font-bold leading-[3rem] sm:leading-tight flex flex-col h-fit",
          lang === "en" && "lg:text-[3.8rem]"
        )}
      >
        <div className="flex flex-row justify-center lg:justify-start flex-wrap">
          <span className="font-extrabold font-sans">
            {dictionary.hero.title.part1} <br className="block md:hidden" />
            <span className="hidden md:inline m-0 p-0">
              {dictionary.hero.title.part2}
            </span>
            <div className="flex md:hidden flex-row gap-2">
              {" "}
              {dictionary.hero.title.part2}
              <span className="font-extrabold font-sans block md:hidden bg-clip-text pr-3 text-transparent bg-gradient-to-r  from-violet-400 to-blue-500">
                {dictionary.hero.title.part3}
              </span>
            </div>
          </span>
        </div>
        <div className="font-extrabold font-sans mt-0 flex flex-row justify-center lg:justify-start flex-wrap">
          <span className="font-extrabold font-sans hidden md:block bg-clip-text pr-3 text-transparent bg-gradient-to-r  from-violet-400 to-blue-500">
            {dictionary.hero.title.part3}
          </span>
          {dictionary.hero.title.part4}
          <span
            className={cn(
              "font-extrabold font-sans bg-clip-text ml-3 text-transparent bg-gradient-to-r  from-violet-400 to-blue-500",
              lang === "en" && "ml-3"
            )}
          >
            {dictionary.hero.title.part5}
          </span>
          <img
            src="/fr/hero/aiStar.webp"
            alt=""
            className="size-4 ml-1 mb-2 self-end bottom-0 object-contain"
          />
        </div>
      </h1>

      <p className="text-sm xs:px-28 px-28 sm:text-xl lg:text-[1rem] lg:leading-6 text-gray-500 max-w-xl mx-auto lg:mx-0 sm:px-12 lg:px-0">
        {dictionary.hero.description}
      </p>

      <div className="pt-10 lg:pt-10 w-full flex flex-col">
        {isIOS ? (
          <button
            onClick={() => router.push("/ks-gpt")}
            className="px-4 py-2 self-center bg-gradient-to-r from-violet-400 to-blue-500 w-[10rem] h-[2.5rem] md:w-fit md:h-fit md:max-w-fit md:max-h-fit rounded-md relative group overflow-hidden transition-all duration-300"
          >
            <div
              className={`hidden ${isIOS ? "md:hidden" : "md:absolute"} inset-0 opacity-0 group-hover:opacity-20 bg-white rounded-md blur-md transition-opacity duration-300`}
            />

            <span
              className="flex flex-row items-center relative"
              style={iosStyles as any}
            >
              <span
                className="bg-gradient-to-b from-white to-gray-700 bg-clip-text text-transparent font-extrabold tracking-wider transition-all duration-300 group-hover:from-white group-hover:to-gray-400"
                style={
                  isIOS
                    ? {
                        WebkitTextFillColor: "transparent",
                        display: "block",
                        color: "#fff",
                      }
                    : {}
                }
              >
                {dictionary.hero.try}
              </span>
              <img
                src="/en/logo/brand-logo-white-fadeout.webp"
                alt="circle logo"
                className="ml-2 mr-0.5 w-6 h-6 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span
                className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent font-extrabold tracking-wider transition-all duration-300 group-hover:from-white group-hover:to-gray-300"
                style={
                  isIOS
                    ? {
                        WebkitTextFillColor: "transparent",
                        display: "block",
                        color: "#fff",
                      }
                    : {}
                }
              >
                GPT
              </span>
            </span>
          </button>
        ) : (
          <ShineBorder
            className="min-w-[20%] min-h-[10%] max-w-[50%] max-h-[15%] md:min-w-fit md:min-h-fit md:max-w-fit md:max-h-fit self-center md:selft-start border m-0 pb-5 md:size-fit p-[0.115rem] border-none"
            borderRadius={6}
            borderWidth={3}
            color={["#ffffff", "#000000"]}
          >
            <button
              onClick={() => router.push("/ks-gpt")}
              className="px-4 py-2 bg-gradient-to-b from-black via-zinc-800 to-black w-[10rem] h-[2.5rem] md:w-fit md:h-fit md:max-w-fit md:max-h-fit rounded-md relative group overflow-hidden transition-all duration-300"
            >
              <div
                className={`hidden ${isIOS ? "md:hidden" : "md:absolute"} inset-0 opacity-0 group-hover:opacity-20 bg-white rounded-md blur-md transition-opacity duration-300`}
              />

              <span
                className="flex flex-row items-center relative"
                style={iosStyles as any}
              >
                <span
                  className="bg-gradient-to-b from-white to-gray-700 bg-clip-text text-transparent font-extrabold tracking-wider transition-all duration-300 group-hover:from-white group-hover:to-gray-400"
                  style={
                    isIOS
                      ? {
                          WebkitTextFillColor: "transparent",
                          display: "block",
                          color: "#fff",
                        }
                      : {}
                  }
                >
                  {dictionary.hero.try}
                </span>
                <img
                  src="/en/logo/brand-logo-white-fadeout.webp"
                  alt="circle logo"
                  className="ml-2 mr-0.5 w-6 h-6 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span
                  className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent font-extrabold tracking-wider transition-all duration-300 group-hover:from-white group-hover:to-gray-300"
                  style={
                    isIOS
                      ? {
                          WebkitTextFillColor: "transparent",
                          display: "block",
                          color: "#fff",
                        }
                      : {}
                  }
                >
                  GPT
                </span>
              </span>
            </button>
          </ShineBorder>
        )}
        <p className="text-base sm:text-lg mt-14 text-gray-500 mb-6 lg:mb-0 self-center">
          {dictionary.hero.trust}
        </p>
        <Press
          images={[
            "/fr/socials/logo0.webp",
            "/fr/socials/logo1.webp",
            "/fr/socials/logo2.webp",
            "/fr/socials/logo3.webp",
          ]}
          title=""
        />
      </div>
    </div>
  );
};

const MobileImageStack: React.FC<{ dictionary: any }> = ({ dictionary }) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col gap-4">
        {[0, 1].map((index: number) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <FollowerPointerCard>
              {index === 1 ? (
                <ShineBorder
                  className="relative size-full border rounded-full"
                  color={["#6BA1FA", "#266CDE", "#0945A7"]}
                >
                  <div className="relative h-[250px] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 backdrop-blur-sm border border-white/50 rounded-2xl" />
                    <Image
                      src={`/hero/hero${index}.webp`}
                      alt="Hero illustration"
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </ShineBorder>
              ) : (
                <div className="relative h-[250px] w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 backdrop-blur-sm border border-white/50 rounded-2xl" />
                  <Image
                    src={`/hero/hero${index}.webp`}
                    alt="Hero illustration"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </FollowerPointerCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="relative w-full mt-4"
      >
        <div className="relative h-[150px] w-full rounded-xl overflow-hidden group">
          <div className="absolute inset-0 rounded-xl border border-blue-100">
            <div className="absolute inset-[1px] rounded-lg bg-white/5 backdrop-blur-[4px]">
              <div className="absolute inset-[6px] rounded-lg border border-gradient-to-r from-blue-100/50 via-purple-200/50 to-pink-100/50">
                <div className="w-full h-full rounded-lg backdrop-blur-[6px] bg-white/10 flex items-center justify-center overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    whileHover={{ scale: 1.4 }}
                    transition={{
                      delay: 1.1,
                      duration: 0.8,
                      scale: {
                        duration: 4,
                        ease: "easeOut",
                      },
                      hover: {
                        duration: 1,
                        ease: "easeOut",
                      },
                    }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/hero/llms.webp"
                      alt="LLMs Hero"
                      loading="eager"
                      fill
                      sizes="100vw"
                      className="object-cover rounded-lg blur-[1px]"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center font-extrabold"
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    <motion.span className="px-6 py-3 text-2xl font-bold rounded-lg text-gray-800 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent backdrop-blur-md rounded-lg" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent backdrop-blur-md rounded-lg" />
                      <span className="relative z-10 font-extrabold">
                        {dictionary.hero.ai.part1}
                        <span className="bg-gradient-to-r font-extrabold from-purple-600 to-blue-500 bg-clip-text text-transparent">
                          {dictionary.hero.ai.part2}
                        </span>
                        {dictionary.hero.ai.part3}
                      </span>
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ImageStack: React.FC<{ dictionary: any }> = ({ dictionary }) => {
  return (
    <div className="relative w-full h-screen max-h-[600px]">
      {[0, 1].map((index) => (
        <motion.div
          key={index}
          className="absolute left-15 top-15 -translate-x-1/2 -translate-y-1/2"
          initial={{
            opacity: 0,
            x: -100,
            y: index * 100,
          }}
          animate={{
            opacity: 1,
            x: index * 120,
            y: index * 100,
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {index === 1 ? (
            <ShineBorder
              className="relative size-full border rounded-full"
              color={["#6BA1FA", "#266CDE", "#0945A7"]}
            >
              <div className="relative w-[35vw] h-[28vw] max-w-[700px] max-h-[450px] min-w-[280px] min-h-[180px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 backdrop-blur-sm border border-white/50 rounded-2xl" />
                <Image
                  src={`/fr/hero/hero${index}.webp`}
                  alt="Hero illustration"
                  loading="eager"
                  fill
                  className={cn("object-cover")}
                />
              </div>
            </ShineBorder>
          ) : (
            <div className="relative w-[45vw] h-[40vw] max-w-[700px] max-h-[450px] min-w-[280px] min-h-[180px] bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 backdrop-blur-sm border border-white/50 rounded-2xl" />
              <Image
                src={`/fr/hero/hero${index}.webp`}
                alt="Hero illustration"
                fill
                loading="eager"
                className={cn("object-cover")}
              />
            </div>
          )}
        </motion.div>
      ))}

      <div className="absolute bottom-2 right-[0%]">
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 120 }}
          transition={{
            duration: 0.5,
            delay: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative w-[15vw] h-[13vw] max-w-[300px] max-h-[200px] min-w-[200px] min-h-[133px] rounded-xl overflow-hidden group"
        >
          <div className="absolute inset-0 rounded-xl border border-blue-100">
            <div className="absolute inset-[1px] rounded-lg bg-white/5 backdrop-blur-[4px]">
              <div className="absolute inset-[6px] rounded-lg border border-gradient-to-r from-blue-100/50 via-purple-200/50 to-pink-100/50">
                <div className="w-full h-full rounded-lg backdrop-blur-[6px] bg-white/10 flex items-center justify-center overflow-hidden">
                  <motion.img
                    src="/hero/llms.webp"
                    alt="LLMs Hero"
                    loading="eager"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    whileHover={{ scale: 1.4 }}
                    transition={{
                      delay: 1.1,
                      duration: 0.8,
                      scale: {
                        duration: 4,
                        ease: "easeOut",
                      },
                      hover: {
                        duration: 1,
                        ease: "easeOut",
                      },
                    }}
                    className="w-full h-full object-cover rounded-lg blur-[1px]"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    <motion.span className="px-4 py-2 text-[1.5vw] min-text-[16px] max-text-[24px] font-bold rounded-lg text-gray-800 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent backdrop-blur-md rounded-lg" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent backdrop-blur-md rounded-lg" />
                      <span className="relative z-10 extrabold">
                        {dictionary.hero.ai.part1}
                        <span className="bg-gradient-to-r font-extrabold from-purple-600 to-blue-500 bg-clip-text text-transparent">
                          {dictionary.hero.ai.part2}
                        </span>
                        {dictionary.hero.ai.part3}
                      </span>
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const RightSection: React.FC<{ dictionary: any }> = ({ dictionary }) => {
  const router = useRouter();
  return (
    <div className="flex-1 flex items-center justify-center lg:justify-start">
      <div className="hidden lg:flex-1 lg:flex items-center justify-center lg:justify-start">
        <ImageStack dictionary={dictionary} />
      </div>
    </div>
  );
};

const Hero: React.FC<{ dictionary: any; lang: string }> = ({
  dictionary,
  lang,
}) => {
  return (
    <section className="min-h-[70vh] md:min-h-[95vh] flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[90rem] w-full mx-auto z-50">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xs:mt-10">
          <LeftSection dictionary={dictionary} lang={lang} />
          <RightSection dictionary={dictionary} />
        </div>
      </div>
      <div className="absolute z-0 top-15 -right-32 hidden lg:block">
        <img
          src="/logo/brand-logo-white.webp"
          alt="Logo"
          className="w-[32rem] h-fit object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
