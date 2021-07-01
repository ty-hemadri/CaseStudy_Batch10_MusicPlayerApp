import React, { Component } from "react";
import { Modal,Button } from "react-bootstrap";
import SongService from "../Services/SongService";

export default class PlayOptions extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          show: false,
          shows:false,
          showss:false,
          song_id:"",
          song_title:"",
          artist_name:"",
          album_name:"",
          song_location:"",
          description:""
        };
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
      handleChange =(event)=>{
        this.setState({
            [event.target.name ]: event.target.value
        })
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state);

        
        const data = {...this.state}
      
        SongService.createSong(data).then((resp)=>{
            console.log(resp);
            if (resp.status === 200) {
                alert("Data Stored Successfully")
                this.setState({
                    song_id:"",
                    song_title:"",
                    artist_name:"",
                    album_name:"",
                    song_location:"",
                    description:""
                })
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    update =(event)=>{
        event.preventDefault();
        console.log(this.state);

        
        const data = {...this.state}
    
        SongService.updateSong(data)
          .then((resp) => {
            console.log(resp);
            if (resp.status === 200) {
                alert("Song Edit Successfully")
                this.setState({
                    song_id:"",
                    song_title:"",
                    artist_name:"",
                    album_name:"",
                    song_location:"",
                    description:""
                })
            }
    
         
          })
          .catch((err) => {
            console.log(err);
          });
      };
      Delete =(event)=>{
        event.preventDefault();
        console.log(this.state);

        
        const song_id = this.state.song_id;
    
        SongService.deleteSong(song_id)
          .then((resp) => {
            console.log(resp);
            if (resp.status === 200) {
                alert("Song Deleted Successfully")
                this.setState({
                    song_id:""
                })
            }
    
         
          })
          .catch((err) => {
            console.log(err);
          });
      };
  render() {
    return (
        
        <div>
            <Button variant="primary" className="btn btn-custom col-md-3 ml-5" onClick ={()=>{this.handleModal()}}>Add Song</Button>{" "}
        <Button variant="warning" className="btn btn-custom col-md-3 ml-5" onClick ={()=>{this.handleModals()}}>Edit Song</Button>{" "}
        <Button variant="danger" className="btn btn-custom col-md-3 ml-5" onClick ={()=>{this.handleModalss()}}>Delete Song</Button>{" "}
        <Modal show={this.state.show}>
          <Modal.Header>Add Songs</Modal.Header>
          <Modal.Body>
          
        <form  onSubmit={this.handleSubmit}>
       
            <label htmlFor="song_id">Song Id</label>
            <input
              type="number"
              className="form-control"
              id="song_id"
              aria-describedby="emailHelp"
              name="song_id"
              value={this.state.song_id}
              onChange={this.handleChange}
            />
          

          
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
         
            <label htmlFor="artist_name">Artist Name</label>
            <input
              type="text"
              className="form-control"
              id="artist_name"
              aria-describedby="emailHelp"
              name="artist_name"
              value={this.state.artist_name}
              onChange={this.handleChange}
            />
          
            <label htmlFor="album_name">Album Name</label>
            <input
              type="text"
              className="form-control"
              id="album_name"
              aria-describedby="emailHelp"
              name="album_name"
              value={this.state.album_name}
              onChange={this.handleChange}
            />
            <label htmlFor="song_location">Song Location</label>
            <input
              type="text"
              className="form-control"
              id="song_location"
              aria-describedby="emailHelp"
              name="song_location"
              value={this.state.song_location}
              onChange={this.handleChange}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              aria-describedby="emailHelp"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
         <br></br>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
     
          </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" type="submit" onClick ={()=>{this.handleModal()}}>
    Close
  </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.shows}>
          <Modal.Header>Edit Song Form</Modal.Header>
          <Modal.Body>
          
          <form  onSubmit={this.update}>
       
       <label htmlFor="song_id">Song Id</label>
       <input
         type="number"
         className="form-control"
         id="song_id"
         aria-describedby="emailHelp"
         name="song_id"
         value={this.state.song_id}
         onChange={this.handleChange}
       />
     

     
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
    
       <label htmlFor="artist_name">Artist Name</label>
       <input
         type="text"
         className="form-control"
         id="artist_name"
         aria-describedby="emailHelp"
         name="artist_name"
         value={this.state.artist_name}
         onChange={this.handleChange}
       />
     
       <label htmlFor="album_name">Album Name</label>
       <input
         type="text"
         className="form-control"
         id="album_name"
         aria-describedby="emailHelp"
         name="album_name"
         value={this.state.album_name}
         onChange={this.handleChange}
       />
       <label htmlFor="song_location">Song Location</label>
       <input
         type="text"
         className="form-control"
         id="song_location"
         aria-describedby="emailHelp"
         name="song_location"
         value={this.state.song_location}
         onChange={this.handleChange}
       />
       <label htmlFor="description">Description</label>
       <input
         type="text"
         className="form-control"
         id="description"
         aria-describedby="emailHelp"
         name="description"
         value={this.state.description}
         onChange={this.handleChange}
       />
    <br></br>

     <button type="submit" className="btn btn-primary">
       Update
     </button>
   </form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" type="submit" onClick ={()=>{this.handleModals()}}>
    Close
  </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showss}>
          <Modal.Header>Delete Form</Modal.Header>
          <Modal.Body>
          
          <form  onSubmit={this.Delete}>
       
       <label htmlFor="song_id">Song Id</label>
       <input
         type="number"
         className="form-control"
         id="song_id"
         aria-describedby="emailHelp"
         name="song_id"
         value={this.state.song_id}
         onChange={this.handleChange}
       />
     <br></br>

     <button type="submit" className="btn btn-primary">
       Delete
     </button>
   </form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" type="submit" onClick ={()=>{this.handleModalss()}}>
    Close
  </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
