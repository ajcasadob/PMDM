import { HttpInterceptorFn } from '@angular/common/http';

const Api_Tokken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGZkNDRlYzA5YWFhZWQ3NjZiMWU3OWZmYTJkZGI0ZCIsIm5iZiI6MTc2MzM2NzgyNi42NDMwMDAxLCJzdWIiOiI2OTFhZGI5MjIxODEwZWU3NmExNzVkOGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GJOyb-QyZmabgnu0ENPhNah92cnPCClK6ozHSZp-WOU'

export const movieInterceptor: HttpInterceptorFn = (req, next) => {

  const reqWithHeader = req.clone({
  headers: req.headers.set('Authorization', `Bearer ${Api_Tokken}`),
});

  return next(reqWithHeader);
};
