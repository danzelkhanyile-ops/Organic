'use client';

import { useState } from 'react';
import { playClick, playDing, playBuzz, playSuccess } from './SoundPlayer';
import { ChevronDown, ChevronRight, Lightbulb, AlertTriangle, CheckCircle, XCircle, HelpCircle, FlaskConical } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  instruction: string;
  tip: string;
  answer: string;
  commonMistake: string;
}

interface StepRevealProps {
  steps: Step[];
  onComplete?: () => void;
}

export default function StepReveal({ steps, onComplete }: StepRevealProps) {
  const [revealedSteps, setRevealedSteps] = useState<number[]>([]);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean | null>>({});
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const revealStep = (index: number) => {
    playClick();
    if (!revealedSteps.includes(index)) {
      setRevealedSteps([...revealedSteps, index]);
    }
  };

  const handleCheck = (index: number, isCorrect: boolean) => {
    if (isCorrect) {
      playDing();
      setCheckedSteps({ ...checkedSteps, [index]: true });
      if (!completedSteps.includes(index)) {
        const newCompleted = [...completedSteps, index];
        setCompletedSteps(newCompleted);

        if (newCompleted.length === steps.length && onComplete) {
          setTimeout(() => {
            playSuccess();
            onComplete();
          }, 500);
        }
      }
    } else {
      playBuzz();
      setCheckedSteps({ ...checkedSteps, [index]: false });
    }
  };

  const isStepRevealed = (index: number) => revealedSteps.includes(index);
  const isStepCompleted = (index: number) => completedSteps.includes(index);

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div 
          key={step.number} 
          className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
            isStepCompleted(index) 
              ? 'border-green-400 bg-green-50/50' 
              : 'border-purple-200 bg-white hover:border-purple-300'
          }`}
        >
          <button
            onClick={() => revealStep(index)}
            className="w-full text-left p-4 flex justify-between items-center btn-press transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                isStepCompleted(index) 
                  ? 'bg-green-500 text-white' 
                  : 'bg-purple-100 text-purple-700'
              }`}>
                {isStepCompleted(index) ? '✓' : step.number}
              </div>
              <span className={`font-bold text-lg ${
                isStepCompleted(index) ? 'text-green-700' : 'text-gray-800'
              }`}>
                {step.title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {isStepCompleted(index) && (
                <span className="text-green-600 text-sm font-medium">Completed!</span>
              )}
              {isStepRevealed(index) ? (
                <ChevronDown className="w-5 h-5 text-purple-500" />
              ) : (
                <ChevronRight className="w-5 h-5 text-purple-400" />
              )}
            </div>
          </button>

          {isStepRevealed(index) && (
            <div className="step-reveal px-4 pb-4 space-y-3">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800 text-sm mb-1">Dr Khanyile asks:</p>
                    <p className="text-blue-900">{step.instruction}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-yellow-800 text-sm mb-1">💡 Tip:</p>
                    <p className="text-yellow-900">{step.tip}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-400">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800 text-sm mb-1">✅ Answer:</p>
                    <p className="text-green-900 whitespace-pre-line">{step.answer}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 rounded-lg border-l-4 border-red-400">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800 text-sm mb-1">⚠️ Common Mistake:</p>
                    <p className="text-red-900">{step.commonMistake}</p>
                  </div>
                </div>
              </div>

              {!isStepCompleted(index) && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-700 mb-3 text-center">Did you understand this step?</p>
                  <div className="flex gap-3 justify-center">
                    <button 
                      onClick={() => handleCheck(index, true)}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2.5 rounded-lg font-semibold btn-press hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      I got it! ✅
                    </button>
                    <button 
                      onClick={() => handleCheck(index, false)}
                      className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-6 py-2.5 rounded-lg font-semibold btn-press hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      <XCircle className="w-4 h-4" />
                      Need help ❌
                    </button>
                  </div>
                  {checkedSteps[index] === false && (
                    <p className="text-red-600 text-sm mt-3 text-center animate-pulse">
                      No worries! Read the tip again and try the next step. Dr Khanyile believes in you! 💪
                    </p>
                  )}
                </div>
              )}

              {isStepCompleted(index) && (
                <div className="bg-green-100 p-3 rounded-lg text-center success-pulse">
                  <p className="text-green-700 font-semibold flex items-center justify-center gap-2">
                    <FlaskConical className="w-5 h-5" />
                    Great job! Step {step.number} mastered! 🎉
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
