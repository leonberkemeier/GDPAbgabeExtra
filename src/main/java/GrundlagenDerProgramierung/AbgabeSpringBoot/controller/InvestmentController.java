package GrundlagenDerProgramierung.AbgabeSpringBoot.controller;

//import GrundlagenDerProgramierung.AbgabeSpringBoot.model.InvestmentFactory;

//import GrundlagenDerProgramierung.AbgabeSpringBoot.model.StockInvestment;
//import GrundlagenDerProgramierung.AbgabeSpringBoot.model.Investment;
import GrundlagenDerProgramierung.AbgabeSpringBoot.model.InvestmentRequest;
import GrundlagenDerProgramierung.AbgabeSpringBoot.model.InvestmentValue;
import GrundlagenDerProgramierung.AbgabeSpringBoot.service.InvestmentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
//import java.util.Map;

@RestController
@RequestMapping("/api/investments")
@CrossOrigin(origins = {"http://localhost:8080", "https://invest.leonberkemeier.de"}) // Erlaubt Anfragen vom React-Vite-Frontend
public class InvestmentController{
	
	private final InvestmentService investmentService;
	
	@Autowired
	public InvestmentController(InvestmentService investmentservice) {
		this.investmentService=investmentservice;
	}
	@PostMapping("/simulate")
	public List<InvestmentValue> simulateInvestement(@RequestBody InvestmentRequest request){
		return investmentService.simulateInvestment(request);
	}

}