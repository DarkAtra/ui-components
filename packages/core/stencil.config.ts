import {reactOutputTarget} from '@duetds/stencil-react-output-target';
import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';

export const config: Config = {
    namespace: 'darkatra-ui-components',
    outputTargets: [
        reactOutputTarget({
            componentCorePackage: '@darkatra/ui-components',
            proxiesFile: '../react/src/components.ts',
            includeDefineCustomElements: true
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
        }
    ],
    plugins: [sass()]
};
