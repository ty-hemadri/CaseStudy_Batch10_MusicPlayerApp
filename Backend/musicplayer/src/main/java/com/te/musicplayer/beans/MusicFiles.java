package com.te.musicplayer.beans;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Table(name="musicfiles")
@Entity
public class MusicFiles implements Serializable {
	@Id
	@Column
	private int song_id;
	@Column
	private String song_title;
	@Column
	private String artist_name;
	@Column
	private String album_name;
	@Column
	private String song_location;
	@Column
	private String description;

}
