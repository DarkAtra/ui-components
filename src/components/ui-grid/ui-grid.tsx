import {Component, h, Host, Prop} from "@stencil/core";
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from "../../utils/Breakpoint";
import {isFixed, mapKeys, mapValues} from "../../utils/Common";

@Component({
    tag: "ui-grid",
    styleUrl: "ui-grid.scss",
    shadow: true
})
export class UiGrid {

    @Prop() inline?: BreakpointAwareValue<boolean> = false;
    @Prop() dense?: BreakpointAwareValue<boolean> = false;
    @Prop() gap?: BreakpointAwareValue<string> = "0";
    @Prop() columns?: BreakpointAwareValue<number | string> = 1;

    render() {
        return (
            <Host style={{
                ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(this.columns, 1), v => isFixed(v) ? `repeat(${v}, minmax(0, 1fr))` : v),
                    key => withBreakpointSuffix("--grid-template-columns", key)),
                ...mapKeys(getValuePerBreakpointAndFillGaps(this.gap, "0"), key => withBreakpointSuffix("--grid-gap", key)),
                ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(this.dense, false), v => v ? "dense" : "row"),
                    key => withBreakpointSuffix("--grid-dense", key)),
                ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(this.inline, false), v => v ? "inline-grid" : "grid"),
                    key => withBreakpointSuffix("--grid-inline", key))
            }}>
                <slot/>
            </Host>
        );
    }
}
