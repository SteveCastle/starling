import { NextPage } from "next";

const User: NextPage<{ slug: string | string[] }> = ({ slug }) => (
  <h1>Hello user slug: {slug}</h1>
);

User.getInitialProps = async ({ query }) => {
  const { slug } = query;
  return { slug };
};

export default User;
