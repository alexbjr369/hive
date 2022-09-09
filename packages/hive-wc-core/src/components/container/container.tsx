import { ContainerSizeValues } from '@alexbjr369/hive-common';
import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'hv-container',
  styleUrl: 'container.scss',
  shadow: true,
})
export class Container implements ComponentInterface {
  /**
   * Defines the component size.
   */
  @Prop({ reflect: true }) size?: ContainerSizeValues;

  render() {
    const { size } = this;

    return (
      <Host
        class={{
          'hv-container': true,
          [`hv-container_${size}`]: size !== undefined,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
