import { Component, h, Prop } from "@stencil/core";


@Component({
  tag: "side-drawer",
  styleUrls: ['./side-drawer.css'],
  shadow: true
})
export class SideDrawer {
  @Prop() title: string;  
  @Prop() open: boolean;


  render() {
    let content  = null;
    if (this.open) {
      content = (
        <aside>
          <header>
            <h1>{this.title}</h1>
          </header>
          <main>
            <slot />
          </main>
        </aside>
      )
    }
    return content;
  }
}
