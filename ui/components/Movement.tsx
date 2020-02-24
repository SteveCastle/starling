import React from "react";
import Link from "next/link";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

interface User {
  id: number;
  displayName: string;
  firstName: string;
  lastName: string;
  slug: string;
}

interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
}

interface Supporter {
  id: string;
  firstName: string;
  lastName: string;
}

interface Event {
  id: string;
  title: string;
}

interface FundRaisingDrive {
  id: string;
  title: string;
}

interface LandingPage {
  id: string;
  title: string;
}

interface Article {
  id: string;
  title: string;
}

interface Opportunity {
  id: string;
  title: string;
}

interface Company {
  id: string;
  name: string;
}
interface Movement {
  id: number;
  title: string;
  slug: string;
  owner: User;
  regionality: string;
  description: string;
  candidates: [Candidate];
  supporters: [Supporter];
  articles: [Article];
  landingPages: [LandingPage];
  events: [Event];
  fundRaisingDrives: [FundRaisingDrive];
  opportunities: [Opportunity];
  boycottingCompanies: [Company];
  supportingCompanies: [Company];
}

interface MovementData {
  queryMovement: [Movement];
}

interface MovementVariables {
  slug: string | string[];
}

export const ALL_MOVEMENTS_QUERY = gql`
  query getMovement($slug: String!) {
    queryMovement(filter: { slug: { eq: $slug } }) {
      id
      title
      slug
      owner {
        displayName
        slug
      }
      regionality
      description
      issues {
        id
        content
      }
      candidates {
        id
        firstName
        lastName
      }
      supporters {
        id
        firstName
        lastName
      }
      events {
        id
        title
      }
      fundRaisingDrives {
        id
        title
      }
      landingPages {
        id
        title
      }
      boycottingCompanies {
        id
        name
      }
      supportingCompanies {
        id
        name
      }
      articles {
        id
        title
      }
      opportunities {
        id
        title
      }
      petitions {
        title
      }
    }
  }
`;

const Movement: React.FC<{ slug: string | string[] }> = ({ slug }) => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery<
    MovementData,
    MovementVariables
  >(ALL_MOVEMENTS_QUERY, {
    variables: { slug },
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
        data.queryMovement.map(item => <h1 key={item.id}>{item.title}</h1>)}
    </div>
  );
};

export default Movement;
