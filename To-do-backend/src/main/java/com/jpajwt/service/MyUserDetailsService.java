package com.jpajwt.service;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



import com.jpajwt.models.UserDTO;
import com.jpajwt.models.UserDaO;
import com.jpajwt.repo.DAOuser;




@Service
public class MyUserDetailsService implements UserDetailsService {


	@Autowired
private UserDaO userDao;

	@Autowired
	private PasswordEncoder noopEncoder;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		DAOuser user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		
		return new User(user.getUsername(),user.getPassword(),new ArrayList<>());
	}
	
	public DAOuser save(UserDTO user) {
		DAOuser newUser = new DAOuser();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(noopEncoder.encode(user.getPassword()));
		return userDao.save(newUser);
	}
	
	

}




