import { AuthModel } from './auth.model';
import { AddressModel } from './address.model';
import { SocialNetworksModel } from './social-networks.model';

export class UserModel extends AuthModel {
  id: number;
  username: string;
  password: string;
  fullname: string;
  email: string;
  branch: any;
  level: any;
  pic: string;
  admin_pic: any;
  coach_name: any;
  roles: any;
  userType: any;
  session: any;
  session_time: any;
  status: any;
  course: any;
  age: any;
  students: StudentModel[];
  occupation: string;
  companyName: string;
  phone: string;
  address?: AddressModel;
  socialNetworks?: SocialNetworksModel;
  // personal information
  firstname: string;
  middlename: string;
  lastname: string;
  website: string;
  // account information
  language: string;
  timeZone: string;
  communication: {
    email: boolean;
    sms: boolean;
    phone: boolean;
  };
  // email settings
  emailSettings?: {
    emailNotification: boolean;
    sendCopyToPersonalEmail: boolean;
    activityRelatesEmail: {
      youHaveNewNotifications: boolean;
      youAreSentADirectMessage: boolean;
      someoneAddsYouAsAsAConnection: boolean;
      uponNewOrder: boolean;
      newMembershipApproval: boolean;
      memberRegistration: boolean;
    };
    updatesFromKeenthemes: {
      newsAboutKeenthemesProductsAndFeatureUpdates: boolean;
      tipsOnGettingMoreOutOfKeen: boolean;
      thingsYouMissedSindeYouLastLoggedIntoKeen: boolean;
      newsAboutMetronicOnPartnerProductsAndOtherServices: boolean;
      tipsOnMetronicBusinessProducts: boolean;
    };
  };

  setUser(_user: unknown) {
    const user = _user as UserModel;
    this.id = user.id;
    this.username = user.username || '';
    this.password = user.password || '';
    this.fullname = user.fullname || '';
    this.firstname = user.firstname || '';
    this.middlename = user.middlename || '';
    this.lastname = user.lastname || '';
    this.session = user.session || '';
    this.course = user.course || '';
    this.branch = user.branch || '';
    this.age = user.age || '';
    this.session_time = user.session_time || '';
    this.status = user.status || '';
    this.email = user.email || '';
    this.pic = user.pic || './assets/media/users/default.jpg';
    this.coach_name = user.coach_name || '';
    this.admin_pic = user.admin_pic || './assets/media/logos/main_logo.jpg';
    this.roles = user.roles || [];
    this.occupation = user.occupation || '';
    this.companyName = user.companyName || '';
    this.phone = user.phone || '';
    this.address = user.address;
    this.socialNetworks = user.socialNetworks;
    this.students = (user.students || []).map(studentData => new StudentModel(studentData));
  }
}
  class StudentModel {
    id: number;
    user_id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
  
    constructor(studentData: any) {
      this.id = studentData.id;
      this.user_id = studentData.user_id;
      this.name = studentData.name || '';
      this.description = studentData.description || '';
      this.created_at = studentData.created_at || '';
      this.updated_at = studentData.updated_at || '';
    }
}
