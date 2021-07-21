package com.jpajwt.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.jpajwt.models.AuthenticationRequest;
import com.jpajwt.models.AuthenticationResponse;
import com.jpajwt.models.UserDTO;
import com.jpajwt.service.MyUserDetailsService;
import com.jpajwt.util.JwtUtil;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class MainController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private MyUserDetailsService userDetailsService;

	@Autowired
	private JwtUtil jwtUtil;
	
		@GetMapping("/todo")
		public ResponseEntity<Map<String, Boolean>> getTodo() {
			Map<String, Boolean> response = new HashMap<>();
			response.put("to-do", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
		
	try {	
		Authentication authentication =	authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
				);}
	catch(BadCredentialsException e) {
		throw new Exception("Incorrect username or password",e);
	}
	
	final UserDetails userDetails= userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
	
	final String jwt=jwtUtil.generateToken(userDetails);
		
	return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
	
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}

	
}
