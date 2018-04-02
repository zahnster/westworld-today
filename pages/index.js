import Head from 'next/head'
import ReactGA from 'react-ga'

export default class WestworldToday extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-113511865-4')
    ReactGA.pageview('/')
  }

  render() {
    const now = new Date()
    const month = now.getMonth()
    const inNumberOfDays = 22 - now.getDate()

    return (
      <div className="container">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Raleway:900" rel="stylesheet" />
        </Head>

        <h1>
        {(month === 3 && inNumberOfDays >= 0) ? (
          `Westworld season 2 will premiere in ${inNumberOfDays} days on April 22nd, 2018, at 9pm, 8pm central.`
        ) : 'Enjoy the season!'}
        </h1>

        <style jsx global>{`
          * { padding: 0; margin: 0; box-sizing: border-box; }

          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
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
