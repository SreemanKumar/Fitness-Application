import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilitiesService } from '../../Services/utilities.service';
import { inject } from '@angular/core';
//import { UtlitiesService } from './utlities.service';

/*export function headerInterceptor(utilitiesService: UtilitiesService) {
    return (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
        const token = utilitiesService.getToken();

        const clonedRequest = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': 'Bearer ' + token })
            }
        });

        return next(clonedRequest);
    };
}*/

export function headerInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
    const utilitiesService = inject(UtilitiesService);
    const token = utilitiesService.getToken();

    const clonedRequest = req.clone({
        setHeaders: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': 'Bearer ' + token })
        }
    });

    return next(clonedRequest);
}
