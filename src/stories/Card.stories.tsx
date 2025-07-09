//IMPORT
import React from "react";
import { Card } from "./Card";
import type { Meta, StoryObj } from "@storybook/react";


//CODE
const meta: Meta<typeof Card>={
  title: "Molecule/Card",
  component: Card,
 //subcomponents: { Button },
  tags: ["autodocs"],
  parameters:{
    layout: "centered",
  },
  argTypes:{
    variant:{
      control: {
        type: "select",
        options: ["primary", "secondary", "third"],
      },
      image:{
        control: {
          type: "select",
          options: ["img_1", "img_2", "img_3"],
        },
      }
    }
  }
  }
export default meta;
type Story = StoryObj<typeof Card>;
export const Default: Story={
  args:{
    title: "Psychedelic Illustrations",
    description:"Discover a collection of vibrant and surreal illustrations that transport you to a world of imagination and creativity. Each piece is a journey through color and form, inviting you to explore the boundaries of art and perception.",
    variant: "primary",
  }
}
export const Primary: Story={
  args:{
    title: "Psychedelic Illustrations",
    description:"Discover a collection of vibrant and surreal illustrations that transport you to a world of imagination and creativity. Each piece is a journey through color and form, inviting you to explore the boundaries of art and perception.",
    variant: "primary",
  }
}
export const Secondary: Story={
  args:{
    title: "Psychedelic Illustrations",
    description:"Discover a collection of vibrant and surreal illustrations that transport you to a world of imagination and creativity. Each piece is a journey through color and form, inviting you to explore the boundaries of art and perception.",
    variant: "secondary",
    
  }
}
export const Third: Story={
  args:{
    title: "Psychedelic Illustrations",
    description:"Discover a collection of vibrant and surreal illustrations that transport you to a world of imagination and creativity. Each piece is a journey through color and form, inviting you to explore the boundaries of art and perception.",
    variant: "third",
    
  }
}



