import Page from './Page';


export default {
    title: 'Pages/Page',
    component: Page,
    tags: ['autodocs'],
};

export const Primary = {
    args: {},
};

export const Secondary = {
    args: {
        primary: false,
    },
};