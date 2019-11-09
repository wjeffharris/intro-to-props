function clickTab (newTab, someRandoNumber) {
    window.myStore.dispatch({
      type: "CHANGE_TAB",
      newTab: newTab
    })
  }
  
  // class SomeComponent extends React.Component {
  //
  //   constructor : function () {
  //     this.doSomething = this.doSomething.bind(this)
  //   },
  //
  //   doSomething : function () {
  //
  //   },
  //
  //   render: function () {
  //     return (
  //       <div onClick={this.doSomething}>....</div>
  //     )
  //   }
  // }
  
  // const formatName = (fname, lname) => {
  //   return (fname ? fname : '') + (lname ? ", " + lname : '')
  // }
  //
  // console.assert(formatName('a', 'b') === 'a, b')
  // console.assert(formatName('a') === 'a')
  // // TODO more tests here
  
  const Tabs = (props) => {
    const clickPicturesTab = () => clickTab('PICTURES_TAB')
    const clickMusicTab = () => clickTab('MUSIC_TAB')
    const clickVideosTab = () => clickTab('VIDEOS_TAB')
    const clickDocumentsTab = () => clickTab('DOCUMENTS_TAB')
  
    // const formattedName = formatName(fname, lname)
  
    return (
      <div className="tabs is-toggle">
        <ul>
          <li onClick={clickPicturesTab}
              className={props.activeTab === 'PICTURES_TAB' ? 'is-active' : ''}>
            <a><span>Pictures</span></a>
          </li>
          <li onClick={() => clickTab('MUSIC_TAB')}
              className={props.activeTab === 'MUSIC_TAB' ? 'is-active' : ''}>
            <a><span>Music</span></a>
          </li>
          <li onClick={function () { clickTab('VIDEOS_TAB') }}
              className={props.activeTab === 'VIDEOS_TAB' ? 'is-active' : ''}>
            <a><span>Videos</span></a>
          </li>
          <li onClick={clickTab.bind(null, 'DOCUMENTS_TAB')}
              className={props.activeTab === 'DOCUMENTS_TAB' ? 'is-active' : ''}>
            <a><span>Documents</span></a>
          </li>
        </ul>
      </div>
    )
  }
  
  const VideosPanel = (props) => {
    return (
      <div>I am the VIDEOS!!!</div>
    )
  }
  
  const PicturesPanel = (props) => {
    return (
      <div>I am the pictures!</div>
    )
  }
  
  const MusicPanel = (props) => {
    return (
      <div>I am the MUSIC!</div>
    )
  }
  
  const DocumentsPanel = (props) => {
    return (
      <div>I am the documents (BORINGGG)!</div>
    )
  }
  
  const App = (props) => {
      console.log('<App /> is rendering with props:', props)
  
      let MainPanel = function () { return null }
      if (props.activeTab === 'PICTURES_TAB') MainPanel = PicturesPanel
      else if (props.activeTab === 'MUSIC_TAB') MainPanel = MusicPanel
      else if (props.activeTab === 'VIDEOS_TAB') MainPanel = VideosPanel
      else if (props.activeTab === 'DOCUMENTS_TAB') MainPanel = DocumentsPanel
  
      return (
        <main className="container">
          <Tabs activeTab={props.activeTab} />
          <MainPanel />
        </main>
      )
  }