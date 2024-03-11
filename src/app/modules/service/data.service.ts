import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from 'src/app/branch';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  private baseUrl = 'http://localhost:44301/api';

  private apiUrlCoaches = 'http://localhost:44301/api/courses';

  private apiUrlStudents = 'http://localhost:44301/api/user';

  private apiFilter = 'http://localhost:44301/api/users/filter';

  constructor(private httpClient: HttpClient) {}
  //ALL USERS
  getData(roles: string, course: string): Observable<any> {
    const url = `${this.apiUrlStudents}?roles=${roles}&course=${course}`;
    return this.httpClient.get(url);
  }

  getUserData(): Observable<any> {
    return this.httpClient.get('http://localhost:44301/api/user');
  }

  getUserDatabyId(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:44301/api/user/' + id);
  }

  insertUserData(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:44301/api/addUser', data);
  }

  updateUserData(id: any, data: any): Observable<any> {
    return this.httpClient.put(
      'http://localhost:44301/api/updateUser/' + id,
      data
    );
  }

  deleteUserData(id: any): Observable<any> {
    return this.httpClient.delete(
      'http://localhost:44301/api/deleteUser/' + id
    );
  }

  

  //ALL SOCIALS
  getSocialData(): Observable<any> {
    return this.httpClient.get('http://localhost:44301/api/social');
  }

  getSocialDatabyId(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:44301/api/social/' + id);
  }

  insertSocialData(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:44301/api/addSocial', data);
  }

  updateSocialData(id: any, data: any): Observable<any> {
    return this.httpClient.put(
      'http://localhost:44301/api/updateSocial/' + id,
      data
    );
  }

  deleteSocialData(id: any): Observable<any> {
    return this.httpClient.delete(
      'http://localhost:44301/api/deleteSocial/' + id
    );
  }

  //ALL SCHEDULE
  getScheduleData(): Observable<any> {
    return this.httpClient.get('http://localhost:44301/api/schedule');
  }

  getScheduleDatabyId(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:44301/api/schedule/' + id);
  }

  insertScheduleData(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:44301/api/addSchedule', data);
  }

  updateScheduleData(id: any, data: any): Observable<any> {
    return this.httpClient.put(
      'http://localhost:44301/api/updateSchedule/' + id,
      data
    );
  }

  deleteScheduleData(id: any): Observable<any> {
    return this.httpClient.delete(
      'http://localhost:44301/api/deleteSchedule/' + id
    );
  }

  getUserDetails(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:44301/api/user/' + id);
  }

  


  //Coaches
  getCoachesbyEmployment(courseId: any): Observable<any> {
    const url = `${this.apiUrlCoaches}/${courseId}/coaches`;
    return this.httpClient.get(url);
  }

  getCoachbyEmployment(courseId: any, coachId: any): Observable<any> {
    const url = `${this.apiUrlCoaches}/${courseId}/coaches/${coachId}`;
    return this.httpClient.get(url);
  }

  createCoachbyEmployment(courseId: any, coachData: any): Observable<any> {
    const url = `${this.apiUrlCoaches}/${courseId}/coaches`;
    return this.httpClient.post(url, coachData);
  }

  updateCoachbyEmployment(courseId: any, coachId: any, coachData: any): Observable<any> {
    const url = `${this.apiUrlCoaches}/${courseId}/coaches/${coachId}`;
    return this.httpClient.put(url, coachData);
  }

  deleteCoachbyEmployment(courseId: any, coachId: any): Observable<any> {
    const url = `${this.apiUrlCoaches}/${courseId}/coaches/${coachId}`;
    return this.httpClient.delete(url);
  }


  //Branch
  getBranches(): Observable<any> {
    const url = `${this.baseUrl}/branches/branch`;
    return this.httpClient.get(url);
  }

  getBranch(branchId: any): Observable<any> {
    const url = `${this.baseUrl}/branches/${branchId}`;
    return this.httpClient.get(url);
  }

  createBranch(branchData: any): Observable<any> {
    const url = `${this.baseUrl}/branches`;
    return this.httpClient.post(url, branchData);
  }

  updateBranch(branchId: any, branchData: any): Observable<any> {
    const url = `${this.baseUrl}/branches/${branchId}`;
    return this.httpClient.put(url, branchData);
  }

  deleteBranch(branchId: any): Observable<any> {
    const url = `${this.baseUrl}/branches/${branchId}`;
    return this.httpClient.delete(url);
  }

  //Course
  getCourses(): Observable<any> {
    const url = `${this.baseUrl}/courses/course`;
    return this.httpClient.get(url);
  }

  getCourse(courseId: any): Observable<any> {
    const url = `${this.baseUrl}/courses/${courseId}`;
    return this.httpClient.get(url);
  }

  createCourse(courseData: any): Observable<any> {
    const url = `${this.baseUrl}/courses`;
    return this.httpClient.post(url, courseData);
  }

  updateCourse(courseId: any, courseData: any): Observable<any> {
    const url = `${this.baseUrl}/courses/${courseId}`;
    return this.httpClient.put(url, courseData);
  }

  deleteCourse(courseId: any): Observable<any> {
    const url = `${this.baseUrl}/courses/${courseId}`;
    return this.httpClient.delete(url);
  }

  //Students
  getStudents(): Observable<any> {
    const url = `${this.baseUrl}/students/student`;
    return this.httpClient.get(url);
  }

  getStudent(studentId: any): Observable<any> {
    const url = `${this.baseUrl}/students/${studentId}`;
    return this.httpClient.get(url);
  }

  createStudent(studentData: any): Observable<any> {
    const url = `${this.baseUrl}/students`;
    return this.httpClient.post(url, studentData);
  }

  updateStudent(studentId: any, studentData: any): Observable<any> {
    const url = `${this.baseUrl}/students/${studentId}`;
    return this.httpClient.put(url, studentData);
  }

  deleteStudent(courseId: any): Observable<any> {
    const url = `${this.baseUrl}/students/${courseId}`;
    return this.httpClient.delete(url);
  }

  //Coaches
  getCoaches(): Observable<any> {
    const url = `${this.baseUrl}/coaches/coach`;
    return this.httpClient.get(url);
  }

  getCoach(coachId: any): Observable<any> {
    const url = `${this.baseUrl}/coaches/${coachId}`;
    return this.httpClient.get(url);
  }

  createCoach(coachData: any): Observable<any> {
    const url = `${this.baseUrl}/coaches`;
    return this.httpClient.post(url, coachData);
  }

  updateCoach(coachId: any, coachData: any): Observable<any> {
    const url = `${this.baseUrl}/coaches/${coachId}`;
    return this.httpClient.put(url, coachData);
  }

  deleteCoach(coachId: any): Observable<any> {
    const url = `${this.baseUrl}/coaches/${coachId}`;
    return this.httpClient.delete(url);
  }


  //Students to User Coach (Enrollment)
  getStudentsbyEnrollment(userId: any): Observable<any> {
    const url = `${this.apiUrlStudents}/${userId}/students`;
    return this.httpClient.get(url);
  }

  getStudentbyEnrollment(userId: any, studentId: any): Observable<any> {
    const url = `${this.apiUrlStudents}/${userId}/students/${studentId}`;
    return this.httpClient.get(url);
  }

  createStudentbyEnrollment(userId: any, studentData: any): Observable<any> {
    const url = `${this.apiUrlStudents}/${userId}/students`;
    return this.httpClient.post(url, studentData);
  }

  updateStudentbyEnrollment(
    userId: any,
    studentId: any,
    studentData: any
  ): Observable<any> {
    const url = `${this.apiUrlStudents}/${userId}/students/${studentId}`;
    return this.httpClient.put(url, studentData);
  }

  deleteStudentbyEnrollment(userId: any, studentId: any): Observable<any> {
    const url = `${this.apiUrlStudents}/${userId}/students/${studentId}`;
    return this.httpClient.delete(url);
  }
}
