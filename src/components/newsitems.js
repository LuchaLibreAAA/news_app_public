import React, { Component } from 'react'



export default class Newsitems extends Component {

  
  render() {
    let {caption,description,imgurl,url,mode,publishedAt}=this.props;
    //console.log(publishedAt)
    let timeobj=new Date(publishedAt);
    let time=timeobj.toUTCString()

    description=description.slice(0,200)+"..."
        if(caption.length>80)
        caption=caption.slice(0,80)+"..."

    let darkmode=mode.darkmode
    return (
      <>
            
      <div className='my-5'>
        <div className="card" style={{width: '25rem',height:'34rem',backgroundColor: darkmode ? 'rgb(0, 82, 170)' : 'white' ,color:darkmode?'white':'black',padding:'10 px' }}>

  <img src={imgurl} height="200px" width="400px" className="card-img-top" alt="Couldn't load "/>
  
  <div className="card-body">
    <p class="fw-light">{time}</p>
    <h5 className="card-title">{caption}</h5>
    <p className="card-text">{description}</p>
    <a href={url} target="_blank"  rel="noreferrer" className="btn btn-primary">Read Full Article</a>
  </div>
</div>
      </div>
      </>
    )
  }
}
