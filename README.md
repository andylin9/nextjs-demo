# ISR VS SSR
## ISR
### syntax
```tsx
export const getStaticProps: GetStaticProps<Post> = async (context) => {
  const res = await fetch("http://localhost:3333/post");
  const post = await res.json();

  return {
    props: {
      post,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 20, // In seconds
  };
}
```
### Features
1. At the prod mode send the request per revalidate time
2. Pre-fetch the data from API and store to /.next/server/pages

## SSR
### syntax
```tsx
export const getServerSideProps: GetServerSideProps<Post> = async (context) => {
  const res = await fetch("http://localhost:3333/post");
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
```
### Features
1. At the prod mode send the request everytime user go into the pages

## How to choose which strategy to use
1. If you don't need to show instant information to the user, use ISR
2. If you need to show instant information to the user, use SSR