package com.te.musicplayer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.te.musicplayer.beans.MusicFiles;
import com.te.musicplayer.beans.MusicResponse;
import com.te.musicplayer.services.MusicService;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class MusicController {
	
	@Autowired
	MusicService service;

	@GetMapping(path = "/playall", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public List<MusicFiles> getAllEmployeeDetails() {
		
		List<MusicFiles> infoBeans = service.playAllSongs();

		
			return infoBeans;
	}
	
	@GetMapping(path = "/getsong/{song_title}", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public List<MusicFiles> getEmpData(@PathVariable String song_title) {

		
		List<MusicFiles> infoBean = service.getSongs(song_title);

		

		return infoBean;
	}
	
	@PostMapping(path = "/add", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public MusicResponse addEmpData(@RequestBody MusicFiles infoBean) {
		MusicResponse response = new MusicResponse();

		if (service.addSong(infoBean)) {
			response.setStatusCode(200);
			response.setMsg("success , Added the record");
		} else {
			response.setStatusCode(400);
			response.setMsg("Failure , Could not add the data");
		}

		return response;
	}
	
	@PutMapping(path = "/edit", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public MusicResponse updateEmpData(@RequestBody MusicFiles infoBean) {
		MusicResponse response = new MusicResponse();

		if (service.editSong(infoBean)) {
			response.setStatusCode(200);
			response.setMsg("success , Updated the record");
		} else {
			response.setStatusCode(400);
			response.setMsg("Failure , Could not update the record");
		}
		return response;
	}
	
	@DeleteMapping(path = "/delete/{Id}" , produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public MusicResponse deleteEmpData(@PathVariable(name = "Id")int song_id ) {
		MusicResponse response = new MusicResponse();

		if (service.deleteSong(song_id)) {
			response.setStatusCode(200);
			response.setMsg("success , record deleted");
		} else {
			response.setStatusCode(400);
			response.setMsg("Failure , Could not delete the record");
		}
		return response;
	}

}
