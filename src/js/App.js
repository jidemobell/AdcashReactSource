import React from 'react';
import Body from './components/Body';
import moment from 'moment';
import image from '../images/adcash.png';



 class App extends React.Component {

    constructor(props){
         super(props);
         this.state = {
            rows: ['row-one','row-two','row-three','row-four','row-five','row-six'],
            days: [0,1,2,3,4,5,6],
            now: moment(),
            daysInMonth: null,
         }
    }

    

    handleBackClick(e){
        e.preventDefault(); 
        this.setState({
          now : this.state.now.subtract(1,'month')
        })
        
    }

    handleFrontClick(e){
        e.preventDefault();
        this.setState({
          now : this.state.now.add(1,'month')
        })
        
    }

    handleCurrentClick(e){
        e.preventDefault();
        this.setState({
          now : moment()
        })
        
    }
    
   


    render(){
        const{rows,days,now,daysInMonth} = this.state;
        return (
            <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#" >
                    <img src={image} alt="Image" />
                </a>
                <button className="button navbar-burger">
                        <span></span>
                        <span></span>
                        <span></span>
               </button>
            </div>
            <div className="navbar-start">
                <div className="navbar-item">
                    <p className="control">
                        <strong> <span className="all-months"><p className="title"> {now.format('MMMM YYYY')} </p> </span>
                        <span className="all-years"></span> </strong>

                    </p>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="button is-primary" onClick={(e)=>this.handleBackClick(e)}><i className="fa fa-arrow-circle-left" aria-hidden="true" ></i>
                                </a>
                        </p>
                        <p className="control">
                            <a className="button is-primary current-month"  onClick={(e)=>this.handleCurrentClick(e)}>Current Month</a>
                        </p>
                        <p className="control" onClick={this.handleFrontClick}>
                            <a className="button is-primary next-month" onClick={(e)=>this.handleFrontClick(e)}><i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                </a>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
             <Body  rows={rows} days={days} now={now} daysInMonth={daysInMonth}/>
          </div>
        )
    }

}

export default App;