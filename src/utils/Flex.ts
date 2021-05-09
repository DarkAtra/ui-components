export type FlexAlignItems = "start" | "center" | "end" | "stretch";
export type FlexDirection = "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top";

export const ALIGN_ITEMS_TO_CSS_VALUE_MAP: { [key in FlexAlignItems]: string } = {
    "start": "flex-start",
    "center": "center",
    "end": "flex-end",
    "stretch": "stretch"
};

export const DIRECTION_TO_CSS_VALUE_MAP: { [key in FlexDirection]: string } = {
    "left-to-right": "row",
    "right-to-left": "row-reverse",
    "top-to-bottom": "column",
    "bottom-to-top": "column-reverse"
};
