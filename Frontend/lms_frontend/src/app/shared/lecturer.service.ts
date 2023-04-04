import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lecturer } from '../models/lecturer/lecturer';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  constructor(private http:HttpClient) { }


  public getLecturerList():Observable<Lecturer[]>{
    return this.http.get<Lecturer[]>("http://localhost:7070/findAllLecturers");
  }

  public getLecturerById(id:String):Observable<Object>{
    return this.http.get<Lecturer>("http://localhost:7070/findLecturerById/"+id);
  }

  public updateLecturer(id:String,lecturer:Lecturer):Observable<Object>{
    return this.http.put("http://localhost:7070/updateLecturer/"+id,lecturer);
  }

  public deleteLecturer(id:String):Observable<Object>{
    return this.http.delete("http://localhost:7070/deleteLecturer/"+id);
  }
  public createLecturer(lecturer:Lecturer):Observable<Object>{
    return this.http.post("http://localhost:7070/newLecturer",lecturer);
  }

}
