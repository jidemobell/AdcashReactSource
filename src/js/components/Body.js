
import React from 'react';
import moment from 'moment';
import Header from './Header';


class Body extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            eventdata: [
              {
                title: 'Estonia Jazz Fest',
                date: '27-12-2017',
                description: 'Annual Estonia Jazz festival'
              },
              {
                title: 'Tallin Java Meetup',
                date: '1-1-2018',
                description: 'A hangout for Java Devs'
              }
            ]
        }
     
   }


   
     stFunction(){
       const {eventdata} = this.state;
    localStorage.setItem('data',eventdata[0]);
    localStorage.setItem('datasDate',eventdata[0].date);
}
   
  

    render(){
        const {rows,days,} = this.props;
        let {daysInMonth,now} = this.props;
        let k = 0;
        daysInMonth = now.daysInMonth();
        let firstDayWeek = now.startOf('month').weekday();;
        
        return (
               <div>
               
               <table className="table is-bordered is-hoverable">
                  <Header />
                  <tbody>
                  {
                     rows.map((row,i) => {
                        let j = firstDayWeek;   
                           return (
                               <tr key={`row ${i}`} className={row}>
                               
                                  {
                                      days.map((day,l) => {
                                       if(j === 6){
                                           j=0
                                       }else{
                                           j++
                                       }
                                      return (
                                           <td key={`row_${i}-day${j}`} name={`row_${i}-day${j}`}>
                                              {
                                                (l === firstDayWeek && i === 0) ? '' : ((i === 0 && l>firstDayWeek)||(i !== 0) 
                                                 && k <= daysInMonth - 1)
                                                 ?(now.startOf('month').add(k++,'days').format('D')):''
                                             }
                  
                                           </td>
                                          )
                                      })
                                  }
                               </tr>
                             )
                     })
                  }
                  </tbody>
               </table>
           </div>
        )
    }
}


export default Body;