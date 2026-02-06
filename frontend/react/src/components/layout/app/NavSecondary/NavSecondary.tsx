import { type Icon } from '@tabler/icons-react';
import { Link, type LinkProps } from '@tanstack/react-router';
import type { ComponentPropsWithoutRef } from 'react';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export type NavSecondaryProps = {
  items: {
    title: string;
    url: LinkProps['to'];
    icon: Icon;
  }[];
} & ComponentPropsWithoutRef<typeof SidebarGroup>;

export const NavSecondary = ({ items, ...props }: NavSecondaryProps) => {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} asChild>
                <Link to={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
