import { NextPage } from "next";

const Event: NextPage<{ slug: string | string[] }> = ({ slug }) => (
  <h1>Hello Event slug: {slug}</h1>
);

Event.getInitialProps = async ({ query }) => {
  const { slug } = query;
  return { slug };
};

export default Event;
