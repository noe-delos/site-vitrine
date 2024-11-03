import type { EmblaCarouselType } from "embla-carousel";

import { useCallback, useEffect, useState } from "react";

import type { UseCarouselAutoPlayReturn } from "../types";

// ----------------------------------------------------------------------

export function useCarouselAutoPlay(
  mainApi?: EmblaCarouselType,
): UseCarouselAutoPlayReturn {
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickAutoplay = useCallback(
    (callback: () => void) => {
      const autoplay: any = mainApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [mainApi],
  );

  const onTogglePlay = useCallback(() => {
    const autoplay: any = mainApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [mainApi]);

  useEffect(() => {
    const autoplay: any = mainApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    mainApi
      ?.on("autoplay:play" as any, () => setIsPlaying(true))
      .on("autoplay:stop" as any, () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(false));
  }, [mainApi]);

  return { isPlaying, onTogglePlay, onClickAutoplay };
}
