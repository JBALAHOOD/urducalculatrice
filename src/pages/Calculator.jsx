import React, { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('٠');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  // Convert English numerals to Urdu
  const toUrduNumerals = (num) => {
    const urduNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().replace(/\d/g, (digit) => urduNumerals[parseInt(digit)]);
  };

  // Convert Urdu numerals to English for calculations
  const toEnglishNumerals = (urduNum) => {
    const englishNumerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const urduNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return urduNum.toString().replace(/[٠-٩]/g, (digit) => {
      const index = urduNumerals.indexOf(digit);
      return index !== -1 ? englishNumerals[index] : digit;
    });
  };

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(toUrduNumerals(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '٠' ? toUrduNumerals(num) : display + toUrduNumerals(num));
    }
  };

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(toEnglishNumerals(display));

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = performOperation(currentValue, inputValue, operation);

      setDisplay(toUrduNumerals(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const performOperation = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const calculate = () => {
    const inputValue = parseFloat(toEnglishNumerals(display));

    if (previousValue !== null && operation) {
      const newValue = performOperation(previousValue, inputValue, operation);
      setDisplay(toUrduNumerals(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay('٠');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearEntry = () => {
    setDisplay('٠');
  };

  const addDecimalPoint = () => {
    if (display.includes('٫')) return;
    setDisplay(display + '٫');
  };

  // Urdu numbers for button display
  const urduNumbers = {
    0: '٠', 1: '١', 2: '٢', 3: '٣', 4: '٤',
    5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩'
  };

  const Button = ({ onClick, className, children, title }) => (
    <button
      onClick={onClick}
      className={`calculator-button ${className}`}
      title={title}
      type="button"
    >
      {children}
    </button>
  );

  return (
    <div className="p-4 flex items-center justify-center min-h-screen" dir="rtl">
      <div className="w-full max-w-md mx-auto calculator-container">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 font-urdu">
            آن لائن کیلکولیٹر
          </h1>
          <p className="text-gray-600 text-lg font-urdu">
            سادہ اور تیز حساب کتاب
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-200">
          {/* Display */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 mb-6 shadow-inner">
            <div className="text-right text-white text-4xl font-mono font-light tracking-wider min-h-[60px] flex items-center justify-end overflow-hidden calculator-display">
              {display.length > 15 ? display.slice(-15) : display}
            </div>
          </div>

          {/* Buttons Grid */}
          <div className="grid grid-cols-4 gap-3">
            {/* Row 1 - Clear buttons */}
            <Button
              onClick={clear}
              className="h-16 text-lg font-semibold bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg transition-all duration-200"
              title="مسح الكل"
            >
              🗑️
            </Button>
            
            <Button
              onClick={clearEntry}
              className="h-16 text-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-lg transition-all duration-200"
              title="مسح الرقم"
            >
              ↶
            </Button>

            <div className="col-span-2">
              <Button
                onClick={() => inputOperation('÷')}
                className="h-16 w-full text-xl font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg transition-all duration-200"
                title="تقسیم"
              >
                ÷
              </Button>
            </div>

            {/* Row 2 - Numbers 7,8,9 and multiply */}
            {[7, 8, 9].map((num) => (
              <Button
                key={num}
                onClick={() => inputNumber(num)}
                className="h-16 text-2xl font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl shadow-lg transition-all duration-200"
              >
                {urduNumbers[num]}
              </Button>
            ))}
            
            <Button
              onClick={() => inputOperation('×')}
              className="h-16 text-xl font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg transition-all duration-200"
              title="ضرب"
            >
              ×
            </Button>

            {/* Row 3 - Numbers 4,5,6 and subtract */}
            {[4, 5, 6].map((num) => (
              <Button
                key={num}
                onClick={() => inputNumber(num)}
                className="h-16 text-2xl font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl shadow-lg transition-all duration-200"
              >
                {urduNumbers[num]}
              </Button>
            ))}
            
            <Button
              onClick={() => inputOperation('-')}
              className="h-16 text-xl font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg transition-all duration-200"
              title="تفریق"
            >
              −
            </Button>

            {/* Row 4 - Numbers 1,2,3 and add */}
            {[1, 2, 3].map((num) => (
              <Button
                key={num}
                onClick={() => inputNumber(num)}
                className="h-16 text-2xl font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl shadow-lg transition-all duration-200"
              >
                {urduNumbers[num]}
              </Button>
            ))}
            
            <Button
              onClick={() => inputOperation('+')}
              className="h-16 text-xl font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg transition-all duration-200"
              title="جمع"
            >
              +
            </Button>

            {/* Row 5 - 0, decimal point and equals */}
            <div className="col-span-2">
              <Button
                onClick={() => inputNumber(0)}
                className="h-16 w-full text-2xl font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl shadow-lg transition-all duration-200"
              >
                {urduNumbers[0]}
              </Button>
            </div>

            <Button
              onClick={addDecimalPoint}
              className="h-16 text-xl font-bold bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-xl shadow-lg transition-all duration-200"
              title="نقطة عشرية"
            >
              ٫
            </Button>
            
            <Button
              onClick={calculate}
              className="h-16 text-xl font-bold bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg transition-all duration-200"
              title="نتیجہ"
            >
              =
            </Button>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="text-center mt-8 text-gray-600 font-urdu" dir="rtl">
          <p className="text-sm">
            مفت آن لائن کیلکولیٹر - جمع، تفریق، ضرب اور تقسیم
          </p>
          <p className="text-xs mt-2 text-gray-500">
            اردو ہندسوں کے ساتھ - موبائل اور کمپیوٹر کے لیے موزوں
          </p>
        </div>
      </div>
    </div>
  );
}