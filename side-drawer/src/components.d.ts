/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SideDrawer {
        "open": boolean;
        "title": string;
    }
}
declare global {
    interface HTMLSideDrawerElement extends Components.SideDrawer, HTMLStencilElement {
    }
    var HTMLSideDrawerElement: {
        prototype: HTMLSideDrawerElement;
        new (): HTMLSideDrawerElement;
    };
    interface HTMLElementTagNameMap {
        "side-drawer": HTMLSideDrawerElement;
    }
}
declare namespace LocalJSX {
    interface SideDrawer {
        "open"?: boolean;
        "title"?: string;
    }
    interface IntrinsicElements {
        "side-drawer": SideDrawer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "side-drawer": LocalJSX.SideDrawer & JSXBase.HTMLAttributes<HTMLSideDrawerElement>;
        }
    }
}
