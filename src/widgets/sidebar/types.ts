import { type SVGProps, type VFC } from 'react';

export type SidebarItemType = {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
};
