import { Component, h, Prop } from "@stencil/core";


@Component({
  tag: "side-drawer",
  styleUrls: ['./side-drawer.css'],
  shadow: true
})
export class SideDrawer {
  @Prop() title: string;  
  @Prop({ reflect: true, mutable: true}) open: boolean;

  onCloseDrawer() {
    this.open = false;
    console.log("closing Menu...")
  }


  render() {
    let content  = null;
    if (this.open) {
      content = (
        <aside>
          <header>
            <h1>{this.title}</h1>
            <button onClick={this.onCloseDrawer.bind(this)}>x</button>
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
