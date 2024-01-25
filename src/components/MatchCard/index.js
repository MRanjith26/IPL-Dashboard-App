// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentDetails} = props
  const {result, matchStatus, competingTeam, teamLogo} = recentDetails

  const repeat = matchStatus === 'Won' ? 'active' : 'in-active'

  return (
    <li className="recent-item">
      <img
        src={teamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-logo"
      />
      <p className="match-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${repeat}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
