import { Handler } from 'aws-lambda';

export const handler: Handler = (event) => {
    console.log(event);
};