// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMDetails} = props
  const {
    date,
    umpires,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    competingTeam,
    teamLogo,
  } = latestMDetails

  return (
    <li className="latest-item">
      <div className="first-card">
        <div className="first-details">
          <p className="latest-date">{competingTeam}</p>
          <p className="latest-date">{date}</p>
          <p className="latest-text">{venue}</p>
          <p className="latest-text">{result}</p>
        </div>
        <img
          src={teamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-logo"
        />
      </div>
      <div className="last-card">
        <p className="latest-label">First Innings</p>
        <p className="latest-text">{firstInnings}</p>
        <p className="latest-label">Second Innings</p>
        <p className="latest-text">{secondInnings}</p>
        <p className="latest-label">Man Of The Match </p>
        <p className="latest-text">{manOfTheMatch}</p>
        <p className="latest-label">Umpires</p>
        <p className="latest-text">{umpires}</p>
      </div>
    </li>
  )
}
export default LatestMatch
