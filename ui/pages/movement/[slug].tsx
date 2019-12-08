import { NextPage } from "next";
import Movement from "../../components/Movement";
import { withApollo } from "../../lib/apollo";

const MovementPage: NextPage<{ slug: string | string[] }> = ({ slug }) => (
  <Movement slug={slug} />
);

MovementPage.getInitialProps = async ({ query }) => {
  const { slug } = query;
  return { slug };
};

export default withApollo(MovementPage);
