/* eslint-disable camelcase */

export type Repository = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  language: null | string;
  license: null | {
    name: string;
  };
  forks: number;
};

export type Data = {
  items: Repository[];
  total_count: number;
};
