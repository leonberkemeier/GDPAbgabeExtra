package GrundlagenDerProgramierung.AbgabeSpringBoot.model;

import java.util.ArrayList;
import java.util.List;
//import java.util.Map;
import java.util.Random;

class StockInvestment  extends Investment{

	public StockInvestment(double amount, int duration) {
		super(amount, duration);
		// TODO Auto-generated constructor stub
	}


//	@SuppressWarnings("unchecked")
	@Override
	public List<InvestmentValue> simulate() {
		// TODO Auto-generated method stub
		//Durchschnittliche Rendite fuer Anlagen
		double r = 0.10;
		// Volatitlitaet fuer Anlagen
		double o = 0.10;
		
		List<InvestmentValue> values=new ArrayList<>();
		
		
		for (int i=0; i< duration; i++) {
			
			//Zufaellige schwankung fuer Anlagen
			Random random = new Random();
			double z =  random.nextDouble(10) - 5;
			double rate = (amount* ((r + o * z))/amount);
		
			amount +=  amount* ((r + o * z));
			values.add(new InvestmentValue(amount, i, rate));
			
			}
		
		
		return values;
}

}
