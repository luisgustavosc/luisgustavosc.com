import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AUTH_SERVER, options } from 'src/app/services/server/server.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    constructor(private http: HttpClient) { }

    fetchProjects() {
        return this.http.get(`${ AUTH_SERVER }/projects`, options);
    }

    fetchProjectById(id: string) {
        return this.http.get(`${ AUTH_SERVER }/projects/${ id }`, options);
    }

    createProject(data) {
        return this.http.post(`${ AUTH_SERVER }/projects`, data, options);
    }
}
