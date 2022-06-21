// ...
import ReactPlayer from 'react-player'

const Player = () => (
  <div>
    <ReactPlayer
      width="200%"
      height="200%"
      url="https://www.youtube.com/watch?v=Jj6DvnV6e2M&list=RDJj6DvnV6e2M&start_radio=1"
      controls
    />
  </div>
)

export default Player
