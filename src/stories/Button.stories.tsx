//IMPORT
import React from "react";
import {Button} from "./Button";
import {Meta, StoryObj} from "@storybook/react";
//CODE
const meta: Meta<typeof Button>={
    title: "Atoms/Button",
    component: Button,
    tags: ["autodocs"],
    parameters:{
      layout: "centered",
    }
    }
export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story={
    args:{
        label: "button",
        variant: "primary",
        disabled: false,
    }
}
export const Secondary: Story={
    args:{
        label: "button",
        variant: "secondary",
        disabled: false,
    }
}
export const Disabled: Story={
    args:{
        label: "button",
        variant: "disabled",
        disabled: true,
    }
}