import type { Meta, StoryObj } from '@storybook/react';
import {Card} from "./Card";
import React from 'react';


const meta={
    title: 'Exmple/Card',
    component: Card,
    parameters:{
        layout:'centered',
    },

    tags:['autodocs']
}
export default meta;
type Story= StoryObj<typeof meta>
 export const Default: Story={
    render:()=>(
      <Card/>
    )
 }