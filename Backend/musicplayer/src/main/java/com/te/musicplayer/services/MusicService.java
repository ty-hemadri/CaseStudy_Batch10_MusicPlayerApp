package com.te.musicplayer.services;

import java.util.List;

import com.te.musicplayer.beans.MusicFiles;

public interface MusicService {
	
	public List<MusicFiles> playAllSongs();

	public List<MusicFiles> getSongs(String song_title);

	public boolean addSong(MusicFiles infoBean);

	public boolean editSong(MusicFiles infoBean);

	public boolean deleteSong(int song_id);

}
