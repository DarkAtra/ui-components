import {Component, Element, h, Host, Prop} from "@stencil/core";
import {HTMLStencilElement} from "@stencil/core/internal";
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from "../../utils/Breakpoint";
import {getThemeColorRgbaStyles, ThemeColor} from "../../utils/ThemeColor";
import {mapKeys, mapValues} from "../../utils/Common";
import {ALIGN_ITEMS_TO_CSS_VALUE_MAP, FlexAlignItems} from "../../utils/Flex";

@Component({
    tag: "ui-alert",
    styleUrl: "ui-alert.scss",
    shadow: true
})
export class UiAlert {

    /**
     * The theme color to be used for this alert.
     */
    @Prop() themeColor?: BreakpointAwareValue<ThemeColor> = ThemeColor.PRIMARY;

    /**
     * The alignment of all items in the alert. The alert itself is a flex container.
     */
    @Prop() alignItems?: BreakpointAwareValue<FlexAlignItems> = "center";

    @Element() private hostElement: HTMLStencilElement;

    private hasPrefix: boolean = false;
    private hasSuffix: boolean = false;

    componentWillLoad() {
        this.hasPrefix = !!this.hostElement.querySelector("[slot='prefix']");
        this.hasSuffix = !!this.hostElement.querySelector("[slot='suffix']");
    }

    render() {
        return (
            <Host style={{
                ...getThemeColorRgbaStyles(getValuePerBreakpointAndFillGaps(this.themeColor, ThemeColor.PRIMARY)),
                ...mapKeys(mapValues<FlexAlignItems, string>(getValuePerBreakpointAndFillGaps<FlexAlignItems>(this.alignItems, "start"),
                    v => ALIGN_ITEMS_TO_CSS_VALUE_MAP[v]), key => withBreakpointSuffix("--flex-align-items", key))
            }}>
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
            </Host>
        );
    }
}
