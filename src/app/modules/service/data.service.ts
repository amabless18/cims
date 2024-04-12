import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'https://gfi-edu.com/cims/public/api';

  private apiUrlCoaches = 'https://gfi-edu.com/cims/public/api/courses';

  private apiUrlStudents = 'https://gfi-edu.com/cims/public/api/user';

  //private apiFilter = 'http://152.42.166.207/api/users/filter';

  constructor(private httpClient: HttpClient) {
    
  }

  getStudentsForLoggedInCoach(): Observable<any> {
    const url = `${this.baseUrl}/coach/students`;
    return this.httpClient.get(url);
  }

  //users
  // getData(courseId: any): Observable<any> {
  //   const url = `${this.apiUrlCoaches}/${courseId}/coaches`;
  //   return this.httpClient.get(url);
  // }

  getStudentRelationship(userId: number): Observable<any> {
    const url = `${this.baseUrl}/getall/${userId}`;
    return this.httpClient.get(url);
    //return this.httpClient.get<any>(`/getall/${userId}`);
  }

  getUserData(): Observable<any> {
    const url = `${this.baseUrl}/user`;
    return this.httpClient.get(url);
  }

  getUserDatabyId(id: any): Observable<any> {
    const url = `${this.baseUrl}/user/${id}`;
    return this.httpClient.get(url);
  }

  insertUserData(data: any): Observable<any> {
    const url = `${this.baseUrl}/addUser`;
    return this.httpClient.post(url, data);
  }

  updateUserData(id: any, data: any): Observable<any> {
    const url = `${this.baseUrl}/updateUser/${id}`;
    return this.httpClient.put(url, data);
  }

  deleteUserData(id: any): Observable<any> {
    const url = `${this.baseUrl}/deleteUser/${id}`;
    return this.httpClient.delete(url);
  }

  //ALL USERS
  getData(roles: string, course: string): Observable<any> {
    const url = `${this.apiUrlStudents}?roles=${roles}&course=${course}`;
    return this.httpClient.get(url);
  }

  // getUserData(): Observable<any> {
  //   return this.httpClient.get('http://152.42.166.207/api/user');
  // }

  // getUserDatabyId(id: number): Observable<any> {
  //   return this.httpClient.get('http://152.42.166.207/api/user/' + id);
  // }

  // insertUserData(data: any): Observable<any> {
  //   return this.httpClient.post('http://152.42.166.207/api/addUser', data);
  // }

  // updateUserData(id: any, data: any): Observable<any> {
  //   return this.httpClient.put(
  //     'http://152.42.166.207/api/updateUser/' + id,
  //     data
  //   );
  // }

  // deleteUserData(id: any): Observable<any> {
  //   return this.httpClient.delete(
  //     'http://152.42.166.207/api/deleteUser/' + id
  //   );
  // }

  getSocialData(): Observable<any> {
    const url = `${this.baseUrl}/social`;
    return this.httpClient.get(url);
  }

  getSocialDatabyId(id: any): Observable<any> {
    const url = `${this.baseUrl}/social/${id}`;
    return this.httpClient.get(url);
  }

  insertSocialData(data: any): Observable<any> {
    const url = `${this.baseUrl}/addSocial`;
    return this.httpClient.post(url, data);
  }

  updateSocialData(id: any, data: any): Observable<any> {
    const url = `${this.baseUrl}/updateSocial/${id}`;
    return this.httpClient.put(url, data);
  }

  deleteSocialData(id: any): Observable<any> {
    const url = `${this.baseUrl}/deleteSocial/${id}`;
    return this.httpClient.delete(url);
  }

  

  //ALL SOCIALS
  // getSocialData(): Observable<any> {
  //   return this.httpClient.get('http://152.42.166.207/api/social');
  // }

  // getSocialDatabyId(id: number): Observable<any> {
  //   return this.httpClient.get('http://152.42.166.207/api/social/' + id);
  // }

  // insertSocialData(data: any): Observable<any> {
  //   return this.httpClient.post('http://152.42.166.207/api/addSocial', data);
  // }

  // updateSocialData(id: any, data: any): Observable<any> {
  //   return this.httpClient.put(
  //     'http://152.42.166.207/api/updateSocial/' + id,
  //     data
  //   );
  // }

  // deleteSocialData(id: any): Observable<any> {
  //   return this.httpClient.delete(
  //     'http://152.42.166.207/api/deleteSocial/' + id
  //   );
  // }

  // //ALL SCHEDULE
  // getScheduleData(): Observable<any> {
  //   return this.httpClient.get('http://152.42.166.207/api/schedule');
  // }

  // getScheduleDatabyId(id: number): Observable<any> {
  //   return this.httpClient.get('http://152.42.166.207/api/schedule/' + id);
  // }

  // insertScheduleData(data: any): Observable<any> {
  //   return this.httpClient.post('http://152.42.166.207/api/addSchedule', data);
  // }

  // updateScheduleData(id: any, data: any): Observable<any> {
  //   return this.httpClient.put(
  //     'http://152.42.166.207/api/updateSchedule/' + id,
  //     data
  //   );
  // }

  // deleteScheduleData(id: any): Observable<any> {
  //   return this.httpClient.delete(
  //     'http://152.42.166.207/api/deleteSchedule/' + id
  //   );
  // }

  getUserDetails(id: number): Observable<any> {
    return this.httpClient.get('http://152.42.166.207/api/user/' + id);
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

  updateCoachbyEmployment(
    courseId: any,
    coachId: any,
    coachData: any
  ): Observable<any> {
    const url = `${this.apiUrlCoaches}/${courseId}/coaches/${coachId}`;
    return this.httpClient.put(url, coachData);
  }

  deleteCoachbyEmployment(courseId: any, coachId: any): Observable<any> {
    const url = `${this.apiUrlCoaches}/${courseId}/coaches/${coachId}`;
    return this.httpClient.delete(url);
  }

  //Appointment Enrollment and Employment
  getUsers(): Observable<any> {
    const url = `${this.baseUrl}/user`;
    return this.httpClient.get(url);
  }

  getUserAppointment(userId: any): Observable<any> {
    const url = `${this.baseUrl}/user/${userId}`;
    return this.httpClient.get(url);
  }

  updateUserAppointment(userId: any, userData: any): Observable<any> {
    const url = `${this.baseUrl}/updateUser/${userId}`;
    return this.httpClient.put(url, userData);
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
    const url = `${this.baseUrl}/user/${userId}/students`;
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
