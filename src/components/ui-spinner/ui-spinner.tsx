import {Component, h, Host, Prop} from '@stencil/core';
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps} from '../../utils/Breakpoint';
import {getThemeColorRgbaStyles, ThemeColor} from '../../utils/ThemeColor';

@Component({
    tag: 'ui-spinner',
    styleUrl: 'ui-spinner.scss',
    shadow: true
})
export class UiSpinner {

    /**
     * The theme color to be used for this spinner.
     */
    @Prop() themeColor?: BreakpointAwareValue<ThemeColor> = ThemeColor.PRIMARY;

    render() {
        return (
            <Host>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={{
                    ...getThemeColorRgbaStyles(getValuePerBreakpointAndFillGaps(this.themeColor, ThemeColor.PRIMARY))
                }}>
                    <circle fill="none" stroke-width={6} stroke-linecap="round" cx="50" cy="50" r="47"/>
                </svg>
            </Host>
        );
    }
}
