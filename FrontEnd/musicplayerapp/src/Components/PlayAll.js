import React, { Component } from 'react'
import SongService from "../Services/SongService";
import { Modal,Button } from "react-bootstrap";
import Typical from 'react-typical'

export default class PlayAll extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          songs: [],
          song_title:"",
          show: false,
          shows:false,
          showss:false,
          show1:false
        };
      }
      componentDidMount() {
        console.log(this.state.songs);
        SongService.getSongs().then((response) => {
          console.log(response);
          this.setState({ songs: response.data });
        });
      }
      handleChange =(event)=>{
        this.setState({
            [event.target.name ]: event.target.value
        })
    }
      handleModal() {
        this.setState({
          show: !this.state.show
        });
      }
      handleModals() {
        this.setState({
          shows: !this.state.shows
        });
      }
      handleModalss() {
        this.setState({
          showss: !this.state.showss
        });
      }

      handleClose = () => {
        this.setState({
          show1: !this.state.show1,
        });
      };
      
     Search  =(event)=>{
      event.preventDefault();
      console.log(this.state);

      
      const IId = this.state.song_title;
    
      SongService.getItemByTitle(IId).then((resp)=>{
          console.log(resp);
          if (resp.data != '') {
            this.setState({
              showss:false,
              show1:true,
            });
          }else{
            alert("Song is not there")
            this.setState({
              show1:false,
              showss:false
            });
          }
      }).catch((err)=>{
          console.log(err);
      })
  }
    render() {
        return (
            <div>
                <Button variant="primary" className="btn btn-custom col-md-3 ml-5" onClick ={()=>{this.handleModal()}}>Play All Songs</Button>{" "}
        <Button variant="warning" className="btn btn-custom col-md-3 ml-5" onClick ={()=>{this.handleModals()}}>Play Songs Randomly</Button>{" "}
        <Button variant="danger" className="btn btn-custom col-md-3 ml-5" onClick ={()=>{this.handleModalss()}}>Play a Particular Song</Button>{" "}


<Modal show={this.state.showss}>
  <Modal.Header>Search Form</Modal.Header>
  <Modal.Body>
  
  <form  onSubmit={this.Search}>

  <label htmlFor="song_title">Song Title</label>
       <input
         type="text"
         className="form-control"
         id="song_title"
         aria-describedby="emailHelp"
         name="song_title"
         value={this.state.song_title}
         onChange={this.handleChange}
       />
<br></br>

<button type="submit" className="btn btn-primary">
Search & Play
</button>
</form>
  </Modal.Body>
  <Modal.Footer>
  <Button variant="danger" type="submit" onClick ={()=>{this.handleModalss()}}>
Close
</Button>
  </Modal.Footer>
</Modal>

<Modal
          show={this.state.show1}
          onHide={this.handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Song Play</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <h2>
                  <Typical 
                   
                      steps={[
                       
                         'The Song Name is',500,
                          this.state.song_title,500 ,
                          'Playing Now',500  
                    ]}
                   
                       loop={Infinity}
                       wrapper='b'
                      
                      /> </h2>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                this.handleClose();
              }}
            >
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show}>
  <Modal.Header>NoW Playing All Songs</Modal.Header>
  <Modal.Body>
  {this.state.songs.map((song) => (
       <h2>
       <Typical 
        
           steps={[
            
              'The Song Name is',500,
               song.song_title,500 ,
               'Playing Now',500  
         ]}
        
            loop={Infinity}
            wrapper='b'
           
           /> </h2>
  ))};

  </Modal.Body>
  <Modal.Footer>
  <Button variant="danger" type="submit" onClick ={()=>{this.handleModal()}}>
Close
</Button>
  </Modal.Footer>
</Modal>
            </div>
        )
    }
}
