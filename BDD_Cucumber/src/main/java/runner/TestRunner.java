package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


//@RunWith(Cucumber.class)
@CucumberOptions(
		features ={ "D:\\Surajit\\BDD_Cucumber\\src\\main\\java\\features\\login.feature"},
	glue = {"stepDefination"},
	plugin={"pretty", "html:target/Folder"},
	monochrome=true
		)
public class TestRunner extends AbstractTestNGCucumberTests {
	
}

