# ISR VS SSR
## Get Start
### Set Up
1. install node.js
   https://nodejs.org/en/
2. cd to the folder you want to create your project and run the following command
   ```bash
   npx create-next-app@latest [your project name]
   ```
3. cd to your project and run the following command
   ```bash
   npm run dev
   ```
### Production
1. cd to your project and run the following command
   ```bash
   npm run build
   ```
2. run the following command
   ```bash
   npm run start
   ```
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
    // - At most once every revalidate seconds
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

## Resource
1. If you are new to next.js, I recommond this 
   https://www.youtube.com/watch?v=9P8mASSREYM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH
2. https://www.youtube.com/c/SonnySangha
3. https://www.youtube.com/channel/UC5XDHSUoBC11Kj-iIpx7QkA