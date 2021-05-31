package com.stepDefs;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.pages.DashboardPage;
import com.pages.LoginPage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class DashboardStepDef {
	WebDriver driver;
	LoginPage lp=null;
	DashboardPage dp=null;
	
	@Before("@dash")
	public void openBrowser(){
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("file:///C:/Users/rajat/Downloads/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html");
		driver.manage().window().maximize(); 
		lp=new LoginPage(driver);
	}
	@After("@dash")
	public void tearDown(){
		driver.close();
	}
	
	@Given("^user should perform valid login from login pg$")
	public void user_should_perform_valid_login_from_login_pg() throws Throwable {
		dp=lp.validLogin();
	}

	@Then("^validate footer text$")
	public void validate_footer_text() throws Throwable {
		String exp="Design for Selenium Automation Test V 2.3.0\n"+"Copyright © 2005-2019 JavaByKiran. All rights reserved.";
		Assert.assertEquals(dp.getActFooterText(),exp);
	}
	@Given("^user should perform valid login$")
	public void user_should_perform_valid_login() throws Throwable {
		dp=lp.validLogin();
	}

	@Then("^validate heading$")
	public void validate_heading() throws Throwable {
		Assert.assertEquals(dp.getActMainHeadText(),"Dashboard Courses Offered");
	}
	@Then("^validate right corner heading$")
	public void validate_right_corner_heading() throws Throwable {
		Assert.assertEquals(dp.getRHeadingText(),"Home Dashboard"); 
	}
}
