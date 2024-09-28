export interface Student {
  _id?: string;
  studentName: string;
  age: number;
  gender: string;
  education: string;
  parentName: string;
  country: string;
  city: string;
  email: string;
  phoneNumber: string;
  studentPhoto?: Record<string, never>;
}
