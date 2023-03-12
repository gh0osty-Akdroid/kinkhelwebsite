export const Title = (title) => {
    const sitename = (JSON.parse(localStorage.getItem("state")))?.site?.site?.sitename
    return (document.title = `${title} - ${sitename ? sitename :"User Panel"}`)
  }
  

  