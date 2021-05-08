import {Component, h, Host, Prop} from "@stencil/core";
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from "../../../utils/Breakpoint";
import {mapKeys, mapValues} from "../../../utils/Common";

export type GridHorizontalAlignContent = "normal" | "left" | "center" | "right" | "stretch";
export type GridVerticalAlignContent = "normal" | "top" | "center" | "bottom" | "space-between" | "space-around";
export type GridDirection = "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top";

const horizontalAlignContentToCssValueMap: { [key in GridHorizontalAlignContent]: string } = {
    "left": "flex-start",
    "center": "center",
    "right": "flex-end",
    "stretch": "stretch",
    "normal": "normal"
};
const verticalAlignContentToCssValueMap: { [key in GridVerticalAlignContent]: string } = {
    "top": "flex-start",
    "center": "center",
    "bottom": "flex-end",
    "space-between": "space-between",
    "space-around": "space-around",
    "normal": "normal"
};
const directionToCssValueMap: { [key in GridDirection]: string } = {
    "left-to-right": "row",
    "right-to-left": "row-reverse",
    "top-to-bottom": "column",
    "bottom-to-top": "column-reverse"
};

@Component({
    tag: "ui-grid-item",
    shadow: true
})
export class UiGridItem {

    @Prop() spanColumns?: BreakpointAwareValue<number> = 1;
    @Prop() spanRows?: BreakpointAwareValue<number> = 1;
    @Prop() order?: BreakpointAwareValue<number> = 0;
    @Prop() hAlignContent?: BreakpointAwareValue<GridHorizontalAlignContent> = "normal";
    @Prop() vAlignContent?: BreakpointAwareValue<GridVerticalAlignContent> = "normal";
    @Prop() direction?: BreakpointAwareValue<GridDirection> = "top-to-bottom";

    render() {
        return (
            <Host style={{
                ...mapKeys(getValuePerBreakpointAndFillGaps(this.spanColumns, 1), key => withBreakpointSuffix("--grid-column", key)),
                ...mapKeys(getValuePerBreakpointAndFillGaps(this.spanRows, 1), key => withBreakpointSuffix("--grid-row", key)),
                ...mapKeys(getValuePerBreakpointAndFillGaps(this.order, 0), key => withBreakpointSuffix("--grid-order", key)),
                ...mapKeys(mapValues<GridHorizontalAlignContent, string>(
                    getValuePerBreakpointAndFillGaps<GridHorizontalAlignContent>(this.hAlignContent, "normal"),
                    v => horizontalAlignContentToCssValueMap[v]
                ), key => withBreakpointSuffix("--grid-horizontal-alignment", key)),
                ...mapKeys(mapValues<GridVerticalAlignContent, string>(
                    getValuePerBreakpointAndFillGaps<GridVerticalAlignContent>(this.vAlignContent, "normal"),
                    v => verticalAlignContentToCssValueMap[v]
                ), key => withBreakpointSuffix("--grid-vertical-alignment", key)),
                ...mapKeys(mapValues<GridDirection, string>(
                    getValuePerBreakpointAndFillGaps<GridDirection>(this.direction, "left-to-right"),
                    v => directionToCssValueMap[v]
                ), key => withBreakpointSuffix("--grid-direction", key))
            }}>
                <slot></slot>
            </Host>
        );
    }
}
