import {Component, Element, h, Prop} from "@stencil/core";
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from "../../utils/Breakpoint";
import {getThemeColorRgbaStyles, ThemeColor} from "../../utils/ThemeColor";
import {getSizeMultiplier, Size} from "../../utils/Size";
import {classes, mapKeys, mapValues} from "../../utils/Common";
import {HTMLStencilElement} from "@stencil/core/internal";

@Component({
    tag: "ui-button",
    styleUrl: "ui-button.scss",
    shadow: true
})
export class UiButton {

    /**
     * The theme color to be used for this button.
     */
    @Prop() themeColor?: BreakpointAwareValue<ThemeColor> = ThemeColor.PRIMARY;

    /**
     * The size of this button.
     */
    @Prop() size?: BreakpointAwareValue<Size> = Size.NORMAL;

    /**
     * Whether or not this button should use the outline styles for the provided theme or not.
     */
    @Prop() outline?: BreakpointAwareValue<boolean> = false;

    /**
     * Whether or not this button is disabled.
     */
    @Prop() disabled?: boolean = false;

    /**
     * The location this button should link to.
     */
    @Prop() href?: string | null = null;

    @Element() private hostElement: HTMLStencilElement;

    private hasPrefix: boolean = false;
    private hasSuffix: boolean = false;

    componentWillLoad() {
        this.hasPrefix = !!this.hostElement.querySelector("[slot='prefix']");
        this.hasSuffix = !!this.hostElement.querySelector("[slot='suffix']");
    }

    render() {
        const Tag = this.href ? (this.disabled ? "span" : "a") : "button";
        const style = {
            ...getThemeColorRgbaStyles(getValuePerBreakpointAndFillGaps(this.themeColor, ThemeColor.PRIMARY)),
            ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(this.size, Size.NORMAL), v => getSizeMultiplier(v)),
                key => withBreakpointSuffix("--size", key)),
            ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(this.outline, false), v => v ? 1 : 0),
                key => withBreakpointSuffix("--outline", key))
        };
        return (
            <Tag class={classes("button", this.disabled ? "disabled" : null)} style={style} disabled={this.disabled} href={this.href} tabIndex={0}>
                {this.hasPrefix ? (
                    <div class={"prefix"}>
                        <slot name={"prefix"}/>
                    </div>
                ) : null}
                <div class={"content"}>
                    <slot/>
                </div>
                {this.hasSuffix ? (
                    <div class={"suffix"}>
                        <slot name={"suffix"}/>
                    </div>
                ) : null}
            </Tag>
        );
    }
}
