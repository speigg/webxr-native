import { XRPluginPlugin } from './definitions';
import { registerPlugin } from '@capacitor/core';

const XRPlugin = registerPlugin<XRPluginPlugin>('XRPlugin', {
    web: () => import('./web').then(m => new m.XRPluginWeb())
})

export * from './definitions';
export {XRPlugin}