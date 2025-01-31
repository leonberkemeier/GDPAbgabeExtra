package GrundlagenDerProgramierung.AbgabeSpringBoot.service;

import GrundlagenDerProgramierung.AbgabeSpringBoot.model.Investment;
import GrundlagenDerProgramierung.AbgabeSpringBoot.model.InvestmentFactory;
import GrundlagenDerProgramierung.AbgabeSpringBoot.model.InvestmentRequest;
import GrundlagenDerProgramierung.AbgabeSpringBoot.model.InvestmentValue;

import org.springframework.stereotype.Service;

import java.util.HashMap;
//import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class InvestmentService {

 
    public List<InvestmentValue> simulateInvestment(InvestmentRequest request) {
        // Investment-Objekt basierend auf dem Typ erstellen
    	
    	System.out.println("request received" + request);
        Investment investment = InvestmentFactory.createInvestment(
                request.getInvestmentType(),
                request.getAmount(),
                request.getDuration()
        );

        // Simulation ausführen
        List<InvestmentValue> values = investment.simulate();

        // Liste der Jahre erstellen
        List<Double> years = generateYears(request.getDuration());
        
   
        
        return values;
    }

  
    private List<Double> generateYears(int duration) {
        return java.util.stream.IntStream.rangeClosed(1, duration)
                .mapToDouble(i -> (double) i)
                .boxed()
                .toList();
    }
}
//import java.util.Map;
//import java.util.Random;
//
//@Service
//public class InvestmentService {
//
//    public Map<String, List<Double>> simulateInvestment(InvestmentRequest request) {
////        List<Double> values = new ArrayList<>();
////        List<Integer> years = new ArrayList<>();
//        
//     
    	
//    	double yearlyamount = request.getAmount();
//    	int duration = request.getDuration();
//    	
//        Random random = new Random();
//
//        for (int i = 0; i < request.getDuration(); i++) {
//            double yearlyReturn;
//
//            switch (request.getInvestmentType()) {
//                case "stock": // Aktien
//                    yearlyReturn = 1 + random.nextGaussian() * request.getVolatitilty();
//                    break;
//                case "bond": // Anleihen
//                    yearlyReturn = 1 + 0.03; // Fester Zinssatz von 3%
//                    break;
//                case "realEstate": // Immobilien
//                    yearlyReturn = 1 + 0.04 + random.nextGaussian() * request.getVolatitilty();
//                    break;
//                default:
//                    throw new IllegalArgumentException("Ungültige Anlageklasse: " + request.getInvestmentType());
//            }
//
//            yearlyamount = yearlyReturn;
//        }
//
//        return yearlyamount;
//    }
//
//}
