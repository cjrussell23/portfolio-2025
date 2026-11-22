import { z } from 'zod';

export const repoSchema = z.object({
  id: z.number(),
  name: z.string(),
  html_url: z.string().url(),
  description: z.string().nullable(),
  language: z.string().nullable(),
  stargazers_count: z.number(),
  forks_count: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  topics: z.array(z.string()),
  homepage: z.string().nullable(),
});

export const reposSchema = z.array(repoSchema.passthrough());

export type Repo = z.infer<typeof repoSchema>;
export type Repos = z.infer<typeof reposSchema>;

export const readmeSchema = z.object({
  name: z.string(),
  path: z.string(),
  sha: z.string(),
  size: z.number(),
  url: z.string().url(),
  html_url: z.string().url().nullable(),
  git_url: z.string().url(),
  download_url: z.string().url().nullable(),
  type: z.literal('file'),
  content: z.string().nullable(), // Base64-encoded content (may be null if not included in response)
  encoding: z.string().nullable(), // Typically "base64" if content is included
});

export type Readme = z.infer<typeof readmeSchema>;
