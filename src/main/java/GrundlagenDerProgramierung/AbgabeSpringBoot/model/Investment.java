package GrundlagenDerProgramierung.AbgabeSpringBoot.model;

//import java.util.ArrayList;
import java.util.List;
//import java.util.Map;

public abstract class Investment {
	
	protected double amount;
	protected int duration;
	
	public Investment(double amount, int duration) {
		this.amount=amount;
		this.duration=duration;
	}
	
	public abstract List<InvestmentValue> simulate();
}
