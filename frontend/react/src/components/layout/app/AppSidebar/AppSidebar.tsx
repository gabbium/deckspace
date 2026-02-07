import {
  IconBooks,
  IconCalendar,
  IconCards,
  IconHelp,
  IconHome,
  IconInnerShadowTop,
  IconSearch,
  IconSettings,
  type Icon,
} from '@tabler/icons-react';
import { Link, type LinkProps } from '@tanstack/react-router';

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

type Data = {
  user: {
    name: string;
    email: string;
  };
  navMain: {
    title: string;
    icon: Icon;
    link: LinkProps;
  }[];
  navSecondary: {
    title: string;
    icon: Icon;
    url: string;
  }[];
  subjects: {
    name: string;
    color: string;
    link: LinkProps;
  }[];
};

const data: Data = {
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
        to: '/decks',
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
  subjects: [
    {
      name: 'Mathematics',
      color: 'text-blue-500',
      link: {
        to: '/subjects/$subjectId',
        params: {
          subjectId: '1',
        },
      },
    },
    {
      name: 'History',
      color: 'text-amber-500',
      link: {
        to: '/subjects/$subjectId',
        params: {
          subjectId: '1',
        },
      },
    },
    {
      name: 'Physics',
      color: 'text-emerald-500',
      link: {
        to: '/subjects/$subjectId',
        params: {
          subjectId: '1',
        },
      },
    },
    {
      name: 'Literature',
      color: 'text-purple-500',
      link: {
        to: '/subjects/$subjectId',
        params: {
          subjectId: '1',
        },
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
