import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import React from 'react';

const meta={
    title: 'Exmple/Button',
    component: Button,
    parameters:{
        layout:'centered',
    },

    tags:['autodocs']
}
export default meta;

type Story= StoryObj<typeof meta>
 export const Default: Story={
    render:()=>(
      <Button/>
    )
 }