import React from "react";
import Link from "next/link";

import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "apollo-client";
import gql from "graphql-tag";

interface User {
  id: number;
  displayName: string;
  slug: string;
}

interface UserData {
  queryUser: User[];
}

export const ALL_USER_QUERY = gql`
  query {
    queryUser {
      id
      displayName
      slug
    }
  }
`;

const Users: React.FC = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery<UserData>(
    ALL_USER_QUERY,
    {
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true
    }
  );
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <ul>
      {data &&
        data.queryUser.map(item => (
          <li key={item.id}>
            <Link href="/users/[slug]" as={`/users/${item.slug}`}>
              <a>{item.displayName}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Users;
