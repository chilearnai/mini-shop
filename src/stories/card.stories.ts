import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { CardComponent } from '../app/components/card/card.component';
import { Product } from '../app/models/product';



const meta: Meta<CardComponent> = {
  title: 'Example/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: 'object',
    },
    cartItems: {
      control: 'object',
    },
    addToCartEmit: { action: 'addToCartEmit' },
    increaseQtyEmit: { action: 'increaseQtyEmit' },
    decreaseQtyEmit: { action: 'decreaseQtyEmit' },
  },
  args: {
    product: {
      id: 1,
      name: 'Test Product',
      price: 100,
      description: 'Simple mock product for Storybook',
        image: 'backpack.png'
    } as Product,
    cartItems: {
      1: 2, // допустим, у товара с id=1 в корзине уже 2 штуки
    },
    addToCartEmit: fn(),
    increaseQtyEmit: fn(),
    decreaseQtyEmit: fn(),
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {},
};

export const WithDifferentProduct: Story = {
  args: {
    product: {
      id: 2,
      name: 'Another Product',
      price: 250,
      description: 'Another mock product with higher price',
      image: 'backpack.png'
    },
    cartItems: {
      2: 5, // у второго продукта в корзине 5 штук
    },
  },
};
