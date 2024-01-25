// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const backgroundStylesChange = {
  RCB: 'Bangalore',
  KKR: 'Kolkata',
  MI: 'Mumbai',
  CSK: 'Chennai',
  KXP: 'Punjab',
  RR: 'Rajasthan',
  SH: 'Hyderabad',
  DC: 'Delhi',
}

class TeamMatches extends Component {
  state = {
    latestMatchData: {},
    recentMatchData: [],
    TotalMatchData: {},
    isLoading: true,
    backStyle: '',
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({backStyle: backgroundStylesChange[id]})

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    //  JSON data to camelCase
    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatchesDetails: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({TotalMatchData: updatedData})
    //
    const latestData = updatedData.latestMatchDetails
    const recentData = updatedData.recentMatchesDetails

    const updatedLatest = {
      id: latestData.id,
      date: latestData.date,
      umpires: latestData.umpires,
      venue: latestData.venue,
      result: latestData.result,
      matchStatus: latestData.match_status,
      firstInnings: latestData.first_innings,
      secondInnings: latestData.second_innings,
      manOfTheMatch: latestData.man_of_the_match,
      competingTeam: latestData.competing_team,
      teamLogo: latestData.competing_team_logo,
    }
    this.setState({latestMatchData: updatedLatest})
    console.log(updatedLatest)

    const updateRecent = recentData.map(EachItem => ({
      id: EachItem.id,
      result: EachItem.result,
      matchStatus: EachItem.match_status,
      competingTeam: EachItem.competing_team,
      teamLogo: EachItem.competing_team_logo,
    }))
    this.setState({recentMatchData: updateRecent, isLoading: false})
    console.log(updateRecent)
  }

  renderLatestData = () => {
    const {latestMatchData} = this.state
    return (
      <div className="lat-container">
        <p className="latest-title">Latest Matches</p>
        <ul className="latest-container">
          <LatestMatch
            latestMDetails={latestMatchData}
            key={latestMatchData.id}
          />
        </ul>
      </div>
    )
  }

  renderRecentData = () => {
    const {recentMatchData} = this.state
    return (
      <ul className="recent-container">
        {recentMatchData.map(eachItem => (
          <MatchCard recentDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {TotalMatchData, isLoading, backStyle} = this.state
    const {teamBannerUrl} = TotalMatchData

    return (
      <div className={`match-details-container ${backStyle}`}>
        <div className="inner-container">
          {isLoading && (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          )}
          {!isLoading && (
            <img src={teamBannerUrl} alt="team banner" className="banner-img" />
          )}
          {!isLoading && this.renderLatestData()}
          {!isLoading && this.renderRecentData()}
        </div>
      </div>
    )
  }
}
export default TeamMatches
