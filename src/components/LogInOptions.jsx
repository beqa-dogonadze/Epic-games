import LogInWithButton from './LogInWithButton'

const LogInOptions = () => {
  return (
    <>
      <LogInWithButton
        src='https://i.pcmag.com/imagery/reviews/05MvZiHAYTFEoBAuxOu0Tcl-12.fit_scale.size_760x427.v1597347810.jpg'
        alt='xbox'
      />
      <LogInWithButton
        src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/01/ps-logo.jpg?tf=3840x'
        alt='ps4'
      />
      <LogInWithButton
        src='https://cdn.mos.cms.futurecdn.net/QqSBXWSJeQX69ZoBRoneJd.jpg'
        alt='nintendo'
      />
      <LogInWithButton
        src='https://sm.ign.com/ign_in/news/v/valve-faci/valve-facing-new-lawsuit-over-steam-digital-dominance_rsk8.jpg'
        alt='steam'
      />
      <LogInWithButton
        src='https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=464'
        alt='facebook'
      />
      <LogInWithButton
        src='data:image/png;base64,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'
        alt='gmail'
      />
      <LogInWithButton
        src='https://yt3.googleusercontent.com/05lhMeAH6tZrPIUsp2yHNz3DwzhKbDUQcxcY0_qeXVyZttR_pktBzw0FcLUSR6D4fVqsEgL3ZO0=s900-c-k-c0x00ffffff-no-rj'
        alt='apple'
      />
    </>
  )
}
export default LogInOptions
