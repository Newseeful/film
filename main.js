class Movie extends React.Component{   
    constructor(props){     
      super(props);     
      this.state={     
        image: "https://upload.wikimedia.org/wikipedia/en/5/50/StarTrekIntoDarkness_FinalUSPoster.jpg",     
        title: "Star Trek Into Darkness",     
        year: 2013,     
        imdbScore: 7.7,     
        plot: "After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction.",     
        director: "J.J. Abrams"     
      };   
    }   
    
    handleClick = () => {
      this.setState({
        image: "https://pcforum.hu/assets/site.pc/text/quicknews/21946/matrix-wp--dyn--shareimg.jpg",     
        title: "The Matrix",     
        year: 1999,     
        imdbScore: 8.7,     
        plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.", 
        director: "The Wachowski Brothers"
      });
    }
                    
    render(){   
      return( 
        <>
          <div>
            <button onClick={this.handleClick}>Click me!</button>
          </div>
          <div className="card">  
          <img src={this.state.image}/>     
          <h3>{this.state.title} <span>({this.state.year})</span></h3>      
          <small>IMDb: {this.state.imdbScore}</small>     
          <p>{this.state.plot}</p>     
          <p><strong>Director: </strong>{this.state.director}</p>    
        </div>  
       </>
      )   
    } 
  }   
  ReactDOM.render(<Movie/>, document.getElementById("root"));