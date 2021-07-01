package com.te.musicplayer.dao;

import java.util.List;

import com.te.musicplayer.beans.MusicFiles;

public interface MusicDAO {
	
	public List<MusicFiles> playAllSongs();
	
	public List<MusicFiles> getSongs(String song_title1);
	
	public boolean addSong(MusicFiles infoBean);
	
	public boolean editSong(MusicFiles infoBean);
	
	public boolean deleteSong(int song_id);
	
}
