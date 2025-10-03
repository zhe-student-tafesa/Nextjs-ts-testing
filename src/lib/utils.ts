// unit test
export const addFunc = (a: number, b: number): number => {
  return a + b;
};

interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export const getPostsFromDB = async (): Promise<PostInterface[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};
