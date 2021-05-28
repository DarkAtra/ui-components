/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import {HTMLStencilElement, JSXBase} from '@stencil/core/internal';
import {GridDirection, GridHorizontalAlignContent, GridVerticalAlignContent} from './components/ui-grid/ui-grid-item/ui-grid-item';
import {BreakpointAwareValue} from './utils/Breakpoint';
import {FlexAlignItems, FlexDirection} from './utils/Flex';
import {Size} from './utils/Size';
import {ThemeColor} from './utils/ThemeColor';

export namespace Components {
    interface UiAlert {
        /**
         * The alignment of all items in the alert. The alert itself is a flex container.
         */
        'alignItems'?: BreakpointAwareValue<FlexAlignItems>;
        /**
         * The theme color to be used for this alert.
         */
        'themeColor'?: BreakpointAwareValue<ThemeColor>;
    }

    interface UiBadge {
        'href'?: string | null;
        'pill'?: BreakpointAwareValue<boolean>;
        'soft'?: BreakpointAwareValue<boolean>;
        'themeColor'?: BreakpointAwareValue<ThemeColor>;
    }

    interface UiButton {
        /**
         * Whether or not this button is disabled.
         */
        'disabled'?: boolean;
        /**
         * The location this button should link to.
         */
        'href'?: string | null;
        /**
         * Whether or not this button should use the outline styles for the provided theme or not.
         */
        'outline'?: BreakpointAwareValue<boolean>;
        /**
         * The size of this button.
         */
        'size'?: BreakpointAwareValue<Size>;
        /**
         * The theme color to be used for this button.
         */
        'themeColor'?: BreakpointAwareValue<ThemeColor>;
    }

    interface UiFlex {
        /**
         * The alignment of all items in the flex container.
         */
        'alignItems'?: BreakpointAwareValue<FlexAlignItems>;
        /**
         * The direction all items in the flex container are distributed.
         */
        'direction'?: BreakpointAwareValue<FlexDirection>;
        /**
         * Defines the width and height the gap between items in the flex container.
         */
        'gap'?: BreakpointAwareValue<string>;
        /**
         * Whether or not the container should take all the available space or not. - false takes all the available space - true takes only as much space as is required
         */
        'inline'?: BreakpointAwareValue<boolean>;
        /**
         * Whether or not the container should wrap it's items to the next line when not enough space is available.
         */
        'wrap'?: BreakpointAwareValue<boolean>;
    }

    interface UiGrid {
        'columns'?: BreakpointAwareValue<number | string>;
        'dense'?: BreakpointAwareValue<boolean>;
        'gap'?: BreakpointAwareValue<string>;
        'inline'?: BreakpointAwareValue<boolean>;
    }

    interface UiGridItem {
        'direction'?: BreakpointAwareValue<GridDirection>;
        'hAlignContent'?: BreakpointAwareValue<GridHorizontalAlignContent>;
        'order'?: BreakpointAwareValue<number>;
        'spanColumns'?: BreakpointAwareValue<number>;
        'spanRows'?: BreakpointAwareValue<number>;
        'vAlignContent'?: BreakpointAwareValue<GridVerticalAlignContent>;
    }

    interface UiSpinner {
        /**
         * The theme color to be used for this spinner.
         */
        'themeColor'?: BreakpointAwareValue<ThemeColor>;
    }
}
declare global {
    interface HTMLUiAlertElement extends Components.UiAlert, HTMLStencilElement {
    }

    var HTMLUiAlertElement: {
        prototype: HTMLUiAlertElement;
        new(): HTMLUiAlertElement;
    };

    interface HTMLUiBadgeElement extends Components.UiBadge, HTMLStencilElement {
    }

    var HTMLUiBadgeElement: {
        prototype: HTMLUiBadgeElement;
        new(): HTMLUiBadgeElement;
    };

    interface HTMLUiButtonElement extends Components.UiButton, HTMLStencilElement {
    }

    var HTMLUiButtonElement: {
        prototype: HTMLUiButtonElement;
        new(): HTMLUiButtonElement;
    };

    interface HTMLUiFlexElement extends Components.UiFlex, HTMLStencilElement {
    }

    var HTMLUiFlexElement: {
        prototype: HTMLUiFlexElement;
        new(): HTMLUiFlexElement;
    };

    interface HTMLUiGridElement extends Components.UiGrid, HTMLStencilElement {
    }

    var HTMLUiGridElement: {
        prototype: HTMLUiGridElement;
        new(): HTMLUiGridElement;
    };

    interface HTMLUiGridItemElement extends Components.UiGridItem, HTMLStencilElement {
    }

    var HTMLUiGridItemElement: {
        prototype: HTMLUiGridItemElement;
        new(): HTMLUiGridItemElement;
    };

    interface HTMLUiSpinnerElement extends Components.UiSpinner, HTMLStencilElement {
    }

    var HTMLUiSpinnerElement: {
        prototype: HTMLUiSpinnerElement;
        new(): HTMLUiSpinnerElement;
    };

    interface HTMLElementTagNameMap {
        'ui-alert': HTMLUiAlertElement;
        'ui-badge': HTMLUiBadgeElement;
        'ui-button': HTMLUiButtonElement;
        'ui-flex': HTMLUiFlexElement;
        'ui-grid': HTMLUiGridElement;
        'ui-grid-item': HTMLUiGridItemElement;
        'ui-spinner': HTMLUiSpinnerElement;
    }
}
declare namespace LocalJSX {
    interface UiAlert {
        /**
         * The alignment of all items in the alert. The alert itself is a flex container.
         */
        'alignItems'?: BreakpointAwareValue<FlexAlignItems>;
        /**
         * The theme color to be used for this alert.
         */
        'themeColor'?: BreakpointAwareValue<ThemeColor>;
    }

    interface UiBadge {
        'href'?: string | null;
        'pill'?: BreakpointAwareValue<boolean>;
        'soft'?: BreakpointAwareValue<boolean>;
        'themeColor'?: BreakpointAwareValue<ThemeColor>;
    }

    interface UiButton {
        /**
         * Whether or not this button is disabled.
         */
        'disabled'?: boolean;
        /**
         * The location this button should link to.
         */
        'href'?: string | null;
        /**
         * Whether or not this button should use the outline styles for the provided theme or not.
         */
        'outline'?: BreakpointAwareValue<boolean>;
        /**
         * The size of this button.
         */
        'size'?: BreakpointAwareValue<Size>;
        /**
         * The theme color to be used for this button.
         */
        'themeColor'?: BreakpointAwareValue<ThemeColor>;
    }

    interface UiFlex {
        /**
         * The alignment of all items in the flex container.
         */
        'alignItems'?: BreakpointAwareValue<FlexAlignItems>;
        /**
         * The direction all items in the flex container are distributed.
         */
        'direction'?: BreakpointAwareValue<FlexDirection>;
        /**
         * Defines the width and height the gap between items in the flex container.
         */
        'gap'?: BreakpointAwareValue<string>;
        /**
         * Whether or not the container should take all the available space or not. - false takes all the available space - true takes only as much space as is required
         */
        'inline'?: BreakpointAwareValue<boolean>;
        /**
         * Whether or not the container should wrap it's items to the next line when not enough space is available.
         */
        'wrap'?: BreakpointAwareValue<boolean>;
    }

    interface UiGrid {
        'columns'?: BreakpointAwareValue<number | string>;
        'dense'?: BreakpointAwareValue<boolean>;
        'gap'?: BreakpointAwareValue<string>;
        'inline'?: BreakpointAwareValue<boolean>;
    }

    interface UiGridItem {
        'direction'?: BreakpointAwareValue<GridDirection>;
        'hAlignContent'?: BreakpointAwareValue<GridHorizontalAlignContent>;
        'order'?: BreakpointAwareValue<number>;
        'spanColumns'?: BreakpointAwareValue<number>;
        'spanRows'?: BreakpointAwareValue<number>;
        'vAlignContent'?: BreakpointAwareValue<GridVerticalAlignContent>;
    }

    interface UiSpinner {
        /**
         * The theme color to be used for this spinner.
         */
        'themeColor'?: BreakpointAwareValue<ThemeColor>;
    }

    interface IntrinsicElements {
        'ui-alert': UiAlert;
        'ui-badge': UiBadge;
        'ui-button': UiButton;
        'ui-flex': UiFlex;
        'ui-grid': UiGrid;
        'ui-grid-item': UiGridItem;
        'ui-spinner': UiSpinner;
    }
}
export {LocalJSX as JSX};
declare module '@stencil/core' {
    export namespace JSX {
        interface IntrinsicElements {
            'ui-alert': LocalJSX.UiAlert & JSXBase.HTMLAttributes<HTMLUiAlertElement>;
            'ui-badge': LocalJSX.UiBadge & JSXBase.HTMLAttributes<HTMLUiBadgeElement>;
            'ui-button': LocalJSX.UiButton & JSXBase.HTMLAttributes<HTMLUiButtonElement>;
            'ui-flex': LocalJSX.UiFlex & JSXBase.HTMLAttributes<HTMLUiFlexElement>;
            'ui-grid': LocalJSX.UiGrid & JSXBase.HTMLAttributes<HTMLUiGridElement>;
            'ui-grid-item': LocalJSX.UiGridItem & JSXBase.HTMLAttributes<HTMLUiGridItemElement>;
            'ui-spinner': LocalJSX.UiSpinner & JSXBase.HTMLAttributes<HTMLUiSpinnerElement>;
        }
    }
}
