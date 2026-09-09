export interface Instructor {
  id: string;
  name: string;
  bio?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor?: Instructor;
}
