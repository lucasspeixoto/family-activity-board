import { appRoutes } from '@config/routes/app-routes';
import { MenuItem } from '@sharedMd/menu-item.model';

export const menuItems: MenuItem[] = [
  {
    routerLink: appRoutes.TASKS,
    icon: 'insert_chart_outlined',
    label: 'Tarefas',
  },
  { routerLink: appRoutes.BILLS, icon: 'event', label: 'Contas' },
  {
    routerLink: appRoutes.PLANS,
    icon: 'description',
    label: 'Planejamentos',
  },
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
