import { ContainerSizeAttribute } from '../enums/containers';

export type ContainerSizeValues =
  | ContainerSizeAttribute.FIXED
  | ContainerSizeAttribute.SM
  | ContainerSizeAttribute.MD
  | ContainerSizeAttribute.LG
  | ContainerSizeAttribute.XL
  | ContainerSizeAttribute.XXL
  | string
  | undefined;
