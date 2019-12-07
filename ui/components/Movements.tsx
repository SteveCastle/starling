import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "apollo-client";
import gql from "graphql-tag";

interface Movement {
  id: number;
  title: string;
}

interface MovementData {
  queryMovement: Movement[];
}

export const ALL_MOVEMENTS_QUERY = gql`
  query {
    queryMovement {
      id
      title
    }
  }
`;

const Movements: React.FC = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery<
    MovementData
  >(ALL_MOVEMENTS_QUERY, {
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true
  });
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div>
      {data &&
        data.queryMovement.map(item => <p key={item.id}>{item.title}</p>)}
    </div>
  );
};

export default Movements;
