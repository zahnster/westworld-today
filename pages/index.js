import { Fragment } from 'react'
import Head from 'next/head'
import ReactGA from 'react-ga'

import moment from 'moment'

export default class WestworldToday extends React.Component {
  constructor() {
    super()

    this.state = {
      now: null,
      airtime: null
    }

    this.setLocalizedAirtime = this.setLocalizedAirtime.bind(this)
    this.setCurrentTime = this.setCurrentTime.bind(this)
  }

  componentDidMount() {
    ReactGA.initialize('UA-113511865-4')
    ReactGA.pageview('/')

    this.setCurrentTime()
    this.setLocalizedAirtime()
  }

  setLocalizedAirtime() {
    const utcOffset = moment().utcOffset() / 60
    const airtimeHour = utcOffset === -5 ? 20 : 21
    const airtime = moment(`2018-04-22 ${airtimeHour}`)

    this.setState({ airtime })
  }

  setCurrentTime() {
    const now = moment()

    this.setState({ now })
    setTimeout(this.setCurrentTime, 1000)
  }

  render() {
    const { now, airtime } = this.state
    let messageTime = null
    let message

    if (now && airtime) {
      const hoursLeft = airtime.diff(now, 'hours')
      messageTime = `${hoursLeft} hours`

      if (hoursLeft <= 1) {
        const minutesLeft = airtime.diff(now, 'minutes')
        messageTime = `${minutesLeft} minutes`

        if (minutesLeft <= 1) {
          const secondsLeft = airtime.diff(now, 'seconds')
          messageTime = `${secondsLeft} seconds`
        }
      }

      message = `Westworld season 2 will premiere in ${messageTime} on April 22nd, 2018, at 9pm, 8pm central.`

      if (airtime.diff(now) < 0) {
        message = (
          <Fragment>
            OMG did you see it?!<br />
            <a href="https://play.hbonow.com/series/urn:hbo:series:GV7xwpQNK8MJfPwEAAAG_">
              Watch on HBO
            </a>
          </Fragment>
        )
      }
    }

    return (
      <div className="container">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:900"
            rel="stylesheet"
          />
        </Head>

        <h1>{message}</h1>

        <style jsx global>{`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 5vw;
            font-family: 'Raleway', sans-serif;
            font-size: 1.5rem;
            text-align: center;
          }

          a {
            color: #3059ad;
          }
        `}</style>
      </div>
    )
  }
}
