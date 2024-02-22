import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    icon: ' ri-apps-line',
    link: '',
  },
  {
    id: 2,
    label: 'Data Master',
    icon: 'ri-user-3-line',
    link: '/master',
  },
 
  {
    id: 3,
    label: 'Supplies',
    icon: 'ri-home-gear-line',
    link: '/listpage',
  },
  {
    id: 6,
    label: 'Standart Operating Procedure',
    icon: 'ri-file-list-3-line',
    subItems: [
      {
        id: 7,
        label: 'Dashboard',
        parentId: 6,
        link: '/sop',
      },
    ]
  },
  {
    id: 8,
    label: 'Maintenance Part',
    icon: 'ri-settings-4-line',
    link: '/maintenance',
    subItems :[
      {
        id: 10,
        label: 'Maintenance',
        link: '/maintenance',
        
      },
      {
        id: 9,
        label: 'OPL',
        link: '/OPL',
      },  
    ]
  }
];
