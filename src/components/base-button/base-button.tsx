import { Component, h } from "@stencil/core";

@Component({
  tag: 'base-button',
  styleUrl: 'base-button.sass',
  shadow: true
})

export class BaseButton {
  render(){
    return(
      <div>ola, mundo</div>
    )
  }
}
