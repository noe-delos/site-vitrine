import type { BoxProps } from '@mui/material/Box';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';
import type { CSSObject } from '@mui/material/styles';

import { Children, forwardRef, isValidElement } from 'react';

import ButtonBase from '@mui/material/ButtonBase';
import { useTheme } from '@mui/material/styles';

import { StyledContainer, StyledRoot } from '../carousel';
import { carouselClasses } from '../classes';
import { CarouselSlide } from './carousel-slide';

import type {
  CarouselOptions,
  CarouselThumbProps,
  CarouselThumbsProps,
} from '../types';

// ----------------------------------------------------------------------

export const CarouselThumbs = forwardRef<
  HTMLDivElement,
  BoxProps & CarouselThumbsProps
>(({ children, slotProps, options, sx, className, ...other }, ref) => {
  const axis = options?.axis ?? 'x';

  const slideSpacing = options?.slideSpacing ?? '12px';

  const maskStyles = useMaskStyle(axis);

  const renderChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const reactChild = child as React.ReactElement<{ key?: React.Key }>;

      return (
        <CarouselSlide
          key={reactChild.key}
          options={{ ...options, slideSpacing }}
          sx={slotProps?.slide}
        >
          {child}
        </CarouselSlide>
      );
    }
    return null;
  });

  return (
    <StyledRoot
      slideSpacing={undefined}
      ref={ref}
      axis={axis}
      className={carouselClasses.thumbs.concat(
        className ? ` ${className}` : '',
      )}
      sx={{
        flexShrink: 0,
        ...(axis === 'x' && { p: 0.5, maxWidth: 1 }),
        ...(axis === 'y' && { p: 0.5, maxHeight: 1 }),
        ...(!slotProps?.disableMask && maskStyles),
        ...sx,
      }}
      {...other}
    >
      <StyledContainer
        component="ul"
        axis={axis}
        slideSpacing={slideSpacing}
        className={carouselClasses.thumbContainer}
        sx={{
          ...slotProps?.container,
        }}
      >
        {renderChildren}
      </StyledContainer>
    </StyledRoot>
  );
});

// ----------------------------------------------------------------------

export function CarouselThumb({
  sx,
  src,
  index,
  selected,
  className,
  ...other
}: ButtonBaseProps & CarouselThumbProps) {
  return (
    <ButtonBase
      className={carouselClasses.thumb.concat(className ? ` ${className}` : '')}
      sx={{
        width: 64,
        height: 64,
        opacity: 0.48,
        flexShrink: 0,
        cursor: 'pointer',
        borderRadius: 1.25,
        transition: (theme: any) =>
          theme.transitions.create(['opacity', 'box-shadow'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.short,
          }),
        ...(selected && {
          opacity: 1,
        }),
        ...sx,
      }}
      {...other}
    >
      <img
        alt="img"
        src={src}
        className={carouselClasses.thumbImage}
        style={{
          width: 1,
          height: 1,
          objectFit: 'cover',
          borderRadius: 'inherit',
        }}
      />
    </ButtonBase>
  );
}

// ----------------------------------------------------------------------

function useMaskStyle(axis: CarouselOptions['axis']): CSSObject {
  const theme = useTheme();

  const baseStyles = {
    zIndex: 9,
    content: '""',
    position: 'absolute',
  };

  if (axis === 'y') {
    return {
      '&::before, &::after': {
        ...baseStyles,
        left: 0,
        height: 40,
        width: '100%',
      },
      '&::before': {
        top: -8,
      },
      '&::after': {
        bottom: -8,
      },
    };
  }

  return {
    '&::before, &::after': {
      ...baseStyles,
      top: 0,
      width: 40,
      height: '100%',
    },
    '&::before': {
      left: -8,
    },
    '&::after': {
      right: -8,
    },
  };
}
