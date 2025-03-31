import React from 'react';
import Link from 'next/link';

export default function ModuleLayout({ params }) {
  const moduleId = params.id;
  const moduleData = getModuleData(moduleId);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-700">← Back to Home</a>
        </Link>
      </nav>
      
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{moduleData.title}</h1>
        <p className="text-xl text-gray-600">{moduleData.description}</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-8">
            <h2 className="text-xl font-bold mb-4">Module Lessons</h2>
            <ul className="space-y-2">
              {moduleData.lessons.map((lesson, index) => (
                <li key={index}>
                  <Link href={`/modules/${moduleId}/lessons/${index + 1}`}>
                    <a className="block p-2 hover:bg-blue-100 rounded transition-colors">
                      Lesson {index + 1}: {lesson.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-4 border-t border-gray-200">
              <h2 className="text-xl font-bold mb-4">Module Resources</h2>
              <ul className="space-y-2">
                <li>
                  <Link href={`/modules/${moduleId}/activities`}>
                    <a className="block p-2 hover:bg-green-100 rounded transition-colors">
                      Interactive Activities
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/modules/${moduleId}/assessment`}>
                    <a className="block p-2 hover:bg-yellow-100 rounded transition-colors">
                      Module Assessment
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/modules/${moduleId}/resources`}>
                    <a className="block p-2 hover:bg-purple-100 rounded transition-colors">
                      Additional Resources
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        
        <main className="lg:col-span-3">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Module Overview</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Learning Objectives</h3>
              <ul className="list-disc pl-6 space-y-1">
                {moduleData.learningObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Key Concepts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {moduleData.keyConcepts.map((concept, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded">
                    <h4 className="font-bold">{concept.term}</h4>
                    <p>{concept.definition}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Module Introduction</h3>
              <div className="prose max-w-none">
                {moduleData.introduction}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Visual Overview</h3>
              <div className="bg-gray-100 p-4 rounded-lg flex justify-center">
                <img 
                  src={moduleData.visualAid} 
                  alt={`Visual overview for ${moduleData.title}`}
                  className="max-w-full h-auto rounded"
                />
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">Ready to Begin?</h3>
              <p className="mb-4">Start with the first lesson or jump to any topic you're interested in.</p>
              <Link href={`/modules/${moduleId}/lessons/1`}>
                <a className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                  Start First Lesson
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function getModuleData(moduleId) {
  const modules = {
    "1": {
      title: "Introduction to AI",
      description: "Learn what artificial intelligence is, how it's different from regular computer programs, and where you encounter it in daily life.",
      learningObjectives: [
        "Define artificial intelligence and explain its basic principles",
        "Distinguish between AI and traditional computer programs",
        "Identify examples of AI in everyday life",
        "Understand the basic history and evolution of AI",
        "Recognize different types of AI applications"
      ],
      keyConcepts: [
        { term: "Artificial Intelligence", definition: "Computer systems that can perform tasks that normally require human intelligence" },
        { term: "Machine Learning", definition: "A subset of AI where computers learn from data without being explicitly programmed" },
        { term: "Algorithm", definition: "A set of rules or instructions for solving a problem or completing a task" },
        { term: "Training Data", definition: "Examples used to teach AI systems to recognize patterns" }
      ],
      introduction: "Artificial Intelligence (AI) is all around us, from the voice assistants on our phones to the recommendations we get while watching videos online. But what exactly is AI? How does it work? And how is it different from regular computer programs? In this module, we'll explore these questions and more as we begin our journey into understanding AI and machine learning.",
      visualAid: "/images/module1/ai_vs_regular_programs.png",
      lessons: [
        { title: "What is Artificial Intelligence?" },
        { title: "AI vs. Regular Computer Programs" }
      ]
    },
    "2": {
      title: "How Machines Learn",
      description: "Discover how machines learn from data and how this differs from traditional programming approaches.",
      learningObjectives: [
        "Explain the basic concept of machine learning",
        "Compare traditional programming to machine learning approaches",
        "Understand the importance of data in machine learning",
        "Identify the basic steps in the machine learning process",
        "Recognize how machines use patterns to make predictions"
      ],
      keyConcepts: [
        { term: "Machine Learning", definition: "A way for computers to learn from examples rather than following explicit instructions" },
        { term: "Training", definition: "The process of teaching a machine learning model using data" },
        { term: "Features", definition: "The individual properties or characteristics that the algorithm uses to make decisions" },
        { term: "Pattern Recognition", definition: "The ability to detect arrangements and regularities in data" }
      ],
      introduction: "Have you ever wondered how computers learn? Unlike humans, they don't go to school or read books. Instead, they learn through a process called machine learning, where they analyze data to find patterns. In this module, we'll explore how machines learn, why this approach is different from traditional programming, and why data is so important in teaching machines.",
      visualAid: "/images/module2/traditional_vs_ml.png",
      lessons: [
        { title: "Machine Learning Basics" },
        { title: "Training Data and Algorithms" }
      ]
    },
    "3": {
      title: "Supervised and Unsupervised Learning",
      description: "Learn about different approaches to machine learning and how they're used to solve different types of problems.",
      learningObjectives: [
        "Distinguish between supervised and unsupervised learning",
        "Understand how supervised learning uses labeled data to make predictions",
        "Explain how unsupervised learning finds patterns in unlabeled data",
        "Identify real-world applications of both learning approaches",
        "Recognize when to use each type of learning for different problems"
      ],
      keyConcepts: [
        { term: "Supervised Learning", definition: "Learning from labeled examples where the correct answers are provided" },
        { term: "Unsupervised Learning", definition: "Learning from unlabeled data to find hidden patterns or structures" },
        { term: "Classification", definition: "Predicting which category something belongs to" },
        { term: "Clustering", definition: "Grouping similar items together based on their features" }
      ],
      introduction: "There are different ways machines can learn, just like there are different ways humans can learn. Sometimes we learn with a teacher who gives us the right answers, and sometimes we discover patterns on our own. Machines learn in similar ways! In this module, we'll explore supervised learning (learning with a teacher) and unsupervised learning (finding patterns without guidance).",
      visualAid: "/images/module3/supervised_vs_unsupervised.png",
      lessons: [
        { title: "Understanding Supervised Learning" },
        { title: "Exploring Unsupervised Learning" }
      ]
    },
    "4": {
      title: "Large Language Models and Attention Mechanisms",
      description: "Explore how AI understands and generates human language, and learn about the attention mechanisms that power modern language models.",
      learningObjectives: [
        "Understand what Large Language Models (LLMs) are and how they work",
        "Explain the basic concept of attention mechanisms in AI",
        "Recognize how AI processes relationships between words",
        "Identify applications of LLMs in everyday technology",
        "Understand the capabilities and limitations of language models"
      ],
      keyConcepts: [
        { term: "Large Language Model (LLM)", definition: "AI systems trained on vast amounts of text that can understand and generate human language" },
        { term: "Attention Mechanism", definition: "A technique that helps AI models focus on relevant parts of input data" },
        { term: "Tokenization", definition: "Breaking text into smaller units (words or parts of words) for processing" },
        { term: "Context", definition: "The surrounding information that helps determine the meaning of words or phrases" }
      ],
      introduction: "Have you ever wondered how AI assistants like Siri or Alexa understand your questions? Or how AI can write stories or answer complex questions? In this module, we'll explore Large Language Models (LLMs), the technology behind these capabilities. We'll also learn about attention mechanisms, which help AI understand the relationships between words in a sentence, just like how you pay attention to important details when reading.",
      visualAid: "/images/module4/llm_process.png",
      lessons: [
        { title: "Introduction to Large Language Models (LLMs)" },
        { title: "Understanding Attention Mechanisms" }
      ]
    },
    "5": {
      title: "AI Ethics and Responsibility",
      description: "Understand the ethical considerations and responsibilities when developing and using AI technology.",
      learningObjectives: [
        "Identify ethical considerations in AI development and use",
        "Understand the concept of bias in AI systems",
        "Recognize the importance of privacy and data protection",
        "Discuss the social impact of AI technologies",
        "Develop a framework for thinking about responsible AI use"
      ],
      keyConcepts: [
        { term: "AI Ethics", definition: "The branch of ethics that focuses on the moral issues related to artificial intelligence" },
        { term: "Bias", definition: "Unfair preferences or prejudices in AI systems, often reflecting biases in training data" },
        { term: "Transparency", definition: "The ability to understand how AI makes decisions" },
        { term: "Privacy", definition: "The protection of personal data and information used by AI systems" }
      ],
      introduction: "As AI becomes more powerful and widespread, it's important to think about how we use it responsibly. AI systems can reflect the biases in their training data, make decisions that affect people's lives, and raise questions about privacy and fairness. In this module, we'll explore the ethical considerations of AI and discuss how we can develop and use AI in ways that benefit everyone.",
      visualAid: "/images/module5/ai_ethics.png",
      lessons: [
        { title: "Understanding AI Ethics" },
        { title: "Responsible AI Development and Use" }
      ]
    },
    "6": {
      title: "Creating with AI",
      description: "Learn how to use AI as a creative tool and explore the future of AI technology.",
      learningObjectives: [
        "Understand how AI can be used as a creative tool",
        "Learn about AI-assisted creation in art, writing, and music",
        "Explore the concept of human-AI collaboration",
        "Identify future trends and possibilities in AI technology",
        "Develop ideas for your own AI-assisted projects"
      ],
      keyConcepts: [
        { term: "Generative AI", definition: "AI systems that can create new content like images, text, or music" },
        { term: "Prompt Engineering", definition: "The skill of crafting effective instructions to get desired results from AI" },
        { term: "Human-AI Collaboration", definition: "The process of humans and AI working together on creative projects" },
        { term: "AI Literacy", definition: "The ability to understand, use, and think critically about AI technologies" }
      ],
      introduction: "AI isn't just for solving problems—it can also be a powerful creative partner! From generating artwork to composing music to helping with writing, AI tools are opening up new possibilities for creativity. In this module, we'll explore how AI can be used as a creative tool, how humans and AI can collaborate, and what the future might hold for AI technology.",
      visualAid: "/images/module6/ai_creativity.png",
      lessons: [
        { title: "AI as a Creative Tool" },
        { title: "The Future of AI Technology" }
      ]
    }
  };
  
  return modules[moduleId] || modules["1"];
}
