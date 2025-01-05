export type PageFilter = {
  pageIndex: number;
  pageSize: number;
};

export type GetAllProjectsPayload = {
  page: PageFilter;
};
