package com.te.musicplayer.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.te.musicplayer.beans.MusicFiles;


@Repository
public class MusicDAOImpl implements MusicDAO {
	@PersistenceUnit
	private EntityManagerFactory factory;

	@Override
	public List<MusicFiles> playAllSongs() {
		List<MusicFiles> beans =null;
		try {

			EntityManager manager = factory.createEntityManager();

			Query query = manager.createQuery("from MusicFiles");

			beans = query.getResultList();

		} catch (Exception e) {
			beans = null;
			e.printStackTrace();
		}

		return beans;
	}

	@Override
	public List<MusicFiles> getSongs(String song_title1) {
		List<MusicFiles> beans =null;
		try {

			EntityManager manager = factory.createEntityManager();

			Query query = manager.createQuery("from MusicFiles where song_title=:song_title1");
			query.setParameter("song_title1", song_title1);

			beans = query.getResultList();

		} catch (Exception e) {
			beans = null;
			e.printStackTrace();
		}

		return beans;
	}

	@Override
	public boolean addSong(MusicFiles infoBean) {
		try {

			EntityManager manager = factory.createEntityManager();
			EntityTransaction transaction = manager.getTransaction();
			transaction.begin();
			manager.persist(infoBean);
			transaction.commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean editSong(MusicFiles infoBean) {
		try {

			EntityManager manager = factory.createEntityManager();
			EntityTransaction transaction = manager.getTransaction();
			transaction.begin();
			MusicFiles orgData = manager.find(MusicFiles.class, infoBean.getSong_id());

			if (infoBean.getAlbum_name() != null && infoBean.getAlbum_name() != "") {
				orgData.setAlbum_name(infoBean.getAlbum_name());
			}
			if (infoBean.getArtist_name() != null && infoBean.getArtist_name()!= "") {
				orgData.setArtist_name(infoBean.getArtist_name());
			}
			if (infoBean.getDescription() != null && infoBean.getDescription() != "") {
				orgData.setDescription(infoBean.getDescription());
			}
			if (infoBean.getSong_location() != null && infoBean.getSong_location() != "") {
				orgData.setSong_location(infoBean.getSong_location());
			}
			if (infoBean.getSong_title() != null && infoBean.getSong_title() != "") {
				orgData.setSong_title(infoBean.getSong_title());
			}

			transaction.commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteSong(int song_id) {
		try {

			EntityManager manager = factory.createEntityManager();
			EntityTransaction transaction = manager.getTransaction();
			transaction.begin();
			MusicFiles infoBean = manager.find(MusicFiles.class,song_id );
			manager.remove(infoBean);
			transaction.commit();
			return true;
		} catch (Exception e) {

			e.printStackTrace();

			return false;
		}
	}

}
