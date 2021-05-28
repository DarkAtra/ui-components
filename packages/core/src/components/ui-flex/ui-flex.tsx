import {Component, h, Host, Prop} from '@stencil/core';
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from '../../utils/Breakpoint';
import {mapKeys, mapValues} from '../../utils/Common';
import {ALIGN_ITEMS_TO_CSS_VALUE_MAP, DIRECTION_TO_CSS_VALUE_MAP, FlexAlignItems, FlexDirection} from '../../utils/Flex';

@Component({
    tag: 'ui-flex',
    styleUrl: 'ui-flex.scss',
    shadow: true
})
export class UiFlex {

    /**
     * The direction all items in the flex container are distributed.
     */
    @Prop() direction?: BreakpointAwareValue<FlexDirection> = 'left-to-right';

    /**
     * The alignment of all items in the flex container.
     */
    @Prop() alignItems?: BreakpointAwareValue<FlexAlignItems> = 'start';

    /**
     * Whether or not the container should take all the available space or not.
     * - false takes all the available space
     * - true takes only as much space as is required
     */
    @Prop() inline?: BreakpointAwareValue<boolean> = false;

    /**
     * Defines the width and height the gap between items in the flex container.
     */
    @Prop() gap?: BreakpointAwareValue<string> = '0';

    /**
     * Whether or not the container should wrap it's items to the next line when not enough space is available.
     */
    @Prop() wrap?: BreakpointAwareValue<boolean> = false;

    render() {
        return (
            <Host style={{
                ...mapKeys(mapValues<FlexAlignItems, string>(getValuePerBreakpointAndFillGaps<FlexAlignItems>(this.alignItems, 'start'),
                    v => ALIGN_ITEMS_TO_CSS_VALUE_MAP[v]), key => withBreakpointSuffix('--flex-align-items', key)),
                ...mapKeys(getValuePerBreakpointAndFillGaps(this.gap, '0'), key => withBreakpointSuffix('--flex-gap', key)),
                ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(this.inline, false), v => v ? 'inline-flex' : 'flex'),
                    key => withBreakpointSuffix('--flex-inline', key)),
                ...mapKeys(mapValues<FlexDirection, string>(getValuePerBreakpointAndFillGaps<FlexDirection>(this.direction, 'left-to-right'),
                    v => DIRECTION_TO_CSS_VALUE_MAP[v]), key => withBreakpointSuffix('--flex-direction', key)),
                ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(this.wrap, false), v => v ? 'wrap' : 'nowrap'),
                    key => withBreakpointSuffix('--flex-wrap', key))
            }}>
                <slot/>
            </Host>
        );
    }
}
