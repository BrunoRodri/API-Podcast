import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';
import * as http from 'http';


export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

  const [baseUrl, queryString] = request.url?.split('?') ?? ["", ""]


  if(request.method === HttpMethods.GET && baseUrl === Routes.LIST_EPISODES) {
    await getListEpisodes(request, response);
  }

  if(request.method === HttpMethods.GET && baseUrl === Routes.FILTER_EPISODES) {
    await getFilterEpisodes(request, response);
  }

}
