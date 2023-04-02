enum statesStatus {
  PUBLISHED = "published",
  DRAFT = "draft",
  DELTETED = "deleted"
}

/*
{
  topicId: number,
  status: statesStatus | undefined
}
*/

async function getFaqs(req: {
  topicId: number;
  status?: statesStatus;
}): Promise<{
  question: string,
  answer: string,
  tags: string[],
  likes: number,
  status: string
}> {
  const res = await fetch('/flags', {
    method: 'POST',
    body: JSON.stringify(req)
  });
  const data = await res.json();
  return data;
}