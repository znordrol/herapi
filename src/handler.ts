import compliments from './data/compliments';
import { getRandom } from './utils/getRandomChoice';

export const handleRequest = async (request: Request): Promise<Response> => {
  switch (request.method) {
    case 'GET': {
      const compliment = getRandom<string>(compliments);
      const res = {
        message: compliment,
      };
      return new Response(JSON.stringify(res), {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      });
    }
    default:
      return new Response('Method not allowed', { status: 405 });
  }
};
