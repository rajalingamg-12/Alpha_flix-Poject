import "./Subscribe.css";

const plans = [
  {
    name: "Free Access",
    price: "₹0",
    period: "Forever",
    features: ["Limited movies & shows", "Ads supported", "Watch on 1 device"],
  },
  {
    name: "Premium Monthly",
    price: "₹299",
    period: "per month",
    popular: true,
    features: [
      "Unlimited movies & shows",
      "No ads",
      "Watch on 2 devices",
      "HD quality",
    ],
  },
  {
    name: "Premium Yearly",
    price: "₹2999",
    period: "per year",
    features: [
      "Unlimited movies & shows",
      "No ads",
      "Watch on 4 devices",
      "Ultra HD quality",
      "Save 20%",
    ],
  },
];

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-container">
        <h1>Choose Your Plan</h1>
        <p className="subtitle">
          Watch unlimited movies & TV shows anytime, anywhere.
        </p>

        <div className="plans">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && <span className="badge">Most Popular</span>}

              <h2>{plan.name}</h2>
              <div className="price">
                {plan.price}
                <span>{plan.period}</span>
              </div>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <button className="plan-btn">
                {plan.price === "₹0" ? "Get Started" : "Subscribe Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
