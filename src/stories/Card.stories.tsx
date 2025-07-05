//IMPORT
import React from "react";
import { Card } from "./Card";
import type { Meta, StoryObj } from "@storybook/react";

//CODE
const meta: Meta<typeof Card>={
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  }
  export default meta;
type Story = StoryObj<typeof Card>;
export const Default: Story={
  args:{
    title: "SONO LA CARD",
    description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/150",
  }
}



