import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function specificQuery() {
    error({
        title: false,
        text: 'Please enter a more specific query',
        shadow: true,
        stiker: false,
        delay: 2000,
    });
}
