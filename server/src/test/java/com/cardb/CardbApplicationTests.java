package com.cardb;

import static org.assertj.core.api.Assertions.assertThat;

import com.cardb.controller.CarController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CardbApplicationTests {
	@Autowired
	private CarController controller;
	
	@Test
	void contextLoads() {
		assertThat(controller).isNotNull();
	}
}
