import { NextPage } from "next";

const Movement: NextPage<{ slug: string | string[] }> = ({ slug }) => (
  <h1>Hello Company slug: {slug}</h1>
);

Movement.getInitialProps = async ({ query }) => {
  const { slug } = query;
  return { slug };
};

export default Movement;
