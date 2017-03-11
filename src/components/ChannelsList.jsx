import React, {Component} from 'react';

class ChannerlsList extends Component {
   render() {
      let channels = [
         { id: 1, channelName: `Channel 1`},
         { id: 2, channelName: `Channel 2`}
      ];
      return (
         <div>
            <ul className="Item-list">
               {channels.map(channel => <li key={channel.id}>{channel.channelName}</li>)}
            </ul>
         </div>
      );
   }
}

export default ChannerlsList;