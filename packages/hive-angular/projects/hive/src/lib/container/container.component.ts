import { ContainerSizeValues } from '@alexbjr369/hive-common';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import classNames from 'classnames';

@Component({
  selector: 'hv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class HvContainer implements OnInit {
  @Input() size?: ContainerSizeValues;

  constructor() {}

  @HostBinding('class') get classes(): string {
    return classNames({
      'hv-container': true,
      [`hv-container_${this.size}`]: this.size !== undefined,
    });
  }

  ngOnInit(): void {}
}
