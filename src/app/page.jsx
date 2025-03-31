// components/MyComponent.tsx
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">AI & Machine Learning for Middle School</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          An interactive course to introduce artificial intelligence and machine learning concepts to middle school students
        </p>
      </header>

      <section className="mb-16">
        <div className="bg-blue-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Welcome to the Course!</h2>
          <p className="mb-4">
            This course is designed to introduce middle school students to the exciting world of Artificial Intelligence and Machine Learning. 
            Through interactive lessons, visual aids, and hands-on activities, you'll learn about:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>What AI is and how it's different from regular computer programs</li>
            <li>How machines learn from data</li>
            <li>Supervised and unsupervised learning</li>
            <li>Large Language Models and how they understand text</li>
            <li>AI ethics and responsible use</li>
            <li>Creating with AI tools</li>
          </ul>
          <p className="text-blue-600 font-semibold">
            No prior programming experience required - just bring your curiosity!
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Course Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Module 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-yellow-100 flex items-center justify-center">
              <div className="text-6xl">🤖</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Module 1: Introduction to AI</h3>
              <p className="text-gray-600 mb-4">Learn what AI is, how it's different from regular computer programs, and where you encounter it in daily life.</p>
              <Link href="/modules/1">
                <a className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Start Module
                </a>
              </Link>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-green-100 flex items-center justify-center">
              <div className="text-6xl">🧠</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Module 2: How Machines Learn</h3>
              <p className="text-gray-600 mb-4">Discover how machines learn from data and how this differs from traditional programming.</p>
              <Link href="/modules/2">
                <a className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Start Module
                </a>
              </Link>
            </div>
          </div>

          {/* Module 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-purple-100 flex items-center justify-center">
              <div className="text-6xl">🔍</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Module 3: Supervised & Unsupervised Learning</h3>
              <p className="text-gray-600 mb-4">Learn about different approaches to machine learning and how they're used to solve problems.</p>
              <Link href="/modules/3">
                <a className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Start Module
                </a>
              </Link>
            </div>
          </div>

          {/* Module 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-blue-100 flex items-center justify-center">
              <div className="text-6xl">💬</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Module 4: Large Language Models</h3>
              <p className="text-gray-600 mb-4">Explore how AI understands and generates human language, and learn about attention mechanisms.</p>
              <Link href="/modules/4">
                <a className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Start Module
                </a>
              </Link>
            </div>
          </div>

          {/* Module 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-red-100 flex items-center justify-center">
              <div className="text-6xl">⚖️</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Module 5: AI Ethics & Responsibility</h3>
              <p className="text-gray-600 mb-4">Understand the ethical considerations and responsibilities when developing and using AI.</p>
              <Link href="/modules/5">
                <a className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Start Module
                </a>
              </Link>
            </div>
          </div>

          {/* Module 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-orange-100 flex items-center justify-center">
              <div className="text-6xl">🎨</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Module 6: Creating with AI</h3>
              <p className="text-gray-600 mb-4">Learn how to use AI as a creative tool and explore the future of AI technology.</p>
              <Link href="/modules/6">
                <a className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Start Module
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Interactive Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">AI Identification Quiz</h3>
              <p className="text-gray-600 mb-4">Test your knowledge of AI concepts with this interactive quiz.</p>
              <Link href="/activities/quiz">
                <a className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                  Start Quiz
                </a>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Image Classification Activity</h3>
              <p className="text-gray-600 mb-4">Experience supervised learning by training and testing an image classifier.</p>
              <Link href="/activities/image-classification">
                <a className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                  Try Activity
                </a>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Attention Mechanism Demo</h3>
              <p className="text-gray-600 mb-4">See how AI pays attention to different words to understand meaning.</p>
              <Link href="/activities/attention-demo">
                <a className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                  Try Demo
                </a>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Clustering Demo</h3>
              <p className="text-gray-600 mb-4">Explore unsupervised learning by grouping data points into clusters.</p>
              <Link href="/activities/clustering">
                <a className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                  Try Demo
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">For Teachers</h2>
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Teaching Resources</h3>
          <p className="mb-4">
            This course includes resources to help you integrate AI and ML concepts into your classroom:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Detailed lesson plans with learning objectives</li>
            <li>Classroom activities and discussion prompts</li>
            <li>Assessment tools and quizzes</li>
            <li>Visual aids and diagrams</li>
            <li>Extension activities for advanced students</li>
          </ul>
          <Link href="/teacher-resources">
            <a className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Access Teacher Resources
            </a>
          </Link>
        </div>
      </section>

      <footer className="text-center text-gray-500 mt-16 pt-8 border-t border-gray-200">
        <p>© 2025 AI & Machine Learning for Middle School</p>
        <p className="mt-2">Created for educational purposes</p>
      </footer>
    </div>
  );
}
