import type { Meta, StoryObj } from '@storybook/react';
import {Card} from "./Card";
import React from 'react';
import { Button } from './Button';


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
      <>
      <Card/>
      <Button/>
      </>
    )
 }
