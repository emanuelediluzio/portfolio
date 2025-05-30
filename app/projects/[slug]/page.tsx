import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

async function getGithubReadme(repo: string) {
  try {
    const response = await fetch(`https://raw.githubusercontent.com/emanuelediluzio/${repo}/main/README.md`);
    if (!response.ok) throw new Error('Failed to fetch README');
    return await response.text();
  } catch (error) {
    console.error('Error fetching README:', error);
    return null;
  }
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  let readmeContent = null;
  if (project.repository) {
    readmeContent = await getGithubReadme(project.repository);
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        {readmeContent ? (
          <Mdx code={readmeContent} />
        ) : (
          <Mdx code={project.body.code} />
        )}
      </article>
    </div>
  );
}
