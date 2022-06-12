import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'side-bar-nav',
  styleUrl: './side-bar-nav.sass',
  shadow: true,
})

export class SideBarNav{
  @Prop() text : string

  render(){
    return(
      <div class="side-bar-nav">
        {this.text}
      </div>
    )
  }
}