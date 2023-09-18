import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "features": [
        "Access to cardio equipment",
        "Access to strength training area",
        "Locker room access",
        "Discounted group classes",
        "Monthly billing"
      ],
      "price": 29
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "features": [
        "Access to all gym areas",
        "Free group classes",
        "Personal trainer sessions (2 per month)",
        "Towel service",
        "Sauna and steam room access",
        "Monthly billing"
      ],
      "price": 49
    },
    {
      "id": 3,
      "name": "VIP Membership",
      "features": [
        "Access to all gym areas",
        "Unlimited group classes",
        "Unlimited personal trainer sessions",
        "Priority access to facilities",
        "Massage therapy sessions (1 per month)",
        "Yearly billing"
      ],
      "price": 99
    }
  ]


  return (
    <div className="m-12">
      <h2 className="text-5xl text-center pb-5">Best prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;