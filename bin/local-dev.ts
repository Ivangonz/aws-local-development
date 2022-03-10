#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { LocalDevStack } from '../lib/local-dev-stack';

const app = new App();

new LocalDevStack(app, `local-dev`, {
    tags: {
        'localdev:name': `local-dev`,
        'localdev:environment': 'local',
        'localdev-owner': 'local-user',
        'localdev-app': 'local-service',
        env: 'local',
    },
});
