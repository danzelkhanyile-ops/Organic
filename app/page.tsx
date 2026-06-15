import Link from 'next/link';
import questionsData from '@/data/questions.json';
import { FlaskConical, BookOpen, GraduationCap, Volume2 } from 'lucide-react';

export default function Home() {
  const { questions } = questionsData;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 via-violet-600 to-purple-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FlaskConical className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Organic Chemistry
            </h1>
          </div>
          <p className="text-xl text-purple-100 mb-2">with Dr Khanyile</p>
          <p className="text-purple-200 max-w-lg mx-auto">
            Master DBE past papers with step-by-step explanations, tips, and sound-enhanced learning
          </p>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-xl shadow-lg p-4 flex justify-around items-center">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-700">{questions.length}</p>
            <p className="text-sm text-gray-500">Questions</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-700">2014-2023</p>
            <p className="text-sm text-gray-500">DBE Papers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-700">100%</p>
            <p className="text-sm text-gray-500">Free</p>
          </div>
        </div>
      </div>

      {/* Questions Grid */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-800">DBE Past Paper Questions</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {questions.map((q) => (
            <Link 
              key={q.id} 
              href={`/questions/${q.id}`}
              className="card-hover bg-white rounded-xl p-5 border border-purple-100 shadow-sm"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                    {q.year} • {q.paper}
                  </span>
                  <h3 className="font-bold text-lg text-gray-800 leading-tight">{q.topic}</h3>
                </div>
                <span className="text-3xl">🧪</span>
              </div>

              <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                {q.question.substring(0, 120)}...
              </p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-gray-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>{q.marks} marks</span>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  q.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                  q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {q.difficulty}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-1 text-purple-500 text-sm font-medium">
                <span className="sound-wave">
                  <span></span><span></span><span></span><span></span><span></span>
                </span>
                <Volume2 className="w-4 h-4" />
                <span>{q.steps.length} steps with sound</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm">
        <p>🔊 Turn up your volume for the full Dr Khanyile experience</p>
        <p className="mt-1">Built for South African matric students</p>
      </footer>
    </div>
  );
}
