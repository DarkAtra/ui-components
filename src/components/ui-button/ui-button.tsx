import {Component, h, Prop} from "@stencil/core";
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from "../../utils/Breakpoint";
import {getThemeColorRgbaStyles, ThemeColor} from "../../utils/ThemeColor";
import {getSizeMultiplier, Size} from "../../utils/Size";
import {mapKeys, mapValues} from "../../utils/Common";

@Component({
    tag: "ui-button",
    styleUrl: "ui-button.scss",
    shadow: true
})
export class UiButton {

    /**
     * The theme color to be used for this button.
     */
    @Prop() themeColor: BreakpointAwareValue<ThemeColor> = ThemeColor.PRIMARY;

    /**
     * The size of this button.
     */
    @Prop() size: BreakpointAwareValue<Size> = Size.NORMAL;

    /**
     * Whether or not this button should use the outline styles for the provided theme or not.
     */
    @Prop() outline: BreakpointAwareValue<boolean> = false;

    /**
     * Whether or not this button is disabled.
     */
    @Prop() disabled: boolean = false;

    /**
     * The location this button should link to.
     */
    @Prop() href?: string = null;

    render() {
        console.log(this.themeColor, typeof this.themeColor);

        const Tag = this.href ? (this.disabled ? "span" : "a") : "button";
        const style = {
            ...getThemeColorRgbaStyles(getValuePerBreakpointAndFillGaps(this.themeColor, ThemeColor.PRIMARY)),
            ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(this.size, Size.NORMAL), v => getSizeMultiplier(v)),
                key => withBreakpointSuffix("--size", key)),
            ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(this.outline, false), v => v ? 1 : 0),
                key => withBreakpointSuffix("--outline", key))
        };
        return (
            <Tag class={"button"} style={style} disabled={this.disabled} href={this.href} tabIndex={0}>
                <slot name={"prefix"}/>
                <slot/>
                <slot name={"prefix"}/>
            </Tag>
        );
    }
}
