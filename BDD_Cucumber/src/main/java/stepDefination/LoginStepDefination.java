package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	private WebDriver driver;
	static String actualTitle;
	String URL= "https://www.google.com/intl/en-GB/gmail/about/"; 
	@Given("^user open a browser$")
	public void user_open_a_browser() throws Throwable {
		System.setProperty("webdriver.gecko.driver", "D:\\Surajit\\e(jars + drivers)\\DRIVERS\\geckodriver.exe");
		
		driver = new FirefoxDriver();
		
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		
		System.out.println("Browser is opened successfully");
		driver.get(URL);
	}
	@When("^title of the page is Gmail from Google")
	public void title_of_the_page_is_Gmail_from_Google() throws Throwable{
		//using wait 
        WebDriverWait wait=new WebDriverWait(driver,60);
      	// verify Home page
		actualTitle = driver.getTitle();
        System.out.println("Title of page is :"+actualTitle);
     		if(wait.until(ExpectedConditions.titleIs("Gmail - Free Storage and Email from Google")))
     		{
     			System.out.println("Gmail page is displayed");
     		}
     		else
     		{
     			System.out.println("Failed to display Gmail");
     			return;
     		}
	}
	@Then("^user clicks on sign in link")
	public void user_clicks_on_sign_in_link()throws Throwable{
		driver.findElement(By.xpath("//a[text()='Sign In']")).click();
	}
	
	@Then("^user enter Email or phone$")
	public void user_enter_Email_or_phone() throws Throwable {
	    driver.findElement(By.id("identifierId")).click();
	    driver.findElement(By.id("identifierId")).sendKeys("surajitsen.iter2011");
	}

	@Then("^user clicks on next$")
	public void user_clicks_on_next() throws Throwable {
	    
		WebElement el1 = driver.findElement(By.xpath("//*[@class='dEOOab RxsGPe']"));
		
		if(el1.isDisplayed()){
			System.out.println("Entered User name Is Wrong");
		}
		else{
			driver.findElement(By.xpath("//div[@id='identifierNext']")).click();
		}
	}

	@Then("^user enter password$")
	public void user_enter_password() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 2);
		WebElement el2=null;  
        el2 = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='password']/div[1]/div/div[1]/input")));
       System.out.println(" Final submit button was clickable " );
		driver.findElement(By.xpath("//*[@id='password']/div[1]/div/div[1]/input")).sendKeys("***");
	}
	
	@Then("^user clicks on nextt$")
	public void user_clicks_on_nextt() throws Throwable {
		driver.findElement(By.xpath("//*[@class='qhFLie']/div")).click();
		Thread.sleep(2000);
	   
	}
	
	@Then("^user is into inbox page$")
	public void user_is_into_inbox_page() throws Throwable {
		//driver.getCurrentUrl();
		
		
		
		if(driver.getTitle().contains("Inbox - Gmail")){
			
			System.out.println("login In was successful");
			String Uname = driver.findElement(By.xpath("//*[@id='gb']/div[2]/div[6]/div[1]/div/div[1]")).getText();
			System.out.println("Welcome User :" +Uname );
		}
		else{
			WebElement el3 = driver.findElement(By.xpath("//*[@id='password']/div[2]/div[2]"));
			String s = el3.getText();
			System.out.println(s);
		}
		
		driver.close();
		//driver.quit();
		System.out.println("suraj");
				   
	}

}
