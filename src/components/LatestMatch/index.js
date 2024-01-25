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
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={teamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-logo"
        />
      </div>
      <div className="last-card">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match </p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </li>
  )
}
export default LatestMatch
