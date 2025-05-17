import React, { useState } from "react";

const BMICalculator: React.FC = () => {
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = () => {
    const totalInches = feet * 12 + inches;
    const heightMeters = totalInches * 0.0254;
    const weightKg = weight * 0.453592;
    const bmiValue = weightKg / (heightMeters * heightMeters);
    setBMI(parseFloat(bmiValue.toFixed(2)));
  };

  const getBMICategory = () => {
    if (bmi === null) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 25) return "Normal";
    if (bmi >= 25 && bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-xl shadow-xl bg-white space-y-4">
      <h1 className="text-2xl font-bold text-center mb-4">BMI Calculator</h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Height</label>
          <input
            type="number"
            placeholder="feet"
            className="w-full border rounded px-3 py-1"
            value={feet}
            onChange={(e) => setFeet(parseInt(e.target.value))}
          />
        </div>
        <div className="pt-6">
          <input
            type="number"
            placeholder="inches"
            className="w-full border rounded px-3 py-1"
            value={inches}
            onChange={(e) => setInches(parseInt(e.target.value))}
          />
        </div>
        <div className="col-span-2">
          <label className="block font-semibold">Weight (lbs)</label>
          <input
            type="number"
            placeholder="lbs"
            className="w-full border rounded px-3 py-1"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
          />
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>

      {bmi !== null && (
        <div className="text-center mt-4">
          <p className="text-lg font-semibold">Your BMI: {bmi}</p>
          <p className="text-sm text-gray-600">Category: {getBMICategory()}</p>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-md font-semibold mb-2">BMI Scale</h2>
        <div className="flex h-6 rounded overflow-hidden">
          <div className="w-[18.5%] bg-gray-300" title="Underweight"></div>
          <div className="w-[6.5%] bg-green-400" title="Normal"></div>
          <div className="w-[5%] bg-yellow-300" title="Overweight"></div>
          <div className="flex-1 bg-pink-400" title="Obese"></div>
        </div>
        <div className="flex justify-between text-xs mt-1 text-gray-600">
          <span>15</span>
          <span>18.5</span>
          <span>25</span>
          <span>30</span>
          <span>40</span>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
