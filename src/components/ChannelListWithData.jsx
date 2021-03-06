import { ChannelsList } from '.';

import { gql, graphql } from 'react-apollo';

const channelsListQuery = gql`
   query ChannelsListQuery {
      channels {
         id
         name
      }
   }
`;

export default graphql(channelsListQuery)(ChannelsList);