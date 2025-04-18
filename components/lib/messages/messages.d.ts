/**
 *
 * Messages is used to display inline messages with various severities.
 *
 * [Live Demo](https://www.primereact.org/messages)
 *
 * @module messages
 *
 */
import * as React from 'react';
import { CSSTransitionProps as ReactCSSTransitionProps } from 'react-transition-group/CSSTransition';
import { ComponentHooks } from '../componentbase/componentbase';
import { CSSTransitionProps } from '../csstransition';
import { PassThroughOptions } from '../passthrough';
import { IconType, PassThroughType } from '../utils/utils';

export declare type MessagesPassThroughType<T> = PassThroughType<T, MessagesPassThroughMethodOptions>;
export declare type MessagesPassThroughTransitionType = ReactCSSTransitionProps | ((options: MessagesPassThroughMethodOptions) => ReactCSSTransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface MessagesPassThroughMethodOptions {
    props: MessagesProps;
    state: MessagesState;
    hostName?: string;
    index?: number;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link MessagesProps.pt}
 */
export interface MessagesPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: MessagesPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Uses to pass attributes to the wrapper's DOM element.
     */
    wrapper?: MessagesPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: MessagesPassThroughType<React.SVGProps<SVGSVGElement> | React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Uses to pass attributes to the summary's DOM element.
     */
    summary?: MessagesPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Uses to pass attributes to the detail's DOM element.
     */
    detail?: MessagesPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Uses to pass attributes to the button's DOM element.
     */
    button?: MessagesPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Uses to pass attributes to the button icon's DOM element.
     */
    buttonIcon?: MessagesPassThroughType<React.SVGProps<SVGSVGElement> | React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to manage all lifecycle hooks
     * @see {@link ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control React Transition API.
     */
    transition?: MessagesPassThroughTransitionType;
}

/**
 * Defines current inline state in Messages component.
 */
export interface MessagesState {
    /**
     * Array of messages
     */
    messages: Array<{
        _pId: number;
        message: MessagesMessage;
    }>;
}

export interface MessagesMessage {
    /**
     * Unique id of the message.
     */
    id?: string | undefined;
    /**
     * Severity of the message.
     */
    severity?: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast' | undefined;
    /**
     * Custom template of the message.
     */
    content?: React.ReactNode | undefined;
    /**
     * Summary content of the message.
     */
    summary?: React.ReactNode;
    /**
     * Detail content of the message.
     */
    detail?: React.ReactNode;
    /**
     * Whether the message can be closed manually using the close icon.
     * @defaultValue true
     */
    closable?: boolean;
    /**
     * Icon of the close button.
     */
    closeIcon?: IconType<MessagesProps> | undefined;
    /**
     * When enabled, message is not removed automatically.
     */
    sticky?: boolean;
    /**
     * Delay in milliseconds to close the message automatically.
     * @defaultValue 3000
     */
    life?: number;
    /**
     * Defines the icon to display.
     * @defaultValue Defaults to severity icon
     */
    icon?: IconType<MessagesProps> | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {MessagesPassThroughOptions}
     */
    pt?: MessagesPassThroughOptions;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid properties in Messages component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface MessagesProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref' | 'pt'> {
    /**
     * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
     */
    transitionOptions?: CSSTransitionProps | undefined;
    /**
     * Callback to invoke when a message is removed.
     * @param {MessagesMessage} message - Removed message.
     */
    onRemove?(message: MessagesMessage): void;
    /**
     * Callback to invoke when a message gets clicked.
     * @param {MessagesMessage} message - Clicked message.
     */
    onClick?(message: MessagesMessage): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {MessagesPassThroughOptions}
     */
    pt?: MessagesPassThroughOptions;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * **PrimeReact - Messages**
 *
 * _Messages is used to display inline messages with various severities._
 *
 * [Live Demo](https://www.primereact.org/messages/)
 * --- ---
 * ![PrimeReact](https://primefaces.org/cdn/primereact/images/logo-100.png)
 *
 * @group Component
 */
export declare class Messages extends React.Component<MessagesProps, any> {
    /**
     * Used to show the message.
     * @param {MessagesMessage | MessagesMessage[]} message - Showed message.
     */
    public show(message: MessagesMessage | MessagesMessage[]): void;
    /**
     * Used to clear the shown messages.
     */
    public clear(): void;
    /**
     * Used to add new messages after removing all old messages.
     * @param {MessagesMessage | MessagesMessage[]} message - New message.
     */
    public replace(message: MessagesMessage | MessagesMessage[]): void;
    /**
     * Used to remove messages.
     * @param {MessagesMessage | MessagesMessage[]} message - Message to remove
     */
    public remove(message: MessagesMessage | MessagesMessage[]): void;
    /**
     * Used to get container element.
     * @return {HTMLDivElement | null} Container element
     */
    public getElement(): HTMLDivElement | null;
}
