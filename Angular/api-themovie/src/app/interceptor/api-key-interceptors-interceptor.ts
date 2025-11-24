import { HttpInterceptorFn } from '@angular/common/http';
const API_KEY ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGZkNDRlYzA5YWFhZWQ3NjZiMWU3OWZmYTJkZGI0ZCIsIm5iZiI6MTc2MzM2NzgyNi42NDMwMDAxLCJzdWIiOiI2OTFhZGI5MjIxODEwZWU3NmExNzVkOGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GJOyb-QyZmabgnu0ENPhNah92cnPCClK6ozHSZp-WOU'
export const apiKeyInterceptorsInterceptor: HttpInterceptorFn = (req, next) => {

  const reqWithHeader = req.clone({
  headers: req.headers.set('Authorization', `Bearer${API_KEY}`),
});
  return next(reqWithHeader);
};
