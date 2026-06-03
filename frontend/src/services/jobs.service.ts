import api from "./api";

export const jobsService = {
  getJobs: async () => {
    return api.get("/jobs");
  },
};