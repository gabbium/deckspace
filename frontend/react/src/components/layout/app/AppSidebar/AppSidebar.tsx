import {
  IconBooks,
  IconCalendar,
  IconCards,
  IconDatabase,
  IconFileWord,
  IconHelp,
  IconHome,
  IconInnerShadowTop,
  IconReport,
  IconSearch,
  IconSettings,
} from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { NavMain } from '../NavMain/NavMain';
import { NavSecondary } from '../NavSecondary';
import { NavSubjects } from '../NavSubjects';
import { NavUser } from '../NavUser';

const data = {
  user: {
    name: 'gabbium',
    email: 'm@example.com',
  },
  navMain: [
    {
      title: 'Home',
      icon: IconHome,
      link: {
        to: '/',
      },
    },
    {
      title: 'Subjects',
      icon: IconBooks,
      link: {
        to: '/',
      },
    },
    {
      title: 'Decks',
      icon: IconCards,
      link: {
        to: '/',
      },
    },
    {
      title: 'Calendar',
      icon: IconCalendar,
      link: {
        to: '/',
      },
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '/',
      icon: IconSettings,
    },
    {
      title: 'Get Help',
      url: '/',
      icon: IconHelp,
    },
    {
      title: 'Search',
      url: '/',
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: 'Data Library',
      url: '/',
      icon: IconDatabase,
    },
    {
      name: 'Reports',
      url: '/',
      icon: IconReport,
    },
    {
      name: 'Word Assistant',
      url: '/',
      icon: IconFileWord,
    },
  ],
  subjects: [
    {
      name: 'Mathematics',
      color: 'text-blue-500',
      link: {
        to: '/',
      },
    },
    {
      name: 'History',
      color: 'text-amber-500',
      link: {
        to: '/',
      },
    },
    {
      name: 'Physics',
      color: 'text-emerald-500',
      link: {
        to: '/',
      },
    },
    {
      name: 'Literature',
      color: 'text-purple-500',
      link: {
        to: '/',
      },
    },
  ],
};

export const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5!">
              <Link to="/">
                <IconInnerShadowTop className="size-5!" />
                <span className="text-base font-semibold">Deckspace</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSubjects items={data.subjects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
};
