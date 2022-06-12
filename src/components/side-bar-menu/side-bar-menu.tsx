import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'side-bar-menu',
  styleUrl: './side-bar-menu.sass',
  shadow: true,
})
export class SideBarMenu {
  @Prop() title: string
  @Prop({reflect: true, mutable: true}) open: boolean
  @Prop() theme: string

  handleSideBar() {
    this.open = !this.open
  }

  render() {
    return this.open ? (
      <aside class={`side-bar-container ${this.theme}`}>
          <div class={`close-button`} onClick={this.handleSideBar.bind(this)}>
            <img src="../../assets/svg/close-svgrepo-com.svg" alt="icon" width="20" />
          </div>
        <header class="side-bar-header">
          <h1 class="title">{this.title}</h1>
        </header>

        <div class="side-bar-main">
          <nav class="side-bar-nav">
            <slot/>
          </nav>
        </div>
      </aside>
    ) : (
        <div class="hamburger-menu-button">
          <img
          src="../../assets/svg/menu-svgrepo-com.svg"
          alt="icon"
          width="30"
          class="hamburger-menu"
          onClick={this.handleSideBar.bind(this)}/>
        </div>
    );
  }
}
