import { Stack, StackProps, Construct, Duration } from '@aws-cdk/core';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import {EventSourceMapping, Runtime} from '@aws-cdk/aws-lambda';

export class LocalDevStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const localTestFunction = new NodejsFunction(this, 'local-test-handler', {
            runtime: Runtime.NODEJS_14_X,
            memorySize: 1024,
            timeout: Duration.minutes(2),
        });
    }
}