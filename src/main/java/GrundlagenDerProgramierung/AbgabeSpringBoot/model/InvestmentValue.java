package GrundlagenDerProgramierung.AbgabeSpringBoot.model;

public class InvestmentValue {
	public double amount;
	public int year;
	public double rate;
	
	public InvestmentValue(double amount, int year, double rate) {
		this.amount=amount;
		this.year=year;
		this.rate=rate;
	}
}
