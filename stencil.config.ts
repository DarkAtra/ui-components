import {Config} from '@stencil/core';
import {reactOutputTarget} from '@stencil/react-output-target';
import {sass} from '@stencil/sass';

export const config: Config = {
    namespace: 'ui-components',
    outputTargets: [
        // react outputs are generated for the demo app
        reactOutputTarget({
            componentCorePackage: '../../../loader', // this path is relative to the directory of the proxiesFile
            proxiesFile: './demo/src/react/components.ts'
        }),
        {
            type: 'dist',
            esmLoaderPath: '../loader'
        },
        {
            type: 'dist-custom-elements-bundle'
        },
        {
            type: 'docs-readme'
        },
        {
            type: 'www',
            serviceWorker: null // disable service workers
        }
    ],
    plugins: [sass()]
};
