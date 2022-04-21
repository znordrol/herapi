/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { handleRequest } from '../src/handler';
import makeServiceWorkerEnv from 'service-worker-mock';
import compliments from '../src/data/compliments';

declare var global: any;

describe('handle', () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv());
    jest.resetModules();
  });

  test('handle GET', async () => {
    const result = await handleRequest(new Request('/', { method: 'GET' }));
    expect(result.status).toEqual(200);
    const text = await result.text();
    expect(compliments).toContainEqual(text);
  });
});
