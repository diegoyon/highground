import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Workouts',
    path: '/workouts',
    icon: <GiIcons.GiWeightLiftingUp />,
    cName: 'nav-text',
  },
  {
    title: 'Horarios',
    path: '/horarios',
    icon: <MdIcons.MdSchedule />,
    cName: 'nav-text',
  },
  {
    title: 'Leaderboard',
    path: '/leaderboard',
    icon: <MdIcons.MdLeaderboard />,
    cName: 'nav-text',
  },
];
