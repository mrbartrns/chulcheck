import NavigationBar from './NavigationBar';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/NavigationBar',
} as ComponentMeta<typeof NavigationBar>;

export const Default: ComponentStory<typeof NavigationBar> = () => (
  <NavigationBar
    left={<div>left</div>}
    middle={<div>middle</div>}
    right={<div>right</div>}
  />
);

export const MiddleRight: ComponentStory<typeof NavigationBar> = () => (
  <NavigationBar middle={<div>middle</div>} right={<div>right</div>} />
);
