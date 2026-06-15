import questionsData from '@/data/questions.json';
import StepReveal from '@/components/StepReveal';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, FlaskConical, Award, Volume2 } from 'lucide-react';

export function generateStaticParams() {
  const { questions } = questionsData;
  return questions.map((q) => ({
    id: q.id,
  }));
}

export default function QuestionPage({ params }: { params: { id: string } }) {
  const { questions } = questionsData;
  const question = questions.find(q => q.id === params.id);

  if (!question) return notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-purple-100 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium btn-press"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Volume2 className="w-4 h-4" />
            <span>Sound on</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Question Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-full">
              {question.year} • {question.paper}
            </span>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
              question.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
              question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {question.difficulty}
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-full">
              {question.marks} marks
            </span>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <FlaskConical className="w-7 h-7 text-purple-600" />
            {question.topic}
          </h1>
        </div>

        {/* Question Box */}
        <div className="bg-white rounded-xl border-2 border-purple-200 p-5 mb-6 shadow-sm">
          <p className="text-sm font-semibold text-purple-600 mb-2 uppercase tracking-wide">
            DBE Question
          </p>
          <p className="text-gray-800 whitespace-pre-line leading-relaxed">
            {question.question}
          </p>
          {question.diagram && (
            <div className="mt-4 bg-gray-100 rounded-lg p-4 text-center text-gray-400">
              📊 [Diagram: {question.diagram}]
              <p className="text-sm mt-1">Add the actual DBE diagram image here</p>
            </div>
          )}
        </div>

        {/* Dr Khanyile's Method */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-lg">
              👨‍🏫
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Dr Khanyile's Method</h2>
              <p className="text-sm text-gray-500">Click each step to reveal the answer</p>
            </div>
          </div>

          <StepReveal 
            steps={question.steps} 
            onComplete={() => {
              // Could trigger celebration sound here
            }}
          />
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-purple-600 to-violet-700 rounded-xl p-5 text-white mb-8">
          <div className="flex items-start gap-3">
            <Award className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-yellow-300 mb-1">🔑 Key Takeaway</p>
              <p className="text-purple-100 leading-relaxed">{question.keyTakeaway}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center py-4 border-t border-gray-200">
          <Link 
            href="/" 
            className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            All Questions
          </Link>
          <p className="text-sm text-gray-400">
            Question {questions.findIndex(q => q.id === question.id) + 1} of {questions.length}
          </p>
        </div>
      </div>
    </div>
  );
}
