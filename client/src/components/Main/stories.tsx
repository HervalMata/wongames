import Main from "./index";
import {text, withKnobs} from "@storybook/addon-knobs";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic : Story = () => (
  <Main
    title={text('Title', 'Won Games')}
    description={text(
    'description',
      'TypeScript, ReactJS, NextJS e StyledComponents'
    )}
  />
)
