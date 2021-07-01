import React, { Component } from 'react'
import SongService from '../Services/SongService'
import { Table,Modal,Button } from 'react-bootstrap';
import Typical from 'react-typical'
export default class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             song_title:"",
             songs:[],
             show: false,
        }
    }
    handleChange =(event)=>{
        this.setState({
            [event.target.name ]: event.target.value
        })
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state);

        
        const IId = this.state.song_title;
      
        SongService.getItemByTitle(IId).then((resp)=>{
            console.log(resp);
            if (resp.data != '') {
                this.setState({songs:resp.data})
            }else{
              alert("Song is not there")
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleClose = () => {
        this.setState({
          show: false,
        });
      };
    PlaySong = (song) => {
        console.log(song);
        this.setState({
          song_title:song.song_title,
          show: true,
        });
      };
    
    render() {
        return (
            <div>
                       <div className="container card col-md-5">
        <form className="container card-body" onSubmit={this.handleSubmit}>
        <div className="form-group ">
            <label htmlFor="id">Enter Song Title</label>
            <input
              type="text"
              className="form-control"
              id="song_title"
              aria-describedby="emailHelp"
              name="song_title"
              value={this.state.song_title}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div>
          <button type="submit" className="btn btn-primary">
            Search
          </button></div>
        </form>
      </div>
      <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>SongID</th>
              <th>Song Title</th>
              <th>Artist Name</th>
              <th>Album Name</th>
              <th>Song Location</th>
              <th>Description</th>
              <th>Play</th>
            </tr>
          </thead>
          <tbody>
            {this.state.songs.map((song) => (
              <tr key={song.song_id}>
                  <td>{song.song_id}</td>
                <td>{song.song_title}</td>
                <td>{song.artist_name}</td>
                <td>{song.album_name}</td>
                <td>{song.song_location}</td>
                <td>{song.description}</td>
                <td>
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        this.PlaySong(song);
                      }}
                    >
                      Play
                    </button>
                  </td>
               
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal
          show={this.state.show}
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
            </div>
        )
    }
}
