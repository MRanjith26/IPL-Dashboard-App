// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {cricketData: [], isLoading: true}

  componentDidMount() {
    this.getCricketData()
  }

  getCricketData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const mainData = data.teams

    const updatedCaseData = mainData.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({cricketData: updatedCaseData, isLoading: false})
  }

  render() {
    const {cricketData, isLoading} = this.state
    return (
      <div className="app-container">
        <div className="app-inner-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo"
            />
            <h1 className="logo-name">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div className="another-container">
              <ul className="cricket-data-container">
                {cricketData.map(eachItem => (
                  <TeamCard TeamDetails={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Home
