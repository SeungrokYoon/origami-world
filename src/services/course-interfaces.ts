export interface Tag {
  id: number;
  tagType: number;
  name: string;
}

export interface OrgCourseListResponses {
  courseCount: number;
  courses: {
    id: number;
    courseType: number;
    tags: Tag[];
    title: string;
    shortDescription: string;
    classType: number;
    logoFileUrl: null | string;
    endDatetime: null | number;
    enrollType: number;
    isFree: boolean;
  }[];
}
