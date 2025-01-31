package GrundlagenDerProgramierung.AbgabeSpringBoot.model;
import java.util.ArrayList;
import java.util.List;
//import java.util.Map;
import java.util.Random;

class BondInvestment extends Investment {

	public BondInvestment(double amount, int duration) {
		super(amount, duration);
		// TODO Auto-generated constructor stub
	}


//	@SuppressWarnings("unchecked")
	@Override
	public  List<InvestmentValue> simulate() {
		// TODO Auto-generated method stub
		double r = 0.04;
		// Volatitlitaet fuer Anlagen
		double o = 0.01;
		
		List<InvestmentValue> values = new ArrayList<>();
		List<Double> rates = new ArrayList<>();
		
		
		for (int i=0; i< duration; i++) {
			
			//Zufaellige schwankung fuer Anlagen
			Random random = new Random();
			double z =  random.nextDouble(1) - .5;
//			System.out.println("random " + z);
			
			double rate = (amount* ((r + o * z))/amount);
//			System.out.println(rate);
			amount +=  amount* ((r + o * z));
			values.add(new InvestmentValue(amount, i, rate));
			
		}
		System.out.println(values);
		return values;
	}

}
