import {
  CSSProperties,
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
} from "react";

export enum Actions {
  "previous" = "previous",
  "next" = "next",
  "idle" = "idle",
}

export enum FramerTransitions {
  tween = "tween",
  spring = "spring",
}

type HeightSetterProps = {
  slideWidth: CircularCarouselProps["slideWidth"];
  aspectRatio: CircularCarouselProps["aspectRatio"];
};

type Children = ReactElement<any, any> | null;

type MediaProps = {
  mediaPool: {
    slideUUID: string;
    [key: string]: any;
  }[];
  positions: number[];
  activeIdx: number;
};

type CircularCarouseContextProps = {
  media: MediaProps;
  action: Actions;
  setAction: Dispatch<SetStateAction<Actions>>;
  setMedia: Dispatch<SetStateAction<MediaProps>>;
  activeIdx: number;
  animationType: FramerTransitions;
  slideWidth: number;
  slideGap: number;
  aspectRatio: string;
  handleNext: () => void;
  handlePrev: () => void;
  innerCarouselWidth: number | undefined;
  setInnerCarouselWidth: Dispatch<SetStateAction<number>>;
  isDynamic: boolean;
};

type CircularCarouselWrapperProps = {
  mediaPool: Record<string, any>[];
  className?: string;
  styles?: CSSProperties;
  customControls?: boolean;
  slideWidth: number;
  slideGap?: number;
  slideComponent?: FC<any>;
  slideOffset?: number;
  slideClassName?: string;
  slideStyles?: CSSProperties[];
  aspectRatio?: string;
  animationType?: FramerTransitions;
  indicators?: boolean;
  dynamicWidth?: boolean;
  onChange?: (activeIdx: any) => void;
};

type CircularCarouselProps = {
  media: MediaProps;
  action: Actions;
} & CircularCarouselWrapperProps;

type ControlProps = {
  handleSelect?: () => void;
  handleNext: () => void;
  handlePrev: () => void;
  active: boolean;
  cb?: () => void
};

type CircularCarouselContextWrapperProps = {
  children: Children;
  animationType?: FramerTransitions;
  slideWidth: number;
  slideGap?: number | undefined;
  aspectRatio?: string | undefined;
  onChange?: (activeItem: Record<string, any>) => void;
} & CircularCarouselWrapperProps;

export type {
  ControlProps,
  CircularCarouselProps,
  CircularCarouselWrapperProps,
  MediaProps,
  CircularCarouseContextProps,
  Children,
  CircularCarouselContextWrapperProps,
  HeightSetterProps,
};
