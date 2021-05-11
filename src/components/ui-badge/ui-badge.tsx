import {Component, Element, h, Host, Prop} from '@stencil/core';
import {HTMLStencilElement} from '@stencil/core/internal';
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from '../../utils/Breakpoint';
import {mapKeys, mapValues} from '../../utils/Common';
import {getThemeColorRgbaStyles, ThemeColor} from '../../utils/ThemeColor';

@Component({
    tag: 'ui-badge',
    styleUrl: 'ui-badge.scss',
    shadow: true
})
export class UiBadge {

    @Prop() themeColor?: BreakpointAwareValue<ThemeColor> = ThemeColor.PRIMARY;
    @Prop() soft?: BreakpointAwareValue<boolean> = false;
    @Prop() pill?: BreakpointAwareValue<boolean> = false;
    @Prop() href?: string | null = null;

    @Element() private hostElement: HTMLStencilElement;

    private hasPrefix: boolean = false;
    private hasSuffix: boolean = false;

    componentWillLoad() {
        this.hasPrefix = !!this.hostElement.querySelector('[slot=\'prefix\']');
        this.hasSuffix = !!this.hostElement.querySelector('[slot=\'suffix\']');
    }

    render() {
        const Tag = this.href ? 'a' : 'div';
        return (
            <Host>
                <Tag class={'badge'} style={{
                    ...getThemeColorRgbaStyles(getValuePerBreakpointAndFillGaps(this.themeColor, ThemeColor.PRIMARY)),
                    ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(this.soft, false), v => v ? 1 : 0),
                        key => withBreakpointSuffix('--badge-soft', key)),
                    ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(this.pill, false), v => v ? 1 : 0),
                        key => withBreakpointSuffix('--badge-pill', key))
                }}>
                    {this.hasPrefix ? (
                        <div class={'prefix'}>
                            <slot name={'prefix'}/>
                        </div>
                    ) : null}
                    <div class={'content'}>
                        <slot/>
                    </div>
                    {this.hasSuffix ? (
                        <div class={'suffix'}>
                            <slot name={'suffix'}/>
                        </div>
                    ) : null}
                </Tag>
            </Host>
        );
    }
}
