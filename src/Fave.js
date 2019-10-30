
import React, { Component } from 'react'

export default class Fave extends Component {
 
   
    // constructor(props){
    //   super(props);
    //   this.state={
    //     // isFave : false 
    //   };
    // }
     handleClick =(e)  =>{

           
      e.stopPropagation()
      console.log('Handling Fave click!')

      this.props.onFaveToggle()
      // this.setState ({
      //   isFave  : !this.state.isFave
      // })
      

      // const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
     
     } 
  
  
    render() {
      
   
        
   
        return (
          this.state.isFave?
            <div onClick={this.handleClick}  className='film-row-fave remove_from_queue' >
            <p  className="material-icons" >remove_to_queue</p>
          </div> :
          <div onClick={this.handleClick}  className='film-row-fave add_to_queue' >
             <p  className="material-icons" >add_to_queue</p>
          </div>
        )
    }
} 




