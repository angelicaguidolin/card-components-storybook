//IMPORT
import React from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { Primary,Disabled } from "./Button.stories";
import type { Meta, StoryObj } from "@storybook/react";


//CODE
const meta: Meta<typeof Card>={
  title: "Components/Card",
  component: Card,
 subcomponents: { Button },
  tags: ["autodocs"],
  parameters:{
    layout: "centered",
  }
  }
  export default meta;
type Story = StoryObj<typeof Card>;
export const Default: Story={
  args:{
    title: "SONO LA CARD",
    description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  render:(args)=>(
    <Card {...args} >
      
      <Button label={""} {...Primary.args} />
      <Button label={""} {...Disabled.args} />
    </Card>
  )
}



