package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;



public class DashboardPage {
	WebDriver driver;

	public DashboardPage(WebDriver driver) 
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(linkText="LOGOUT")
	private WebElement logoutBtn;
	
	@FindBy(tagName="footer")
	private WebElement footer;
	@FindBy(tagName="ol")
	private WebElement rightcornerHeading;
	@FindBy(tagName="h1")
	private WebElement mainheading;
	@FindBy(xpath="//span[text()='Users']")
	private WebElement userBtn;
	@FindBy(xpath="//span[text()='Operators']")
	private WebElement operatorBtn;
	
	public UserPage clickUserBtn() {
		userBtn.click();
		return new UserPage(driver);
		}
	public OperatorPg clickOperatorBtn() {
		operatorBtn.click();
		return new OperatorPg(driver);
		}
	public LoginPage clickLogout() {
		logoutBtn.click();
		return new LoginPage(driver);
	}
	public String getActFooterText(){
		System.out.println(footer.getText());
		return footer.getText();
		}
	public String getActMainHeadText(){
		return mainheading.getText();
		}
	public String getRHeadingText(){
		System.out.println(rightcornerHeading.getText());
		return rightcornerHeading.getText();
		}
}
