package GrundlagenDerProgramierung.AbgabeSpringBoot.model;


public class InvestmentFactory {
    public static Investment createInvestment(String type, double amount, int duration) {
        switch (type.toLowerCase()) {
            case "stock":
                return new StockInvestment(amount, duration);
            case "bond":
                return new BondInvestment(amount, duration);
            case "realestate":
                return new RealEstateInvestement(amount,duration);
            default:
                throw new IllegalArgumentException("Unknown investment type: " + type);
        }
    }
}
