import ScreenOne from './screens/01-One';
import ScreenTwo from './screens/02-Two';

export const Screens = [
  {
    title: "Let's get started",
    description: 'Pick a framework or library of your choice',
    component: ScreenOne,
  },
  {
    title: 'Select a template',
    description: 'Pick a template of your choice',
    component: ScreenTwo,
  },
  {
    title: 'Customize add-ons',
    description: 'Pick add-ons of your choice',
    component: ScreenOne,
  },
];
