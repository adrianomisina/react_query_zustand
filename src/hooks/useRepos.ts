import api from "../api/github";
import { useQuery } from "@tanstack/react-query";
import { Repository } from "./type";
import { QueryFunctionContext } from "react-query";

const fetchRepos = async (ctx: QueryFunctionContext) => {
  const [_, githubUser] = ctx.queryKey;
  const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`);
  return data;
};

export const useFetchRepositories = (githubUser: string) => {
  return useQuery(["repos", githubUser], fetchRepos);
};
