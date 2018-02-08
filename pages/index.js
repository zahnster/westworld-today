import Head from 'next/head'
import moment from 'moment'
import ReactGA from 'react-ga'

export default class WestworldToday extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-113511865-4')
    ReactGA.pageview('/')
  }

  render() {
    return (
      <div className="container">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Raleway:900" rel="stylesheet" />
        </Head>

        <h1>
          Westworld season 2 will premiere {moment().set({ year: 2018, month: 4, day: 22, hour: 21}).fromNow()} on April 22nd, 2018, at 9pm, 8pm central.
        </h1>

        <style jsx global>{`
          * { padding: 0; margin: 0; box-sizing: border-box; }

          html {
            height: 100vh;
            display: flex;
            align-items: center;
          }

          .container {
            padding: 5vw;
            font-family: "Raleway", sans-serif;
            font-size: 1.5rem;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}
