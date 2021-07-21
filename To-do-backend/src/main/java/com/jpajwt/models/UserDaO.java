package com.jpajwt.models;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.jpajwt.repo.DAOuser;



@Repository
public interface UserDaO extends CrudRepository<DAOuser, Integer> {
	
	DAOuser findByUsername(String username);
	
}