import { NextPage } from "next";
import { withApollo } from "../../lib/apollo";
import Users from "../../components/Users";

const Home: NextPage = () => {
  return <Users />;
};

export default withApollo(Home);
