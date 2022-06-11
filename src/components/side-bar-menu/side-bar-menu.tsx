import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'side-bar-menu',
  styleUrl: './side-bar-menu.sass',
  shadow: true,
})
export class SideBarMenu {
  @Prop() title: string = '';
  @Prop({reflect: true, mutable: true}) open: boolean

  handleSideBar() {
    this.open = !this.open
    console.log(this.open)
  }

  render() {
    return this.open ? (
      <aside class="side-bar-container">
        <header class="side-bar-header">
          <button class="close-button" onClick={this.handleSideBar.bind(this)}>x</button>
          <h1 class="title">{this.title}</h1>
        </header>

        <div class="side-bar-main">
          <slot />
        </div>
      </aside>
    ) : (
      <button onClick={this.handleSideBar.bind(this)}>teste</button>
    );
  }
}
