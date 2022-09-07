import { appRoutes } from '../routes/app-routes';
import { MenuItem } from '@sharedMd/menu-item.model';

export const menuItems: MenuItem[] = [
  { routerLink: appRoutes.BILLS, icon: 'event', label: 'Contas' },
  {
    routerLink: appRoutes.PLANS,
    icon: 'description',
    label: 'Planejamentos',
  },
  { routerLink: appRoutes.TASKS, icon: 'assignment', label: 'Tarefas' },
  {
    routerLink: appRoutes.REPORTS,
    icon: 'dashboard',
    label: 'Relatórios',
  },
  {
    routerLink: appRoutes.PROFILE,
    icon: 'person',
    label: 'Meu Perfil',
  },
];
