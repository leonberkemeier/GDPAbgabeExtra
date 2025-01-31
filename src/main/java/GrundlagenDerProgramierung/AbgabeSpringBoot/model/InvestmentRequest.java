package GrundlagenDerProgramierung.AbgabeSpringBoot.model;

public class InvestmentRequest {
	private double amount;
	private int duration;
	private String investmentType;
	
	
	
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public String getInvestmentType() {
		return investmentType;
	}
	public void setInvestmentType(String investmentType) {
		this.investmentType = investmentType;
	}
	
	
	
}
