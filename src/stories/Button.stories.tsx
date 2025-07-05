//IMPORT
import React from "react";
import {Button} from "../components/Button";
import {Meta, StoryObj} from "@storybook/react";
//CODE
const meta: Meta<typeof Button>={
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    }
export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story={
    args:{
        label: "button",
        variant: "primary",
    }
}
export const Secondary: Story={
    args:{
        label: "button",
        variant: "secondary",
    }
}
export const Disabled: Story={
    args:{
        label: "button",
        variant: "disabled",
    }
}